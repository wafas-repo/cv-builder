import React from 'react'

const generalInfo = {
        id: 1,
        name: 'Wafa Qazi',
        email: 'wafa.qazi@outlook.com',
        phoneNumber: '519-781-8108'
}

const GeneralInfo = () => {
  return (
    <div>

      <h1>General Information</h1>
      <h4>{generalInfo.name}</h4>
      <h4>{generalInfo.email}</h4>
      <h4>{generalInfo.phoneNumber}</h4>

    </div>
  )
}

export default GeneralInfo