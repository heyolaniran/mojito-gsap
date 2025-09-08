import Art from "./components/art"
import Menu from "./components/menu"
import About from "./components/ui/about"
import Cocktails from "./components/ui/cocktails"
import Hero from "./components/ui/hero"
import NavBar from "./components/ui/nav-bar"

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  )
}

export default App