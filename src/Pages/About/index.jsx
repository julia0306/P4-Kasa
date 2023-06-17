import image from "../../Assets/Banners/banner2.png"
import Banner from "../../Components/Banner"

function About() {
    return (
      <div className="About">
            <Banner 
                image={image}
            />
      </div>
    );
  }
  
  export default About;