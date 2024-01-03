import { useState } from "react";
import Button from './Button'
import AddFormGeneral from "./AddFormGeneral";

const Section = ({ title, showAdd, handleName, onSubmit, info }) => {

  const [showAddGeneralForm, setShowAddGeneralForm] = useState(false)
 

  var onExpand = () => setShowAddGeneralForm(!showAddGeneralForm)
  

  return (
    <>
        <div className='section'>
            <p className='section-title'>{title}</p>
            <Button color={showAdd ? "red" : "black"} text={showAddGeneralForm ? "Close" : "Add" } onClick={onExpand} />
        </div>
        {showAddGeneralForm && <AddFormGeneral onSubmit={onSubmit} handleChange={handleName} info={info} /> }

        
    </> 
    
  )
}

export default Section