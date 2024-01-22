import React from 'react'

const EducationInfo = ({educationInfo}) => {
  return (
   
   <div className='info-pdf'>

        <div className='pdf-heading'>
            <h1>Education</h1>
        </div>
       
        {educationInfo.map((edu) => (
            <div className='pdf-contents'>
                <div id='left-items'>
                    <h2>{edu.school}</h2>
                    <h4>{edu.degree}</h4>
                </div>
                <div>
                    <h2>{edu.date}</h2>
                    <h4>{edu.location}</h4>
                </div>
                
                
            </div>
        ))}
    
   </div>
  )
}

export default EducationInfo