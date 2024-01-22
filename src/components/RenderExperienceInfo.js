import { useState } from "react";
import { MdDelete } from "react-icons/md";
import Button from "./Button";
import AddFormExp from "./AddFormExp";

const RenderExperienceInfo = ({experience, onDelete, handleExpChange, onSubmitExp }) => {

  const [showAddExpForm, setShowAddExpForm] = useState(false)

  var onExpand = () => setShowAddExpForm(!showAddExpForm)
    
  return (
    <>
        <div className='experience'>
          <div className='education-info'>
            <button className='education-info-btn'>
              <div className='education-info-summary'>
                <div id="edu-item-info">
                  <h1>{experience.title || experience.company? (experience.title ? experience.title : "") + (experience.company ? " - " + experience.company : "") : "Untitled"}</h1>
                  <p>{experience.start || experience.end ? (experience.start ? experience.start : "") + (experience.end ? " - " + experience.end : "") : "Start - End"}</p>
                </div>
              </div>
              <Button color={'rgb(255 255 255 / 67%)'} showAddGeneralForm={showAddExpForm} onClick={onExpand} />
            </button>
            <button className="delete-education">
              <MdDelete style={{height: '1.2rem', width:'1.2rem'}} onClick={() => onDelete(experience.id)} />
            </button>
          </div>
          <div className="experience-form">
            {showAddExpForm && <AddFormExp handleChange={handleExpChange} onSubmitExp={onSubmitExp} experience={experience}  />}
          </div>
        </div>
    </>
  )
}

export default RenderExperienceInfo