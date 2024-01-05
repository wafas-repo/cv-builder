import { IoMdAdd } from "react-icons/io";
const AddButton = ({ title, handleAddEducation }) => {
  return (
    <>
        <button className="add-button" onClick={handleAddEducation} >

        <IoMdAdd />   
        {title}
        </button>
    </>
  )
}

export default AddButton