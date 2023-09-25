import Carrousel from "./Components/Carrousel/Carrousel"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Separator from "./Components/Separator/Separator"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Carrousel />
        <Separator />
        <div className="h-80 text-center"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eius, deserunt, quae voluptas aut laborum culpa nobis accusamus debitis corrupti natus nulla amet esse veniam nostrum voluptate! Consequatur, voluptas ducimus.</div>
        <div className="h-80 text-center"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eius, deserunt, quae voluptas aut laborum culpa nobis accusamus debitis corrupti natus nulla amet esse veniam nostrum voluptate! Consequatur, voluptas ducimus.</div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
