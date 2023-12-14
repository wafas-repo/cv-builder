import React from 'react'
import { MdDelete } from "react-icons/md";

const ExpInfo = ({ experience, onDelete }) => {
  return (
    <div className='expInfo'>
        <h3>{experience.company} <MdDelete onClick={() => onDelete(experience.id)} /></h3>
        <h3>{experience.title}</h3>
        <p>{experience.responsibilities}</p>
        <p>{experience.from}</p>
        <p>{experience.end}</p>

    </div>
  )
}

export default ExpInfo