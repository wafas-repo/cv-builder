import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import AddFormEducation from './AddFormEducation';

const RenderEducationInfo = ({education, onDelete}) => {
  const [showAddEducationForm, setShowAddEducationForm] = useState(false);

  var onExpand = () => setShowAddEducationForm(!showAddEducationForm)

  return (
    <>
    
        <div className='education'>
          <div className='education-info'>
            <button className='education-info-btn'>
              <div className='education-info-summary'>
                <div id='edu-item-info'>
                  <h1>{education.school || education.degree ? (education.school ? education.school : "") + (education.degree ? " - " + education.degree : "") : "Untitled"}</h1>
                  <p>{education.date ? education.date : "Start Date"}</p>
                </div>
              </div>
              <span> <FaRegEdit style={{height: '1rem', width:'1rem'}} onClick={onExpand} /> </span>
            </button>
            <button className="delete-education">
              <MdDelete style={{height: '1rem', width:'1rem'}} onClick={() => onDelete(education.id)} />
            </button>

          </div>
          <div>
            {showAddEducationForm && <AddFormEducation />}
          </div>

    </div>
  
</>
  )
}

export default RenderEducationInfo