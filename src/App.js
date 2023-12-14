import { useState } from 'react'
import Header from "./components/Header";
import RenderExperienceInfo from "./components/RenderExperienceInfo";
import AddFormExp from './components/AddFormExp';
import Section from './components/Section';
import GeneralInfo from './components/GeneralInfo';

function App() {
  const [showAddExpForm, setShowAddExpForm] = useState(true)
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

// Add

const addSection = (experience) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newExperience = {id, ...experience}
  setExperiences([...experiences, newExperience])
}


  return (
    <>
      <Header title="CV Builder!"/>
      <div className="container">
        
        <div className='left-side'>
          <div className="builder">
          <Section title="Your Details" />
            
          </div>
        </div>
        <div className='right-side'>

          <GeneralInfo />

        </div>
      </div>
    </>
    
  );
}

export default App;


