import React from 'react'

const GeneralInfo = ({generalInfo}) => {
  return (
    <div>
      

      <h1>General Information</h1>
      
          <>
            <h3>{generalInfo.firstName} {generalInfo.lastName}</h3>
            <h3>{generalInfo.email}</h3>
            <h3>{generalInfo.phoneNumber}</h3>
          </>


    </div>
  )
}

export default GeneralInfo