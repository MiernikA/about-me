import { BrowserRouter } from "react-router-dom"

import { Navbar, Header, Experience, Contact, Technologies, Projects, About, Sources } from './components'

const App = () => {

  return (
    <BrowserRouter>

      <div className="relative z-0 bg-section-pattern bg-contain">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Header />
        </div>

        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
        <Sources />
      </div>



    </BrowserRouter>
  )
}

export default App
