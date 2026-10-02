import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Projects />
      </main>
    </>
  )
}

export default App