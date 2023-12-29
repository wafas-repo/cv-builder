import React from 'react'

const EducationInfo = ({education}) => {
  return (
    <div>

        <h1>Education</h1>
        {education.map((edu) => (
            <>
                <h2>{edu.school}</h2>
                <h2>{edu.degree}</h2>
                <h4>{edu.date}</h4>
                <h4>{edu.location}</h4>
            </>
        ))}
    
        
    </div>
  )
}

export default EducationInfo