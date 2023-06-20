import image from "../../Assets/Banners/banner1.png"
import Banner from "../../Components/Banner";
import Gallery from "../../Components/Gallery";

function Home() {
  return (
    <main>
      <Banner 
        className="banner"
        text="Chez vous, partout et ailleurs" 
        image={image}/>
      <Gallery/>
    </main>
  );
}

export default Home;
