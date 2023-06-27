import image from "../../Assets/Banners/banner1.png"
import Banner from "../../Components/Banner/banner";
import Gallery from "../../Components/Gallery/gallery";

function Home() {
  return (
    <main>
      <Banner 
        className="banner"
        title="Chez vous, partout et ailleurs" 
        image={image}/>
      <Gallery/>
    </main>
  );
}

export default Home;

