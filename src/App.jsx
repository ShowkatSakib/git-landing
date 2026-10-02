import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Projects />
        <About />
        <Home />
      </main>
    </>
  )
}

export default App