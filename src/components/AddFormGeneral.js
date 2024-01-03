import React from 'react'
import { useState } from 'react'

const AddFormGeneral = ({ onAdd, handleChange, onSubmit, info }) => {

  return (
    <form className='add-form' onSubmit={onSubmit}>

        <div className="form-control">
            <label>First Name</label>
            <input 
                type="text" 
                name="firstName" 
                placeholder="Enter First Name"
                defaultValue={info.firstName}
                onChange={handleChange} />
        </div>

        <div className="form-control">
            <label>Last Name</label>
            <input 
                type="text"
                name="lastName"  
                placeholder="Enter Last Name"
                defaultValue={info.lastName}
                onChange={handleChange}/>
        </div>
        <div className="form-control">
            <label>Email Address</label>
            <input 
                type="text" 
                name="emailAddress" 
                placeholder="Enter Email Address"
                defaultValue={info.email}
                onChange={handleChange}/>
        </div>
        <div className="form-control">
            <label>Phone Number</label>
            <input 
                type="text"  
                name="phone"
                placeholder="Enter Phone Number"
                defaultValue={info.phoneNumber}
                onChange={handleChange}/>
        </div>

        <input type="submit" className="btn btn-block"  value='Save'/>

    </form>
  )
}

export default AddFormGeneral