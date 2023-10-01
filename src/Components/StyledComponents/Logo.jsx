import React from 'react'

const Logo = () => {
  return (
      <div className="flex align center p-4 m-2 h-full">
          <a href="/">
              <img
                  src="/images/logo-web-250x250x_c_10128_1643966292.png"
                  alt="corporateLogo"
                  className="h-24 bottom-4 relative min-w-fit mr-4"
              />
          </a>
          <div className="md:ml-12 xl:ml-2">
              <span className="text-2xl font-semibold block text-white font-[bankGothic] lg:text-sm xl:text-3xl"><span className="text-slate-300">NEO</span>CORP S.A.</span>
              <span className="text-lg text-white font-[bankGothic] lg:text-sm">INSUMOS PARA LA SALUD</span>
          </div>
      </div>
  )
}

export default Logo