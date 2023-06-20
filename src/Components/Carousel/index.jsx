import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


function Carousel(props){
    const slides = props.pictures || [];
    const [currentIndex, setCurrentIndex] = useState (0);
    const goToPrevious =() =>{
        // Je vérifie si je suis déjà sur la slide 1
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
                <button onClick={goToPrevious}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button onClick={goToNext}><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
            <div className="carousel__navigation">{currentIndex +1}/{slides.length}</div>
        </div>
    )
}

export default Carousel

// function CarouselPicture(props) {
//     return (
//         <div className='carousel'>
//             <img src={props.image} alt="carousel" className="carousel__image"/>
//             <h2>{props.title}</h2>
//         </div>
//     )
// }

// export default CarouselPicture