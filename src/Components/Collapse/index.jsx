import { useState } from 'react'

const Collapsible = (props) => {
  const [isOpen, setIsOpen]=useState(false)
  const [isRotated, setIsRotated] = useState(false);
  const [isUnfolded, setIsUnfolded] = useState (false)
  const [isClosedOnOpening, setIsClosedOnOpening] =useState (true)

  const handleCollapsibleToggle = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
    setIsUnfolded(!isUnfolded);
    setIsClosedOnOpening(false)
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
        <div className={`collapsible__content ${isClosedOnOpening ? 'not-displayed' : (isUnfolded ? 'unfold' : 'collapse')}`}>{props.content}</div>
      </div>
    </div>
    )
    }

export default Collapsible

