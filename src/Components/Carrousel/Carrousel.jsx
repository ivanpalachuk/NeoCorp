import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Carrousel = () => {
    const [slides, setSlides] = useState([
        { text: "Responsabilidad y transparencia", url: "../images/asian-woman-patient-with-bandage-compression-knee-brace-support-injury-on-the-bed-in-nursing-hospital-healthcare-and-medical-support-768x513.jpg", loaded: false },
        { text: "Compromiso y comunicacion", url: "../images/cirugia-ortopedia-opt.jpg", loaded: false },
        { text: "Acompañando de cerca cada caso", url: "../images/Traumatologia-y-Ortopedia.jpg", loaded: false },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);
    const [currentText, setCurrentText] = useState(slides[0].text);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    useEffect(() => {
        if (slides.every((slide) => slide.loaded)) {
            setAllImagesLoaded(true);
        }
    }, [slides]);

    const handleImageLoad = (index) => {
        const updatedSlides = [...slides];
        updatedSlides[index].loaded = true;
        setSlides(updatedSlides);
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setCurrentText(slides[newIndex].text);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setCurrentText(slides[newIndex].text);
    };

    return (
        <>
            <div className="mx-auto w-9/12 h-80 relative group z-0 shadow-md shadow-[#67c6e0] rounded-xl" id="inicio">
                {allImagesLoaded && (
                    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full bg-center bg-cover duration-500 rounded-xl"></div>
                )}
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.url}
                        alt="Slide"
                        className="hidden"
                        onLoad={() => handleImageLoad(index)}
                    />
                ))}
                <div className="absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft size={30} onClick={prevSlide} />
                </div>
                <div className="absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight size={30} onClick={nextSlide} />
                </div>
                <div className="absolute top-[50%] transform -translate-y-1/2 flex justify-center items-center inset-0 w-1/2 uppercase  text-4xl  mx-auto  rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    {currentText}
                </div>
            </div>
        </>
    );
};

export default Carrousel;
