import React from 'react'

const GeneralInfo = ({generalInfo}) => {
  return (
    <div className='general-info'>
            <h1 align='center'>{generalInfo.firstName} {generalInfo.lastName}</h1>
            <div className="contact-info">
              {generalInfo.email && (
                <div>
                  <span>{generalInfo.email}</span>
                </div>
              )}

              |

              {generalInfo.phoneNumber && (
                <div>
                  <span>{generalInfo.phoneNumber}</span>
                </div>
              )}

              |

              {generalInfo.address && (
                <div>
                  <span>{generalInfo.address}</span>
                </div>
              )}
            </div>
    </div>
  )
}

export default GeneralInfo