import { useState } from 'react'

const AddFormExp = ( { handleChange, experience, onSubmitExp }) => {

  return (
    <form className='add-form' onSubmit={(e) => onSubmitExp(e, experience.id)}>
        <div className='form-control'>
            <label>Title</label>
            <input type="text" placeholder='title' name='title' defaultValue={experience.title} onChange={(e) => handleChange(e, experience.id)}/>
        </div>
        <div className='form-control'>
            <label>Company Name</label>
            <input type="text" placeholder='Company Name' name='company' value={experience.company} onChange={(e) => handleChange(e, experience.id)}/>
        </div>
        <div className='form-control'>
            <label>Responsibilities</label>
            <textarea type="text" placeholder='list responsibilities' name='responsibilities' value={experience.responsibilities} onChange={(e) => handleChange(e, experience.id)}/>
        </div>
        <div className='form-control'>
            <label>From Date</label>
            <input type="text" placeholder='Start Date' name="start" value={experience.start} onChange={(e) => handleChange(e, experience.id)}/>
        </div>
        <div className='form-control'>
            <label>End Date</label>
            <input type="text" placeholder='End Date' name='end' value={experience.end} onChange={(e) => handleChange(e, experience.id)}/>
        </div>

        <input type="submit" value='Save' className='btn btn-block'/>

    </form>
  )
}

export default AddFormExp