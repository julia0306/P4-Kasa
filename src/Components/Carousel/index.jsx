import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


function Carousel(props){
    const slides = props.pictures || [];
    const [currentIndex, setCurrentIndex] = useState (0);
    const goToPrevious =() =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    }
    return (
        <div className="carousel">
            <img className="carousel__image" src = {slides[currentIndex]} alt="carousel"/>
            <div className="carousel__arrows">
                <button onClick={goToPrevious} className={` ${slides.length === 1 ? 'not-displayed' : ''}`}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button onClick={goToNext} className={` ${slides.length === 1 ? 'not-displayed' : ''}`}><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
            <div className={`carousel__navigation ${slides.length === 1 ? 'not-displayed' : ''}`}> {currentIndex + 1}/{slides.length}</div>
        </div>
    )
}

export default Carousel
