import allProperties from "../../Data/Properties.json";
import { useParams } from 'react-router-dom'
import Carousel from "../../Components/Carousel"
import Collapsible from "../../Components/Collapse"
import Rating from "../../Components/Rating"
import Tag from "../../Components/Tag"
import Error from "../Error";


function Properties(){
    const {id} = useParams();
    const selectedProperty = allProperties.find(property => property.id === id);

    // Réécrire ça avace useNavigate ()
    if (!selectedProperty) {
        return <Error/>
    }
    const {title} = selectedProperty || {}
    const {location} = selectedProperty || {}
    const {tags} = selectedProperty || {}
    const {description} = selectedProperty || {}
    const {equipments} = selectedProperty || {}
    const {host} = selectedProperty || {}
        const {name} = host || {}
        const {picture} = host || {}
    const {pictures} = selectedProperty || {}
    const {rating} = selectedProperty || {}

    return (
        <main className="properties">
            <Carousel 
                pictures={pictures}
            />
            <div className="properties__content">
                <div className="properties__info">
                    <h1 className="properties__title">{title}</h1>
                    <h2 className="properties__subtitle">{location}</h2>
                    <div className="properties__tags">
                        {tags.map((tags, index) => (
                            <Tag key={index} text={tags} />
                        ))}
                    </div>
                </div>
                <div className="properties__host">
                    <div className="properties__host__info">
                        <p className="properties__host__name">{name}</p>
                        <img src={picture} alt="host profile" className="properties__host__picture"/>
                    </div>
                    <div className="properties__host__rating">
                        <Rating
                            numberOfStars={rating}/>
                    </div>
                </div>
            </div>
            <div className="collapsibles">
                <div className="collapsible">
                    <Collapsible className="collapsible__high"
                        title="Description"
                        content={description}/>
                </div>
                <div className="collapsible">
                    <Collapsible className="collapsible__high"
                        title="Équipements"
                        content={equipments.map((equipment, index) => (
                            <div key={index}>{equipment}</div>
                        ))}
                    />
                </div>
            </div>
        </main>
    )
}

export default Properties