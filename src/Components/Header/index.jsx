import { Link } from 'react-router-dom'
import logo from '../../Assets/Logos/logo_desktop.png'
 
function Header() {
    return (
        <nav className="header">
        <Link to="/">
            <img src={logo} alt='Kasa' className='kasa-logo' />
        </Link>
            
            <div className="navbar">
                <Link className= "navbar__links" to="/">Accueil</Link>
                <Link className= "navbar__links" to="/about">A propos</Link>
            </div>
        </nav>
    )
}

export default Header