import PropTypes from 'prop-types'

// je passe mes props en paramètres afin de les récupérer de manière dynamique
function Card({cover, title}) {
    return (
            <div className="cards">
                <div className="cards__gradient">
                <img src={cover} alt={title} className="cards__cover" />
                </div>
                <div className='cards__title'>{title}</div>
            </div>
    )
}

Card.propTypes ={
    cover: PropTypes.string,
    title: PropTypes.string,
}

export default Card


// Le JS est flexible du point de vue des types (typage dynamique en JS). Pour éviter les erreurs, on utilise les propTypes, une biliothèque qui permet de sécuriser les types des props de nos composants