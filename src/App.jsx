import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Home from "../src/pages/Home"
import About from "../src/pages/Abouts"
import Contact from "../src/pages/Contact"
import Setting from "../src/pages/Setting"
import Login from "../src/pages/Login"

function App() {
    return(
      <>
       <BrowserRouter>
      <Routes>
         <Route path="/" element={ <Home />}/>
         <Route path="/about" element={ <About/>}/>
         <Route path="/contact" element={ <Contact/>}/>
         <Route path="/setting" element={ <Setting />} />
         <Route path="/login" element={ <Login />} />
      </Routes>
      </BrowserRouter>
      </>
    )
}

export default App
