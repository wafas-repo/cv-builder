import React from 'react'

const Experiences = ({experiences}) => {
  return (
   
   <div>

        <h1>Experience</h1>
        {experiences.map((exp) => (
            <>
                <h2>{exp.title}</h2>
                <h2>{exp.company}</h2>
                <h4>{exp.responsibilities}</h4>
                <h4>{exp.from}</h4>
                <h4>{exp.end}</h4>
            </>
        ))}
    
   </div>
  )
}

export default Experiences