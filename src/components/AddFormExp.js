import { useState } from 'react'

const AddFormExp = ( { handleChange, experience, onSubmitExp }) => {

  return (
    <form className='add-form' onSubmit={(e) => onSubmitExp(e, experience.id)}>
        <div className='form'>
            <div className='job-company'>
                <div className='input-field'>
                    <label>Title</label>
                    <input type="text" placeholder='title' name='title' defaultValue={experience.title} onChange={(e) => handleChange(e, experience.id)}/>
                </div>
                <div className='input-field'>
                    <label>Company Name</label>
                    <input type="text" placeholder='Company Name' name='company' defaultValue={experience.company} onChange={(e) => handleChange(e, experience.id)}/>
                </div>
            </div>

            <div className='period-location'>
                <div className='input-field'>
                    <div className='input-field'>
                        <label>From Date</label>
                        <input type="text" placeholder='Start Date' name="start" defaultValue={experience.start} onChange={(e) => handleChange(e, experience.id)}/>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg>
                    <div className='input-field'>
                        <label>End Date</label>
                        <input type="text" placeholder='End Date' name='end' defaultValue={experience.end} onChange={(e) => handleChange(e, experience.id)}/>
                    </div>

                    <div className='input-field'>
                        <label>Location</label>
                        <input type="text" placeholder='Location' name='location' defaultValue={experience.location} onChange={(e) => handleChange(e, experience.id)} />
                    </div>
                </div>
            </div>
            
            <div className='input-field desc'>
                <label>Responsibilities</label>
                <textarea style={{ height: '150px', font: 'inherit'}} type="text" placeholder='list responsibilities' name='responsibilities' defaultValue={experience.responsibilities} onChange={(e) => handleChange(e, experience.id)}/>
            </div>
            
            <button type="submit" value='Save' className='btn btn-block'>Save</button>
        </div>
    </form>
  )
}

export default AddFormExp