import React from 'react'

const GeneralInfo = ({generalInfo}) => {
  return (
    <div>

      <h1>General Information</h1>
      {generalInfo.map((info) => (
          <>
            <h3>{info.firstName} {info.lastName}</h3>
            <h3>{info.email}</h3>
            <h3>{info.phoneNumber}</h3>
          </>
      ))}

    </div>
  )
}

export default GeneralInfo