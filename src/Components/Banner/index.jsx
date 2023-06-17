function Banner(props) {
    return (
        <div className="banner">
            <img src={props.image} alt="banner" className="banner__image"/>
            <p className="banner__slogan">{props.text}</p>
        </div>
    )
}

export default Banner