import icon from "../../Assets/Icons/chevron-up.png"
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
          <button className="collapsible__icon" onClick={handleCollapsibleToggle}><img src={icon} alt="icon" className={`${isRotated ? 'rotate-left' : 'rotate-right'}`}/></button>
        </div>
        <div className={`collapsible__content ${!isOpen ? 'not-displayed' : ''}`}>{props.content}</div>
        </div>
      </div>
    )
    }
//   ) : (
//     <div className={`collapsible ${!isOpen ? '' : 'open'}`}>
//       <div className="collapsible__heading">
//         <h6 className="font-weight-bold">{props.title}</h6>
//         <button className="collapsible__icon" onClick={handleCollapsibleToggle}><img src={icon} alt="icon" className={`${isRotated ? '' : 'rotate-right'}`}/></button>
//       </div>
//     </div>
//   )
// }

export default Collapsible

