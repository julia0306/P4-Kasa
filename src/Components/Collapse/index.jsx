import icon2 from "../../Assets/Icons/chevron2.png"
import icon from "../../Assets/Icons/chevron.png"
import { useState } from 'react'


const Collapsible = (props) => {
  const [isOpen, setIsOpen]=useState(false)
    return isOpen ? (
    <div className="collapsible">
      <div className="collapsible__heading">
        <h6 className="font-weight-bold">{props.title}</h6>
        <button className="collapsible__icon" onClick={() => setIsOpen(false)}><img src={icon}/></button>
      </div>
      <div className='collapsible__content'>{props.content}</div>
    </div>
  ) : (
    <div className="collapsible">
      <div className="collapsible__heading">
        <h6 className="font-weight-bold">{props.title}</h6>
        <button className="collapsible__icon" onClick={()=> setIsOpen(true)}><img src={icon2}/></button>
      </div>
    </div>
  )
}

export default Collapsible
