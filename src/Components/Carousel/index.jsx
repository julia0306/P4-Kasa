import testImage from "../../Assets/Test-picture.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

function Carousel(){
    return (
        <div className="carousel">
            <img src ={testImage} alt ="carousel" className="carousel__image"/>
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