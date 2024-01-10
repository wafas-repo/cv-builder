import { forwardRef } from 'react';

const CVPreview = forwardRef(( props, ref ) => {
  return (
    <div  ref={ref} className='main-page'>
        <div className="sub-page">
            <h3 align='center'>A4 Page in Portrait.(210mm X 297mm)</h3>
        </div>   
    </div>
  )});
export default CVPreview