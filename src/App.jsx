import './App.css'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Signup />
        <Contact />
        <Projects />
        <About />
        <Home />
      </main>
    </>
  )
}

export default App