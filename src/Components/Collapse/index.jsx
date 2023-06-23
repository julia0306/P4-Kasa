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
          <h2 className="collapsible__title">{props.title}</h2>
          <button className="collapsible__icon" onClick={handleCollapsibleToggle}>
            <i className={`fa-sharp fa-solid fa-chevron-up ${isRotated ? 'rotate-left' : 'rotate-right'}`} />
          </button>
        </div>
        <div className={`collapsible__content ${!isOpen ? 'not-displayed' : 'displayed'}`}>{props.content}</div>
      </div>
    </div>
    )
    }

export default Collapsible

