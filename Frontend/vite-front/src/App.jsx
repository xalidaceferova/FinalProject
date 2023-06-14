import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Site/Pages/Home/Home"
import Shop from "./Site/Pages/Shop/Shop"
import Makeup from "./Site/Pages/Makeup/Makeup"
import Skincare from "./Site/Pages/Skincare/Skincare"
import Haircare from "./Site/Pages/Haircare/Haircare"
import About from "./Site/Pages/About/About"
import Contact from "./Site/Pages/Contact/Contact"
import Header from "./Layout/Header/Header"
import Footer from "./Layout/Footer/Footer"
function App() {
  

  return (
    <BrowserRouter>
    <Header />
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/makeup" element={<Makeup />} />
    <Route path="/skincare" element={<Skincare />} />
    <Route path="/haircare" element={<Haircare />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
      </Routes>
         <Footer />
    </BrowserRouter>
  )
}

export default App
