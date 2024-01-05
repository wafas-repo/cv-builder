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
                <RenderEducationInfo education={education} onDelete={deleteSectionEdu} />
                <br></br>
                <AddButton title="Add Experience" handleAddEducation={handleAddEducation} />
            </>
            

        }
    </div>
  )
}

export default Education