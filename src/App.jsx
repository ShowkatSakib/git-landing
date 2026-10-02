import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <About />
        <Home />
      </main>
    </>
  )
}

export default App