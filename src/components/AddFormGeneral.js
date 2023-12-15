import React from 'react'
import { useState } from 'react'

const AddFormGeneral = ({onAdd}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")


  const onSubmit = (e) => {
    e.preventDefault()

    if(!firstName){
        alert('Enter First Name')
    }

    onAdd({ firstName, lastName, email, phoneNumber })
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>

        <div className="form-control">
            <label>First Name</label>
            <input 
                type="text"  
                placeholder="Enter First Name"
                value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className="form-control">
            <label>Last Name</label>
            <input 
                type="text"  
                placeholder="Enter Last Name"
                value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Email Address</label>
            <input 
                type="text"  
                placeholder="Enter Email Address"
                value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Phone Number</label>
            <input 
                type="text"  
                placeholder="Enter Phone Number"
                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        </div>

        <input type="submit" className="btn btn-block"  value='Save'/>

    </form>
  )
}

export default AddFormGeneral