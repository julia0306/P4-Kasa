import { allProperties } from "../../Data/Properties";
import { useParams } from 'react-router-dom'
import Carousel from "../../Components/Carousel"
import Collapsible from "../../Components/Collapse"
import Rating from "../../Components/Rating"
import Tag from "../../Components/Tag"


function IndividualProperty(){
    const {id} = useParams();
    const selectedProperty = allProperties.find(property => property.id === id);
    const {title} = selectedProperty || {}
    const {location} = selectedProperty || {}
    const {tags} = selectedProperty || {}
    // const {cover} = selectedProperty || {}
    const {description} = selectedProperty || {}
    const {equipments} = selectedProperty || {}
    const {host} = selectedProperty || {}
        const {name} = host || {}
        const {picture} = host || {}

    const {pictures} = selectedProperty || {}

    return (
        <section className="properties">
            <Carousel 
                pictures={pictures}
            />
            <div className="properties__content">
                <div className="properties__info">
                    <h1 className="properties__title">{title}</h1>
                    <h2 className="properties__subtitle">{location}</h2>
                    <div className="tags__display">
                        {tags.map((tags, index) => (
                            <Tag key={index} text={tags} />
                        ))}
                    </div>
                </div>
                <div className="properties__host">
                    <div className="properties__host__info">
                        <p>{name}</p>
                        <img src={picture} alt="host profile" className="host__picture"/>
                    </div>
                    <div className="properties__host__rating">
                        <Rating/>
                    </div>
                </div>
            </div>
            <div className="collapsible collapsible__features">
                <Collapsible className="collapsible__half"
                    title="Description"
                    content={description}/>
                <Collapsible className="collapsible__half"
                    title="Équipements"
                    content={equipments}/>
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