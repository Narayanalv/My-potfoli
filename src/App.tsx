import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </>
  )
}

export default App
