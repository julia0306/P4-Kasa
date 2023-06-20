
function Card({cover, title}) {
    return (
            <div className="cards__individual">
                <div className="cards__gradient">
                <img src={cover} alt='property card' className="cards__cover" />
                </div>
                <div className='cards__title'>{title}</div>
            </div>
    )
}


export default Card