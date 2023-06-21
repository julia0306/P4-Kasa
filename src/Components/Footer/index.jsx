import logo from "../../Assets/Logos/logo_white.png"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            <Link to="/">
                <img src={logo} alt='Kasa' className='footer__logo'/>
            </Link>
            <span className="footer__text">© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer