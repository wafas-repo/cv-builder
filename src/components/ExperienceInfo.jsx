import React from 'react'

const ExperienceInfo = ({experienceInfo}) => {
  return (
   
   <div className='info-pdf'>

        <div className='pdf-heading'>
            <h1>Experience</h1>
        </div>
        <>
        {experienceInfo.map((exp) => (
            <>
                <div className='pdf-contents'>
                    <div id='left-items'>
                        <h2>{exp.company}</h2>
                        <h4>{exp.title}</h4>
                    </div>
                    <div>
                        <span style={{display: 'flex'}}><h2>{exp.start}</h2> - <h2>{exp.end}</h2></span>
                        <h4>{exp.location}</h4>

                    </div>
                    
                </div>
                <div>
                    <p id='p_wrap'>{exp.responsibilities}</p> 
                </div>
            </>
            
        ))}
        </>
    
   </div>
  )
}

export default ExperienceInfo