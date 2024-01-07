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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', phoneNumber: '', email: ''})
  const [education, setEducationInfo] = useState([
    {
      id: 1,
      school: "University of Guelph",
      degree: "Computer Science",
      date: "October 2021",
      location: "Guelph, Ontario"
    },
    {
      id:2,
      school: "GCI",
      degree: "highschool",
      date: '2015',
      location: 'cambridge'
    }
  ])
  // const [showAddExpForm, setShowAddExpForm] = useState(false)
  // const [showAddEducationForm, setShowAddEducationForm] = useState(false)
//   const [experiences, setExperiences] = useState([
//     {
//         id: 1,
//         title: 'Customer Service Representative',
//         company: 'Wellwise',
//         responsibilities: 'Organized customer information and data for customer service purpose.\nAssisted customers in various areas including insurance claims, ostomy care, medical/home care aids',
//         from: 'January 2018',
//         end: 'January 2019',
//     }
// ])


function handleNameUpdate(event) {
  switch (event.target.name) {
    case "firstName":
      setFirstName(event.target.value);
      break;
    case "lastName":
      setLastName(event.target.value);
      break;
    case "emailAddress":
      setEmail(event.target.value );
      break;
    case "phone":
      setPhoneNumber(event.target.value);
      break;
    default:
      break;
  }
}

const [formData, setFormData] = useState({
  // Store form data separately for each user by their ID
});

console.log(formData)

const handleEducationChange = (e, eduId) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [eduId]: { ...formData[eduId], [name]: value },
  });
};

const onSubmitEdu = (e, eduId) => {
    e.preventDefault();
    if (formData[eduId]) {
      const updatedEduItem = education.map((eduItem) =>
        eduItem.id === eduId ? { ...eduItem, ...formData[eduId] } : eduItem
      );
      setEducationInfo(updatedEduItem);
      // Reset the formData for the current user after submission
      setFormData({ ...formData, [eduId]: {} });
    }


};

const addGeneralInfo = (info) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const givenInfo = {id, ...info}
  setGeneralInfo(givenInfo)

}

const addEducation = (edu) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newEducation = {id, ...edu}
  setEducationInfo([...education, newEducation])
}

const deleteSectionEdu = (id) => {
  setEducationInfo(education.filter((edu) => edu.id !== id))
}


const onSubmit = (e) => {
  e.preventDefault()

  if(!firstName){
      alert('Enter First Name')
  }
  addGeneralInfo({ firstName, lastName, email, phoneNumber })

}

  return (
    <>
      <Header title="CV Builder"/>
      <div className="container">
        
        <div className='left-side'>
          <div className="builder"> 
            <Section 
              title="Your Details" 
              handleName={handleNameUpdate} 
              onSubmit={onSubmit} 
              info={generalInfo} 
            />

            <Section 
              title="Your Education" 
              education={education} 
              handleAddEducation={addEducation} 
              deleteSectionEdu={deleteSectionEdu} 
              handleChange={handleEducationChange}
              onSubmit={onSubmitEdu}
              
            />
            {/* <Section title="Education" onAdd={() => setShowAddEducationForm(!showAddEducationForm)} showAdd={showAddEducationForm}/> */}
            {/* {showAddEducationForm && <AddFormEducation onAdd={addEducation}/> } */}
            {/* <RenderEducationInfo education={education} onDelete={deleteSectionEdu} /> */} 
            
            <Section title="Your Experience" />
            {/* <Section title="Experience" onAdd={() => setShowAddExpForm(!showAddExpForm)} showAdd={showAddExpForm} /> */}
            {/* {showAddExpForm && <AddFormExp onAdd={addSection} /> } */}
            {/* <RenderExperienceInfo experiences={experiences} onDelete={deleteSection} /> */}
          </div>
        </div>
        <div className='right-side'>

          <GeneralInfo generalInfo={generalInfo} />
          {/* <Experiences experiences={experiences} /> */}
          <EducationInfo education={education} />

        </div>
      </div>
    </>
    
  );
}

export default App;


