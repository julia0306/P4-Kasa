function Banner(props) {
    return (
        <div className="banner">
            <img src={props.image} alt="banner" className="banner__image"/>
            <h1 className="banner__title">{props.text}</h1>
        </div>
    )
}

export default Banner