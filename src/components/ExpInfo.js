import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ExpInfo = ({ experience, onDelete }) => {
  return (
    <div className='expInfo'>
        <h3>{experience.company} <span><MdDelete onClick={() => onDelete(experience.id)} /> <FaRegEdit /> </span> </h3>
        <h3>{experience.title}</h3>
        <p>{experience.responsibilities}</p>
        <p>{experience.from}</p>
        <p>{experience.end}</p>

    </div>
  )
}

export default ExpInfo