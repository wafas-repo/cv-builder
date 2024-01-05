import { useState } from "react";
import Button from './Button'
import AddFormGeneral from "./AddFormGeneral";
import Experience from "./Experience";
import Education from "./Education";

const Section = ({ title, handleName, onSubmit, info, handleAddExperience, handleAddEducation, deleteSectionEdu, education }) => {

  const [showAddGeneralForm, setShowAddGeneralForm] = useState(false)
 

  var onExpand = () => setShowAddGeneralForm(!showAddGeneralForm)
  

  return (
    <>
        <div className='section'>
          <div className="section-title-bar">
            <p className='section-title'>{title}</p>
            <Button color={showAddGeneralForm ? "red" : "black"} text={showAddGeneralForm ? "Close" : "Add" } onClick={onExpand} />
          </div>

          {title === "Your Details" && (
            showAddGeneralForm && <AddFormGeneral onSubmit={onSubmit} handleChange={handleName} info={info} /> 
          )}
          
          {title === "Your Education" && (
            <Education isExpanded={showAddGeneralForm} education={education} handleAddEducation={handleAddEducation} deleteSectionEdu={deleteSectionEdu} />
          )}

          {title === "Your Experience" && (
            <Experience isExpanded={showAddGeneralForm} handleAddExperience={handleAddExperience}  />
          )}
        </div>
        

        
    </> 
    
  )
}

export default Section