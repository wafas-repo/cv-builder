import { IoMdAdd } from "react-icons/io";
const AddButton = ({ title, handleAdd }) => {
  return (
    <>
      
        { title === "Add Education" && (<button className="add-button" onClick={handleAdd} >  <IoMdAdd />   {title} </button>) }

        { title === "Add Experience" && (<button className="add-button" onClick={handleAdd} >  <IoMdAdd />   {title} </button>) }
    </>
  )
}

export default AddButton