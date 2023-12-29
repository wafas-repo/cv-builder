import React from 'react'
import EduInfo from './EduInfo'

const RenderEducationInfo = ({education, onDelete, handleEdit}) => {
  return (
    <>
    {education.map((edu) => (
        <EduInfo key={edu.id} education={edu} onDelete={onDelete} handleEdit={handleEdit} />
    ))}
</>
  )
}

export default RenderEducationInfo