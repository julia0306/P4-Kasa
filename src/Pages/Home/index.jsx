import image from "../../Assets/Banners/banner1.png"
import Banner from "../../Components/Banner";

function Home(props) {
  return (
    <div>
      <Banner 
        className="banner"
        text="Chez vous, partout et ailleurs" 
        image={image}/>
    </div>
  );
}

export default Home;
