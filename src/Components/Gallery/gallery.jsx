
import Card from "../Card/card";
import { Link } from "react-router-dom";
import allProperties from "../../Data/Properties.json";

function Gallery() {
    return (
        <div className="gallery">
            {allProperties.map((property) => (
                <Link  key={property.id} to={`/properties/${property.id}`}>
                    <Card 
                    cover={property.cover}
                    title={property.title}
                    />
                </Link>
            ))}
        </div>
    )
}

export default Gallery

// La méthode map() passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau contenant les résultats de cette fonction appliquée sur chaque élément.
// On a déclaré allProperties qui contient une liste de tous les logements.
// // Pour chaque logement, on retourne une card qui contient l'image (cover) et le titre du logement. Cette card est englobée dans un lien vers la propriété.
// Les clés aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. 
// Je donne donc une clé à chaque élément enfantdans un tableau afin d’apporter aux éléments une identité stable :

