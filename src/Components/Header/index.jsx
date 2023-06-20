import { Link } from 'react-router-dom'
import desktopLogo from '../../Assets/Logos/logo_desktop.png'
import mobileLogo from "../../Assets/Logos/logo_mobile.png"
 
function Header() {
    return (
        <nav className="header">
        <Link to="/">
            <h1>
                <img srcSet={`${mobileLogo} 146w,
                            ${desktopLogo} 211w`}
                    src={desktopLogo}
                    className='kasa-logo'
                    alt="kasa logo"
                    title="kasa logo"
                    sizes="(max-width: 211px) 100vw, 211px,
                            (max-width: 146) 100vw, 146px"
                    width="211" 
                    height="68"
                />
            </h1>
        </Link>
            
            <div className="navbar">
                <Link className= "navbar__links" to="/">Accueil</Link>
                <Link className= "navbar__links" to="/about">A propos</Link>
            </div>
        </nav>
    )
}

export default Header