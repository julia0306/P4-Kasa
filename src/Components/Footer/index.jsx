import logo from "../../Assets/Logos/logo_white.png"

function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt='Kasa' className='footer__logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer