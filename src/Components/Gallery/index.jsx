
import Card from "../Card";
import { Link } from "react-router-dom";
import { allProperties } from "../../Data/Properties";

function Gallery() {
    return (
        <div className="gallery">
            {allProperties.map((property) => (
                <Link  key={property.id} to={`/properties/${property.id}`}>
                    <Card key={property.id}
                    cover={property.cover}
                    title={property.title}
                    />
                </Link>
            ))}
        </div>
    )
}

export default Gallery