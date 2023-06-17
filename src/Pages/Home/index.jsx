import image from "../../Assets/Banners/banner1.png"
import Banner from "../../Components/Banner";
import Properties from "../Properties";

function Home() {
  return (
    <div>
      <Banner 
        className="banner"
        text="Chez vous, partout et ailleurs" 
        image={image}/>
        <Properties/>
    </div>
  );
}

export default Home;
