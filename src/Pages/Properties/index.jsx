
import Card from "../../Components/Card";
import { allProperties } from "../../Data/Properties";

function Properties() {
    return (
        <div className="cards">
            {allProperties.map((property) => (
                    <Card key={property.id}
                    cover={property.cover}
                    title={property.title}
                    />
            ))}
        </div>
    )
}

export default Properties