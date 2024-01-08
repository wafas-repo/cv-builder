import { useState } from "react";
import Button from './Button'
import AddFormGeneral from "./AddFormGeneral";
import Experience from "./Experience";
import Education from "./Education";

const Section = ({ title, onSubmit, info, handleAdd, handleDelete, handleChange}) => {

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
            showAddGeneralForm && <AddFormGeneral onSubmit={onSubmit} handleChange={handleChange} info={info} /> 
          )}
          
          {title === "Your Education" && (
            <Education 
              isExpanded={showAddGeneralForm} 
              education={info} 
              handleAddEducation={handleAdd} 
              deleteSectionEdu={handleDelete} 
              handleEduChange={handleChange}
              onSubmitEdu={onSubmit}
            />
          )}

          {title === "Your Experience" && (
            <Experience 
              isExpanded={showAddGeneralForm}
              experiences={info}
              handleAddExperience={handleAdd}  
              deleteSectionExp={handleDelete}
              handleExpChange={handleChange}
              onSubmitExp={onSubmit}
            />
          )}
        </div>
        

        
    </> 
    
  )
}

export default Section