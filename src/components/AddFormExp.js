import { useState } from 'react'

const AddFormExp = ( { onAdd }) => {

  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [from, setFrom] = useState('')
  const [end, setEnd] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!title) {
        alert('please fill form')
        return
    }

    onAdd({ title, company, responsibilities, from, end})

    setTitle('')
    setCompany('')
    setResponsibilities('')
    setFrom('')
    setEnd('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Title</label>
            <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Company Name</label>
            <input type="text" placeholder='Company Name' value={company} onChange={(e) => setCompany(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Responsibilities</label>
            <textarea type="text" placeholder='' value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>From Date</label>
            <input type="text" placeholder='From' value={from} onChange={(e) => setFrom(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>End Date</label>
            <input type="text" placeholder='End' value={end} onChange={(e) => setEnd(e.target.value)}/>
        </div>

        <input type="submit" value='Save' className='btn btn-block'/>

    </form>
  )
}

export default AddFormExp