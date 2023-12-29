import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const EduInfo = ({ education, onDelete, handleEdit }) => {
  return (
    <div className='expInfo'>
        <h3>{education.school} <span><MdDelete onClick={() => onDelete(education.id)} /> <FaRegEdit onClick={() => handleEdit(education.id)} /> </span></h3>
        <h3>{education.degree}</h3>
        <p>{education.date}</p>
        <p>{education.location}</p>

    </div>
  )
}

export default EduInfo