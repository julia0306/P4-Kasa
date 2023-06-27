import { Link, NavLink } from 'react-router-dom'
import desktopLogo from '../../Assets/Logos/logo_desktop.png'
import mobileLogo from "../../Assets/Logos/logo_mobile.png"
 
function Header() {
    return (
        <nav className="header">
            {/* J'utilise "Link" (de Reac-router) pour naviguer entre les pages */}
            {/* Je redirige vers la page d'accueil au clic sur le logo */}
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
                {/* NavLink est un composant proche de Link, mais il permet d'appliquer du style au Link. Je l'utilise car je souhaite modifier lorsque le lien sera actif */}
                <NavLink
                    to="/"
                    // J'utilise une condition pour déterminer le className du lien. Je différencie le style s'il est actif
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