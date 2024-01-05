import AddButton from "./AddButton"

const Experience = ({ isExpanded, handleAddExperience }) => {
  return ( 
    <div>
        {isExpanded && 
            <>
                <p className="description">
                Include your last 10 years of relevant experience and dates in this
                section.
                </p>
                <br></br>
                <AddButton title="Add Experience" handleAddExperience={handleAddExperience} />
            </>
            

        }

        
    </div>
  )
}

export default Experience