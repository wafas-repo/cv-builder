import { useState } from 'react'
import { useRef } from "react";
import ReactToPrint from 'react-to-print';
import Header from "./components/Header";
import Section from './components/Section';
import CVPreview from './components/CVPreview';
import html2pdf from "html2pdf.js";
import { IoPrintSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

function App() {
  const componentRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', phoneNumber: '', email: '', address: ''})
  const [education, setEducationInfo] = useState([
    {
      id: 1,
      school: "University of Guelph",
      degree: "Computer Science",
      date: "October 2021",
      location: "Guelph, Ontario"
    },
  ])
  const [experiences, setExperiences] = useState([
    {
        id: 1,
        title: 'Customer Service Representative',
        company: 'Wellwise',
        responsibilities: 'Organized customer information and data for customer service purpose.\nAssisted customers in various areas including insurance claims, ostomy care, medical/home care aids',
        start: 'January 2018',
        end: 'January 2019',
        location: 'Cambridge, On'
    }
 ])

  const addGeneralInfo = (info) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const givenInfo = {id, ...info}
    setGeneralInfo(givenInfo)
  
  }

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
    case "address":
      setAddress(event.target.value);
      break;
    default:
      break;
  }
}

const downloadAsPdf = () => {
  const cv = document.querySelector(".main-page");
  const options = {
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(options).from(cv).save();
};

const onSubmit = (e) => {
  e.preventDefault()

  if(!firstName){
      alert('Enter First Name')
  }
  addGeneralInfo({ firstName, lastName, email, phoneNumber, address })

}

const [formData, setFormData] = useState({
  // Store form data separately for each user by their ID
});

const [formDataExp, setFormDataExp] = useState({
  // Store form data separately for each user by their ID
});

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

// Experience

const handleExpChange = (e, expId) => {
  const { name, value } = e.target;
  setFormDataExp({
    ...formDataExp,
    [expId]: { ...formDataExp[expId], [name]: value },
  });
};

const onSubmitExp = (e, expId) => {
  e.preventDefault();
  if (formDataExp[expId]) {
    const updatedExpItem = experiences.map((expItem) =>
      expItem.id === expId ? { ...expItem, ...formDataExp[expId] } : expItem
    );
    setExperiences(updatedExpItem);
    // Reset the formData for the current user after submission
    setFormDataExp({ ...formDataExp, [expId]: {} });
  }


};


const addEducation = (edu) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newEducation = {id, ...edu}
  setEducationInfo([...education, newEducation])
}

const addExperience = (exp) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newExperience = {id, ...exp}
  setExperiences([...experiences, newExperience]);
}

const deleteSectionEdu = (id) => {
  setEducationInfo(education.filter((edu) => edu.id !== id))
}

const deleteSectionExp = (id) => {
  setExperiences(experiences.filter((exp) => exp.id !== id))
}




  return (
    <>
      <Header titleP1='CV' titleP2='Builder' />
      <div className="container">
        
        <div className='left-side'>
          <div className="builder"> 
            <Section 
              title="Your Details" 
              info={generalInfo} 
              handleChange={handleNameUpdate} 
              onSubmit={onSubmit} 
            />

            <Section 
              title="Your Education" 
              info={education} 
              handleAdd={addEducation} 
              handleDelete={deleteSectionEdu} 
              handleChange={handleEducationChange}
              onSubmit={onSubmitEdu}
              
            />
            
            <Section 
              title="Your Experience"
              info={experiences}
              handleAdd={addExperience}
              handleDelete={deleteSectionExp}
              handleChange={handleExpChange}
              onSubmit={onSubmitExp}
            />
          </div>
        </div>
        <div className='right-side'>
          <div className='print-btns'>

          <ReactToPrint
              trigger={() => <button className='print-pdf-btn' ><IoPrintSharp /></button>}
              content={() => componentRef.current}
          />
          <button className='print-pdf-btn'  onClick={downloadAsPdf}> <FaFileDownload  /> </button>

          </div>
          

          <CVPreview
            ref={componentRef}
            generalInfo={generalInfo}
            educationInfo={education}
            experienceInfo={experiences}
          />

        </div>
      </div>
    </>
    
  );
}

export default App;


