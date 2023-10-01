import React from 'react';

const AboutUs = () => {
    return (

        <section id='aboutUs'>
            <h1 className='font-[bankGothic] text-center text-3xl lg:text-5xl p-4 bg-[#266f83] text-white relative z-10' >Quienes Somos</h1>
            <div className='flex flex-col xl:flex-row mx-8'>
                <div className='w-full xl:w-1/2 bg-[#266f83]/60 flex items-center'>
                    <p className='text-center text-white text-2xl xl:text-3xl p-10 font-extralight'>
                        Somos <span className='font-[bankGothic]'>NEO Corp S.A.</span>, una empresa integrada con personal con mas de 10 años de experiencia en el rubro, dedicada a la provisión de insumos para la salud, ya sean implantes, instrumental, descartables y equipamiento. Nuestra misión es proveer soluciones especializadas en cirugías, que logren satisfacer las necesidades de los profesionales y los pacientes como asi tambien de su cobertura de salud. Trabajamos en la búsqueda de un mejoramiento continuo que nos permita crecer como organización, comprometiéndonos a estar actualizados y garantizando la confiabilidad de nuestros productos.
                    </p>
                </div>
                <div className='w-full xl:w-1/2'>
                    <img src='./images/pexels-cottonbro-studio-4098341.jpg' className='object-cover w-full h-screen' alt='Imagen' />
                </div>
            </div>
        </section>

    );
}

export default AboutUs;
