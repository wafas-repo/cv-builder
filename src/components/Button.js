import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Button = ({ color, onClick, showAddGeneralForm }) => {

  return (
    <>
    {showAddGeneralForm ? 
      <button 
        onClick={onClick} 
        className='btn'
      >
      <IoIosArrowUp style={{color: color}} />
      </button> 
      :
      <button 
        onClick={onClick} 
        className='btn'
      >
      <IoIosArrowDown style={{color : color}} />
      </button>
       
    }
      
    </>
  )
}

export default Button