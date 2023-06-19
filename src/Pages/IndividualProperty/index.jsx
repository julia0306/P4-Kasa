// import Slideshow from "../../Components/Slideshow"
// import testImage from "../../Assets/Test-picture.jpg"
import Carousel from "../../Components/Carousel"
import Collapsible from "../../Components/Collapse"


function IndividualProperty(){
    return (
        <div className="properties">
            <Carousel/>
            <h1 className="properties__title">Title</h1>
            <h2 className="properties__subtitle">Subtitle</h2>
            <p>tags</p>
            <p>rating</p>
            <div className="collapsible collapsible__features">
                <Collapsible className="collapsible collapsible__half"
                    title="Description"/>
                <Collapsible className="collapsible collapsible__half"
                    title="Équipements"/>
            </div>
        </div>
    )
}

export default IndividualProperty

// function IndividualProperty(){
//     return (
//         <Slideshow
//             image={testImage}/>
//     )
// }

// export default IndividualProperty