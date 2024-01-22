import React from 'react'
import { useState } from 'react'

const AddFormGeneral = ({ handleChange, onSubmit, info }) => {

  return (
    <form className='add-form' onSubmit={onSubmit}>

        <div className="form">
            <div className="user-full-name">

                <div className='input-field'>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="Enter First Name"
                        defaultValue={info.firstName}
                        onChange={handleChange} 
                    />
                </div>
                
                <div className='input-field' >
                    <label>Last Name</label>
                    <input 
                        type="text"
                        name="lastName"  
                        placeholder="Enter Last Name"
                        defaultValue={info.lastName}
                        onChange={handleChange}
                    />
                </div>
                
            </div>

            <div className='email'>

                <div className="input-field">
                    <label>Email Address</label>
                    <input 
                        type="text" 
                        name="emailAddress" 
                        placeholder="Enter Email Address"
                        defaultValue={info.email}
                        onChange={handleChange}/>
                </div>

            </div>
            <div className='phone-address'>
                <div className="input-field">
                    <label>Phone Number</label>
                    <input 
                        type="text"  
                        name="phone"
                        placeholder="Enter Phone Number"
                        defaultValue={info.phoneNumber}
                        onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label>Address</label>
                    <input 
                        type="text"  
                        name="address"
                        placeholder="Enter Address"
                        defaultValue={info.address}
                        onChange={handleChange}/>
                </div>

            </div>

            

                

            <button type="submit" className="btn">Save</button>


        </div>

        

    </form>
  )
}

export default AddFormGeneral