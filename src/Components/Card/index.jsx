
function Card({cover, title}) {
    return (
            <div className="cards__individual">
                <div className="cards__gradient">
                <img src={cover} alt='property card' className="cards__cover" />
                </div>
                <span className='cards__title'>{title}</span>
            </div>
    )
}


export default Card