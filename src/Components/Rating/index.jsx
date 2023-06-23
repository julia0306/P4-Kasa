function Rating(props){
    const numberOfStars = props.numberOfStars
    return (
        <div className="rating">
            <i className= {` ${numberOfStars > 0 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
            <i className={` ${numberOfStars > 1 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
            <i className={` ${numberOfStars > 2 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
            <i className={` ${numberOfStars > 2 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
            <i className={` ${numberOfStars > 3 ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}`}></i>
        </div>
    )
}

export default Rating