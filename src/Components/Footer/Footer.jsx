import { Link } from "react-router-dom"
import { BiSolidHeart } from "react-icons/bi"
import "./Footer.css"


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="wavef-container">
                <div className="fOce">
                    <div className="waveF"></div>
                    <div className="waveF wave2F"></div>
                </div>
            </div>

            < footer className="bg-[#266f83] font-custom1 static bottom-0 xl:text-xl z-1" >
                <div className="mx-auto px-4 pb-6 pt-8 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex justify-center text-teal-600 sm:justify-start">
                            <img
                                className="h-24"
                                src=""
                            />
                        </div>
                        <p className="mt-4 max-w-md text-center leading-relaxed text-white sm:text-left lg:mt-0 font-custom1">
                            Acompañando en tu necesidad, con seguridad
                        </p>
                    </div>


                    <div className="mt-4 grid grid-cols-1 gap-9 border-t border-gray-100 pt-16 md:grid-cols-4">
                        <div className=" text-white text-center uppercase ">
                            <p>Nos acompañan para brindar la mejor calidad</p>
                            <div className="partners-logos flex p-2 justify-between">
                                <img src="" className="w-24"></img>
                                <img src="" className="w-24"></img>
                                <img src="" className="w-24"></img>
                            </div>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-xl font-bold text-white uppercase">Sobre Nosotros</p>

                            <ul className="mt-4 space-y-2 text-lg text-white uppercase">
                                <li>
                                    <Link to="/cultura" className="text-white transition hover:text-white/75" onClick={scrollToTop}>Nuestra cultura</Link>
                                </li>
                                <li>
                                    <Link to="/locales" className="text-white transition hover:text-white/75" onClick={scrollToTop}> Nuestras sucursales</Link>

                                </li>
                                <li>
                                    <Link to="/trabajo" className="text-white transition hover:text-white/75" onClick={scrollToTop}> Ofertas Laborales</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-xl font-bold text-white uppercase">Productos</p>

                            <ul className="mt-4 space-y-2 text-lg text-white uppercase">
                                <li>
                                    <Link to="https://drive.google.com/file/d/1IqtugZFTnDlgBDVUoXrJ8Cv_JxUczkZQ/view" className="text-white transition hover:text-white/75">Menu</Link>
                                </li>

                                <li>
                                    <Link to="/menu" className="text-white transition hover:text-white/75" onClick={scrollToTop}>Hamburguesas</Link>
                                </li>

                                <li>
                                    <Link to="https://pedidos.theboxburgerculture.com.ar/" className="text-white transition hover:text-white/75">APP de pedidos</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-xl font-bold text-white uppercase">Franquicias</p>

                            <ul className="mt-4 space-y-2 text-lg text-white uppercase">
                                <li>
                                    <Link to="/franquicias" className="text-white transition hover:text-white/75" onClick={scrollToTop}>Escribinos para saber mas</Link>
                                </li>
                            </ul>
                        </div>



                    </div>
                    <p className="text-center text-sm text-white-500 sm:text-left flex justify-center mt-8">
                        2023 - Made with <BiSolidHeart style={{ color: "#cb1515", margin: "1px" }} />
                        by <a href="mailto:ivan.palachuk@outlook.com" target="_blank" rel="noopener noreferrer">Zarseven Soft</a>
                    </p>
                </div>
            </footer >
        </>
    )
}

export default Footer