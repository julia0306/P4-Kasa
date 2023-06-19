import testImage from "../../Assets/Test-picture.jpg"

function Carousel(){
    return (
        <div className="carousel">
            <img src ={testImage} alt ="carousel" className="carousel__image"/>
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