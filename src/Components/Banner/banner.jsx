import PropTypes from "prop-types";

function Banner({image, title}) {
    return (
        <div className="banner">
            <img src={image} alt="banner" className="banner__image"/>
            <h1 className="banner__title">{title}</h1>
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
}


export default Banner


// Le JS est flexible du point de vue des types (typage dynamique en JS). Pour éviter les erreurs, on utilise les propTypes, une biliothèque qui permet de sécuriser les types des props de nos composants