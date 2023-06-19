// import Slideshow from "../../Components/Slideshow"
// import testImage from "../../Assets/Test-picture.jpg"
import Carousel from "../../Components/Carousel"
import Collapsible from "../../Components/Collapse"
import Rating from "../../Components/Rating"
import Tag from "../../Components/Tag"


function IndividualProperty(){
    return (
        <section className="properties">
            <Carousel/>
            <div className="properties__content">
                <div className="properties__info">
                    <h1 className="properties__title">Title</h1>
                    <h2 className="properties__subtitle">Subtitle</h2>
                    <div className="tags__display">
                        <Tag
                            text="text1"/>
                        <Tag
                            text="text2"/>
                        <Tag
                            text="text3"/>
                    </div>
                </div>
                <div className="properties__host">
                    <div className="properties__host__info">
                        Host name 
                        Host picture
                    </div>
                    <div className="properties__host__rating">
                        <Rating/>
                    </div>
                </div>
            </div>
            <div className="collapsible collapsible__features">
                <Collapsible className="collapsible__half"
                    title="Description"
                    content="try this"/>
                <Collapsible className="collapsible__half"
                    title="Équipements"/>
            </div>
        </section>
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