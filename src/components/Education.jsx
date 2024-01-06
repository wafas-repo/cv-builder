import { useState } from 'react'
import AddButton from "./AddButton"
import RenderEducationInfo from './RenderEducationInfo'

const Education = ({isExpanded, handleAddEducation, deleteSectionEdu, education}) => {
    
  return (
    <div>
        {isExpanded && 
            <>
               <p className="description">
                    Include your Education Information.
                </p>
                <div className='eduI-form'>
                    {education.map((education) => (
                        <RenderEducationInfo education={education} onDelete={deleteSectionEdu} />
                    ))}
                </div>    
                <br></br>
                <AddButton title="Add Experience" handleAddEducation={handleAddEducation} />
            </>
            

        }
    </div>
  )
}

export default Education