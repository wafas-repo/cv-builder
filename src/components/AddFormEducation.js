import { useState } from 'react'

const AddFormEducation = ({ handleChange, education, onSubmitEdu }) => {

  return (
    <form className='add-form' onSubmit={(e) => onSubmitEdu(e, education.id)}> 
        <div className='form-control'>
            <label>School/University</label>
            <input type="text" placeholder='Enter school name' name="school" defaultValue={education.school}  onChange={(e) => handleChange(e, education.id)} />
        </div>
        <div className='form-control'>
            <label>Degree</label>
            <input type="text" placeholder='Enter Degree name' name='degree' defaultValue={education.degree} onChange={(e) => handleChange(e, education.id)}/>
        </div>
        <div className='form-control'>
            <label>Date</label>
            <input type="text" placeholder='Enter Date of Graduation' name='date' defaultValue={education.date}  onChange={(e) => handleChange(e, education.id)}/>
        </div>
        <div className='form-control'>
            <label>Location</label>
            <input type="text" placeholder='Enter Location' name='location' defaultValue={education.location}  onChange={(e) => handleChange(e, education.id)}/>
        </div>
        <input type="submit" value='Save' className='btn btn-block'/>
    </form>
  )
}

export default AddFormEducation