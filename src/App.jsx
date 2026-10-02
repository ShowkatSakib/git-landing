import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Contact />
        <Projects />
        <About />
        <Home />
      </main>
    </>
  )
}

export default App