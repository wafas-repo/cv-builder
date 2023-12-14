import React from 'react'
import Button from './Button'
import AddFormGeneral from './AddFormGeneral'

const Section = ({ title, onAdd }) => {
  return (
    <>
        <div className='section'>
            <p className='section-title'>{title}</p>
            <Button color="black" text="Add" onClick={onAdd} />
        </div>
        <div className='section-form'>
            {title === "Your Details" && <AddFormGeneral />}
        </div>
    </> 
    
  )
}

export default Section