import React from 'react'

const AddFormGeneral = () => {
  return (
    <form className='add-form'>

        <div className="form-control">
            <label>First Name</label>
            <input 
                type="text"  
                placeholder="Enter First Name"/>
        </div>

        <div className="form-control">
            <label>Last Name</label>
            <input 
                type="text"  
                placeholder="Enter Last Name"/>
        </div>
        <div className="form-control">
            <label>Email Address</label>
            <input 
                type="text"  
                placeholder="Enter Email Address"/>
        </div>
        <div className="form-control">
            <label>Phone Number</label>
            <input 
                type="text"  
                placeholder="Enter Phone Number"/>
        </div>

        <input type="submit" className="btn btn-block"  value='Save'/>

    </form>
  )
}

export default AddFormGeneral