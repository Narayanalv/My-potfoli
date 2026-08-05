import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { heroInfo } from '../data';

const Hero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBlasted, setIsBlasted] = useState(false);
  const isBlastedRef = useRef(false);

  useEffect(() => {
    isBlastedRef.current = isBlasted;
  }, [isBlasted]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main 3D Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Shatter/Exploding Shard Geometry Group
    const shardCount = 28;
    const shards: {
      mesh: THREE.Mesh;
      wireframe: THREE.LineSegments;
      basePos: THREE.Vector3;
      blastVector: THREE.Vector3;
      baseRot: THREE.Euler;
      blastRot: THREE.Vector3;
    }[] = [];

    const shardGroup = new THREE.Group();
    mainGroup.add(shardGroup);

    for (let i = 0; i < shardCount; i++) {
      const geomType = i % 3;
      let geometry: THREE.BufferGeometry;
      if (geomType === 0) {
        geometry = new THREE.TetrahedronGeometry(0.55 + Math.random() * 0.35, 0);
      } else if (geomType === 1) {
        geometry = new THREE.BoxGeometry(0.5 + Math.random() * 0.4, 0.5 + Math.random() * 0.4, 0.5 + Math.random() * 0.4);
      } else {
        geometry = new THREE.OctahedronGeometry(0.5 + Math.random() * 0.3, 0);
      }

      const material = new THREE.MeshStandardMaterial({
        color: 0x11131a,
        roughness: 0.15,
        metalness: 0.92,
        wireframe: false,
      });

      const mesh = new THREE.Mesh(geometry, material);

      const wireframeMat = new THREE.LineBasicMaterial({
        color: 0x00f0c8,
        transparent: true,
        opacity: 0.4,
      });
      const wireframeGeom = new THREE.WireframeGeometry(geometry);
      const wireframe = new THREE.LineSegments(wireframeGeom, wireframeMat);

      const radius = 1.35;
      const phi = Math.acos(-1 + (2 * i) / shardCount);
      const theta = Math.sqrt(shardCount * Math.PI) * phi;

      const baseX = radius * Math.cos(theta) * Math.sin(phi);
      const baseY = radius * Math.sin(theta) * Math.sin(phi);
      const baseZ = radius * Math.cos(phi);

      const basePos = new THREE.Vector3(baseX, baseY, baseZ);
      mesh.position.copy(basePos);
      wireframe.position.copy(basePos);

      const blastVector = basePos.clone().normalize().multiplyScalar(3.2 + Math.random() * 2.5);
      const baseRot = new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      const blastRot = new THREE.Vector3((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4);

      mesh.rotation.copy(baseRot);
      wireframe.rotation.copy(baseRot);

      shardGroup.add(mesh);
      shardGroup.add(wireframe);

      shards.push({
        mesh,
        wireframe,
        basePos,
        blastVector,
        baseRot,
        blastRot,
      });
    }

    // 2. Floating Ember/Spark Particles
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      particleSpeeds.push(0.008 + Math.random() * 0.015);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f0c8,
      size: 0.065,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 3. Dynamic Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f0c8, 4, 18);
    cyanPointLight.position.set(5, 5, 5);
    scene.add(cyanPointLight);

    const whitePointLight = new THREE.PointLight(0xffffff, 2.5, 18);
    whitePointLight.position.set(-5, -5, 5);
    scene.add(whitePointLight);

    // 4. Mouse Tracking & Interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let blastFactor = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const targetBlast = isBlastedRef.current ? 1 : 0;
      blastFactor += (targetBlast - blastFactor) * 0.08;

      mainGroup.rotation.y = elapsedTime * 0.25 + targetX * 0.4;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.1 - targetY * 0.4;
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      shards.forEach((shard) => {
        const targetPos = new THREE.Vector3().copy(shard.basePos).addScaledVector(shard.blastVector, blastFactor);
        shard.mesh.position.lerp(targetPos, 0.12);
        shard.wireframe.position.lerp(targetPos, 0.12);

        shard.mesh.rotation.x = shard.baseRot.x + shard.blastRot.x * blastFactor;
        shard.mesh.rotation.y = shard.baseRot.y + shard.blastRot.y * blastFactor;
        shard.wireframe.rotation.x = shard.mesh.rotation.x;
        shard.wireframe.rotation.y = shard.mesh.rotation.y;
      });

      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i];
        if (positions[i * 3 + 1] > 6) {
          positions[i * 3 + 1] = -6;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="theme-dark position-relative min-vh-100 d-flex flex-column justify-content-between overflow-hidden pt-5">
      {/* Interactive 3D WebGL Canvas Viewport */}
      <div 
        ref={containerRef} 
        className="position-absolute inset-0 w-100 h-100" 
        style={{ zIndex: 1, cursor: isBlasted ? 'grabbing' : 'grab' }} 
        onMouseDown={() => setIsBlasted(true)}
        onMouseUp={() => setIsBlasted(false)}
        onTouchStart={() => setIsBlasted(true)}
        onTouchEnd={() => setIsBlasted(false)}
        onMouseEnter={() => setIsBlasted(true)}
        onMouseLeave={() => setIsBlasted(false)}
      />

      {/* Hero Viewport Content */}
      <div className="container position-relative py-5 my-auto" style={{ zIndex: 2, pointerEvents: 'none' }}>
        <div className="row align-items-center">
          <div className="col-lg-7 col-xl-6 text-start" style={{ pointerEvents: 'auto' }}>
            <div className="font-mono text-cyan mb-3 fw-bold" style={{ fontSize: '0.9rem', letterSpacing: '0.12em' }}>
              ✦ {heroInfo.name} — {heroInfo.roleTitle}
            </div>

            <h1 className="font-title display-1 fw-bold text-white text-uppercase mb-3" style={{ fontSize: 'clamp(2.75rem, 6vw, 5.25rem)', lineHeight: '0.96', letterSpacing: '-0.035em' }}>
              SOFTWARE DEVELOPER
            </h1>

            <p className="font-mono text-cyan mb-4 fw-medium fs-5" style={{ letterSpacing: '0.02em' }}>
              {heroInfo.tagline}
            </p>

            <p className="lead text-white text-opacity-80 mb-4 fw-normal" style={{ maxWidth: '560px', fontSize: '1.125rem', lineHeight: '1.75' }}>
              {heroInfo.summary}
            </p>

            {/* Action Button: VIEW PROJECTS */}
            <div className="d-flex flex-wrap gap-3 pt-2">
              <a 
                href="#projects" 
                className="btn-start-project"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                VIEW PROJECTS <span className="arrow-hover">→</span>
              </a>

              <a 
                href={`mailto:${heroInfo.email}`} 
                className="nav-pill-btn py-3 px-4"
              >
                CONTACT ME <span className="arrow-hover">✉️</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Viewport Anchors */}
      <div className="container position-relative pb-4 pt-2" style={{ zIndex: 2 }}>
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 border-top border-secondary border-opacity-20 pt-3 font-mono">
          <div className="anchor-est-badge text-white d-flex align-items-center gap-3">
            <span className="fw-bold text-cyan">EST. 2024</span>
            <span className="text-white text-opacity-50">|</span>
            <span className="text-white text-opacity-80">{heroInfo.location}</span>
          </div>

          <div 
            className="text-white small mx-auto mx-md-0 text-center py-2 px-4 rounded-pill border border-secondary border-opacity-30 user-select-none cursor-pointer"
            style={{ 
              fontSize: '0.8rem', 
              letterSpacing: '0.08em', 
              background: isBlasted ? 'rgba(0, 240, 200, 0.2)' : 'rgba(13, 13, 13, 0.8)',
              borderColor: isBlasted ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.2)',
              pointerEvents: 'auto'
            }}
            onMouseDown={() => setIsBlasted(true)}
            onMouseUp={() => setIsBlasted(false)}
            onTouchStart={() => setIsBlasted(true)}
            onTouchEnd={() => setIsBlasted(false)}
          >
            {isBlasted ? '💥 BLASTED! RELEASE TO REASSEMBLE' : 'HOLD TO 💥 BLAST / DARE ⚡ TO TOUCH THE LINES'}
          </div>

          <div className="text-white text-opacity-50 small ms-auto text-end" style={{ fontSize: '0.8rem' }}>
            2.5+ YEARS BACKEND & RAG ARCHITECTURE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
