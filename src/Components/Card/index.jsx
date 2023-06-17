
function Card({cover, title}) {
    return (
            <div className="cards__individual">
                <a href={cover}><img src={cover} alt='property card' className="cards__cover" /></a>
                <span className='cards__title'>{title}</span>
            </div>
    )
}


export default Card