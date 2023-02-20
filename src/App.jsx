import "./App.css"
import Benefits from "./components/Benefits"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
