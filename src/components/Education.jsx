import { useState } from 'react'
import AddButton from "./AddButton"
import RenderEducationInfo from './RenderEducationInfo'

const Education = ({isExpanded, handleAddEducation, deleteSectionEdu, education, handleEduChange, onSubmitEdu }) => {
    
  return (
    <div className='section-form'>
        {isExpanded && 
            <>
               <p className="description">
                Include your Education Information.
                </p>
                <div className='eduI-form'>
                    {education.map((education) => (
                        <RenderEducationInfo education={education} onDelete={deleteSectionEdu} handleEduChange={handleEduChange} onSubmitEdu={onSubmitEdu} />
                    ))}
                </div>    
                
                <AddButton title="Add Education" handleAdd={handleAddEducation} />
            </>
            

        }
    </div>
  )
}

export default Education