import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div className="flex align center p-4 h-full">
            <Link to="/">
                <img
                    src="/images/logo-web-250x250x_c_10128_1643966292.png"
                    alt="corporateLogo"
                    className="h-24 bottom-4 relative min-w-fit mr-2 right-4"
                />
            </Link>
            <div className="xl:ml-2">
                <span className="text-xs font-semibold block text-white font-[bankGothic] md:text-2xl"><span className="text-slate-300">NEO</span>CORP S.A.</span>
                <span className="text-xs text-white font-[bankGothic] md:text-lg">INSUMOS PARA LA SALUD</span>
            </div>
        </div>
    )
}

export default Logo