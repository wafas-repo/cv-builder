import { useState } from 'react'
import Header from "./components/Header";
import RenderExperienceInfo from "./components/RenderExperienceInfo";
import AddFormExp from './components/AddFormExp';
import Section from './components/Section';
import GeneralInfo from './components/GeneralInfo';
import AddFormGeneral from './components/AddFormGeneral';
import Experiences from './components/Experiences';
import AddFormEducation from './components/AddFormEducation';
import RenderEducationInfo from './components/RenderEducationInfo';
import EducationInfo from './components/EducationInfo';

function App() {
  const [showAddExpForm, setShowAddExpForm] = useState(false)
  const [showAddGeneralForm, setShowAddGeneralForm] = useState(false)
  const [showAddEducationForm, setShowAddEducationForm] = useState(false)
  const [editID, setEditID] = useState(0)
  const [generalInfo, setGeneralInfo] = useState([])
  const [education, setEducationInfo] = useState([
    {
      id: 1,
      school: "University of Guelph",
      degree: "Computer Science",
      date: "October 2021",
      location: "Guelph, Ontario"
    }
  ])
  const [experiences, setExperiences] = useState([
    {
        id: 1,
        title: 'Customer Service Representative',
        company: 'Wellwise',
        responsibilities: 'Organized customer information and data for customer service purpose.\nAssisted customers in various areas including insurance claims, ostomy care, medical/home care aids',
        from: 'January 2018',
        end: 'January 2019',
    },
    {
        id: 2,
        title: 'Sales Associate',
        company: 'The Source',
        responsibilities: 'Assisted customers as a tech expert and provided easy solutions for their needs.\nWorked alongside sales representatives to boost sales by enhancing product presentation.',
        from: 'January 2019',
        end: 'January 2020',

    },
    {
        id: 3,
        title: 'Sales Associate Seasonal',
        company: 'Indigo',
        responsibilities: 'Assisted customers with their needs relating to books and other goods.\nMaintained a clean and tidy work environment.',
        from: 'November 2023',
        end: 'current',
    }
])



// Delete 

const deleteSection = (id) => {
  setExperiences(experiences.filter((exp) => exp.id !== id))
}

const deleteSectionEdu = (id) => {
  setEducationInfo(education.filter((edu) => edu.id !== id))
}

// Edit

const handleEdit = (id) => {
  const editEntry = education.find((i) => i.id === id)

}

// Add

const addSection = (experience) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newExperience = {id, ...experience}
  setExperiences([...experiences, newExperience])
}

const addEducation = (edu) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newEducation = {id, ...edu}
  setEducationInfo([...education, newEducation])
}

const addGeneralInfo = (info) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const givenInfo = {id, ...info}
  setGeneralInfo([givenInfo])

}


  return (
    <>
      <Header title="CV Builder"/>
      <div className="container">
        
        <div className='left-side'>
          <div className="builder"> 
            <Section title="Your Details" onAdd={() => setShowAddGeneralForm(!showAddGeneralForm)} showAdd={showAddGeneralForm} />
            {showAddGeneralForm && <AddFormGeneral onAdd={addGeneralInfo} /> }
            <Section title="Education" onAdd={() => setShowAddEducationForm(!showAddEducationForm)} showAdd={showAddEducationForm}/>
            {showAddEducationForm && <AddFormEducation onAdd={addEducation}/> }
            <RenderEducationInfo education={education} onDelete={deleteSectionEdu} handleEdit={handleEdit}/>
            <Section title="Experience" onAdd={() => setShowAddExpForm(!showAddExpForm)} showAdd={showAddExpForm} />
            {showAddExpForm && <AddFormExp onAdd={addSection} /> }
            <RenderExperienceInfo experiences={experiences} onDelete={deleteSection} />
          </div>
        </div>
        <div className='right-side'>

          <GeneralInfo generalInfo={generalInfo} />
          <Experiences experiences={experiences} />
          <EducationInfo education={education} />

        </div>
      </div>
    </>
    
  );
}

export default App;


