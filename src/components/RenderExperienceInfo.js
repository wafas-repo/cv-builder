import React from 'react'
import ExpInfo from './ExpInfo'

const RenderExperienceInfo = ({experiences, onDelete}) => {
    
  return (
    <>
        {experiences.map((experience) => (
            <ExpInfo key={experience.id} experience={experience} onDelete={onDelete}/>
        ))}
    </>
  )
}

export default RenderExperienceInfo