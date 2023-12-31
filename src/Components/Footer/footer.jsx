import logo from "../../Assets/Logos/logo_white.png"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            {/* J'instaure un lien pour rediriger l'utilisateur vers la page d'accueil s'il clique sur le logo de Kasa */}
            <Link to="/">
                <img src={logo} alt='Kasa' className='footer__logo'/>
            </Link>
            <span className="footer__text">© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer