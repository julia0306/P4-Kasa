import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


function Carousel(props){
    const [currentIndex, setCurrentIndex] = useState (0);
    return (
        <div className="carousel">
            <img className="carousel__image" src = {props.pictures[currentIndex]} alt="carousel"/>
            <div className="carousel__arrows">
                <button><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
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