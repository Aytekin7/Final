import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import About from "./pages/About/About"
import Blog from "./pages/Blog/Blog"
import Footer from "./pages/Footer/Footer"
import Home from './pages/Home/Home'
import Team from "./pages/Team/Team"

function App() {


  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>

    </Routes>
   <About/>
    <Blog/>
    <Team/>
    <Footer/>
    
    </>
  )
}

export default App
