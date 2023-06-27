function Rating(props){
    const numberOfStars = props.numberOfStars
    return (
        <div className="rating">
            {/* J'attribue une classe différente aux étoiles de notation en fonction de la note attribuée.  */}
            <i className= {` ${numberOfStars > 0 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
            <i className={` ${numberOfStars > 1 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
            <i className={` ${numberOfStars > 2 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
            <i className={` ${numberOfStars > 3 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
            <i className={` ${numberOfStars > 4 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
        </div>
    )
}

export default Rating