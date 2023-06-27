
import { Navigate } from 'react-router-dom';
import allProperties from "../../Data/Properties.json";
import { useParams } from 'react-router-dom'
import Carousel from "../../Components/Carousel/carousel"
import Collapsible from "../../Components/Collapse/collapse"
import Rating from "../../Components/Rating/rating"
import Tag from "../../Components/Tag/tag"

// J'utilise la détructuration pour récupérer les données 
// const {title} selectedProperty équivaut à title = selectedProperty.title
function Properties() {
    const { id } = useParams();
    const selectedProperty = allProperties.find(property => property.id === id);
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

    if (!selectedProperty) {
        return <Navigate to="/error" />;
      } else {

    return (
        <main>
            <div className="properties">
                <Carousel 
                    pictures={pictures}
                />
                <div className="properties__content">
                    <div className="properties__info">
                        <h1 className="properties__title">{title}</h1>
                        <h2 className="properties__subtitle">{location}</h2>
                        <div className="properties__tags">
                        {/* La méthode map() passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau contenant les résultats de cette fonction appliquée sur chaque élément. */}
                            {tags.map((tags, index) => (
                                <Tag 
                                // Il n'y a pas d'id associée au tag. Pour la key, je fais donc une combinaison entre l'index et le nom du tag qui est une string
                                    key={`${tags}-${index}`} 
                                    text={tags} />
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
                    <div className="collapsibles__individual">
                        <Collapsible
                            title="Description"
                            content={description}/>
                    </div>
                    <div className="collapsibles__individual">
                        <Collapsible 
                            title="Équipements"
                            // La méthode map() passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau contenant les résultats de cette fonction appliquée sur chaque élément.
                            content={equipments.map((equipment, index) => (
                                // Il n'y a pas d'id associée . Pour la key, je fais donc une combinaison entre l'index et le nom du tag qui est une string
                                <div key={`${equipment}-${index}`}>
                                    {equipment}
                                </div>
                            ))}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
}
export default Properties