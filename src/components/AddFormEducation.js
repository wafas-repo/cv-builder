import { useState } from 'react'

const AddFormEducation = ({ onAdd }) => {

  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!school) {
        alert('please fill form')
        return
    }

    onAdd({ school, degree, date, location })

    setSchool('')
    setDegree('')
    setDate('')
    setLocation('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}> 
        <div className='form-control'>
            <label>School/University</label>
            <input type="text" placeholder='Enter school name' value={school} onChange={(e) => setSchool(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Degree</label>
            <input type="text" placeholder='Enter Degree name' value={degree} onChange={(e) => setDegree(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Date</label>
            <input type="text" placeholder='Enter Date of Graduation' value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Location</label>
            <input type="text" placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <input type="submit" value='Save' className='btn btn-block'/>
    </form>
  )
}

export default AddFormEducation