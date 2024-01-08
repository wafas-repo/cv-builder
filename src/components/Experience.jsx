import AddButton from "./AddButton"
import RenderExperienceInfo from "./RenderExperienceInfo"

const Experience = ({ isExpanded, handleAddExperience, deleteSectionExp, experiences, handleExpChange, onSubmitExp }) => {
  return ( 
    <div>
        {isExpanded && 
            <>
                <p className="description">
                Include your relevant experience and dates in this section.
                </p>
                <div className="eduI-form">
                  {experiences.map((experience) => (
                    <RenderExperienceInfo experience={experience} onDelete={deleteSectionExp} handleExpChange={handleExpChange} onSubmitExp={onSubmitExp} />
                  ))}
                </div>
                <AddButton title="Add Experience" handleAdd={handleAddExperience} />
            </>
            

        } 
    </div>
  )
}

export default Experience