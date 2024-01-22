import { forwardRef } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';

const CVPreview = forwardRef(( props, ref ) => {
  return (
    <div  ref={ref} className='main-page'>
        <div className="sub-page">
            <GeneralInfo generalInfo={props.generalInfo} />
            <EducationInfo educationInfo={props.educationInfo} />
            <ExperienceInfo experienceInfo={props.experienceInfo} />
        </div>   
    </div>
  )});
export default CVPreview