import { IoMdAdd } from "react-icons/io";
const AddButton = ({ title, handleAdd }) => {
  return (
    <>
      
        { title === "Add Education" && (<button className="add-button" onClick={handleAdd} > <div className="add-btn-round"><IoMdAdd /> </div>    {title} </button>) }

        { title === "Add Experience" && (<button style={{'margin-top': '2rem'}} className="add-button" onClick={handleAdd} > <div className="add-btn-round"><IoMdAdd /> </div>   {title} </button>) }
    </>
  )
}

export default AddButton