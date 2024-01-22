import { useState } from "react";
import { MdDelete } from "react-icons/md";
import Button from "./Button";
import AddFormEducation from './AddFormEducation';

const RenderEducationInfo = ({education, onDelete, handleEduChange, onSubmitEdu}) => {
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
                  <p>{education.date ? education.date : "Graduation Date"}</p>
                </div>
              </div>
              <Button color={'rgb(255 255 255 / 67%)'} showAddGeneralForm={showAddEducationForm} onClick={onExpand} />
            </button>
            <button className="delete-education">
              <MdDelete style={{height: '1.2rem', width:'1.2rem'}} onClick={() => onDelete(education.id)} />
            </button>

          </div>
          <div className="education-form">
            {showAddEducationForm && <AddFormEducation handleChange={handleEduChange} education={education} onSubmitEdu={onSubmitEdu} />}
          </div>
    </div>
  
  </>
  )
}

export default RenderEducationInfo