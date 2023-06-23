import { Link, NavLink } from 'react-router-dom'
import desktopLogo from '../../Assets/Logos/logo_desktop.png'
import mobileLogo from "../../Assets/Logos/logo_mobile.png"
 
function Header() {
    return (
        <nav className="header">
        <Link to="/">
                <img srcSet={`${mobileLogo} 146w,
                            ${desktopLogo} 211w`}
                    src={desktopLogo}
                    className='kasa-logo'
                    alt="kasa logo"
                    title="kasa logo"
                    sizes="(min-width: 615px), 211w,
                            (max-width: 615px), 146w"
                    width="211" 
                    height="68"
                />
        </Link>
            
            <div className="navbar">
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? 'navbar__links navbar__links__active' : 'navbar__links'}>
                        Accueil
                </NavLink>
                <NavLink
                    to="/about" 
                    className={({isActive}) => isActive ? 'navbar__links navbar__links__active' : 'navbar__links'}>
                        A propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Header