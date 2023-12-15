import React from 'react'
import Button from './Button'

const Section = ({ title, onAdd, showAdd }) => {
  return (
    <>
        <div className='section'>
            <p className='section-title'>{title}</p>
            <Button color={showAdd ? "red" : "black"} text={showAdd ? "Close" : "Add" } onClick={onAdd} />
        </div>

        
    </> 
    
  )
}

export default Section