import Carrousel from "./Components/Carrousel/Carrousel"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ProductsView from "./Components/ProductsView/ProductsView";
import ServicesView from "./Components/ServicesView/ServicesView";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Carrousel />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/#aboutUs" element={<AboutUs />} />
        </Routes>
        <AboutUs />
        <FloatingWhatsApp
          phoneNumber="+5492235045492"
          accountName="NeoCorp"
          chatMessage="Hola,¿Cómo podemos ayudarte?"
          statusMessage="Normalmente respondemos dentro de la hora"
          placeholder="Escribe un mensaje"
        />
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
