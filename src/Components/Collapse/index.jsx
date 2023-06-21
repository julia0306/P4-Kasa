import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

const Collapsible = (props) => {
  const [isOpen, setIsOpen]=useState(false)
  const [isRotated, setIsRotated] = useState(false);

  const handleCollapsibleToggle = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

    return (
    <div className={props.className}>
      <div className="collapsible__components">
        <div className="collapsible__heading">
          <h2 className="font-weight-bold">{props.title}</h2>
          <button className="collapsible__icon" onClick={handleCollapsibleToggle}><FontAwesomeIcon icon={faChevronUp} className={`${isRotated ? 'rotate-left' : 'rotate-right'}`}/></button>
        </div>
        <div className={`collapsible__content ${!isOpen ? 'not-displayed' : 'displayed'}`}>{props.content}</div>
        </div>
      </div>
    )
    }

export default Collapsible

