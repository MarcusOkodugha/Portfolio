// DetailedProjectView.tsx

import React from 'react';
import { ProjectContainerProps } from '../types';
import '../styles/CvContainer.css'; 
import WebsiteContainer from './WebsiteContainer';
import Technologies from './Technologies';

interface DetailedProjectViewProps extends ProjectContainerProps {
  close: () => void;
}

function DetailedProjectView(props: DetailedProjectViewProps) {
  // Function to stop the propagation of click events to prevent closing when clicking inside the dialog
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const formattedLongDescription = props.longDescription ? props.longDescription.split('\n').map((text, index)  => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  )) : '';
    console.log(props.imgWidth);
    console.log(props.useWebsiteContainer); 
  return (
    <div className="dialog-overlay" onClick={props.close}>
      <div className="dialog-card" onClick={stopPropagation}>
        {/* <button className="close-button" onClick={props.close}>
          <span className="material-icons">close</span>
        </button> */}
        <div className='title'>{props.title}</div>
        <div className='center-row'>
          <div className='left-flex-col-container'>
            <div className='computer'>
              {props.link && props.useWebsiteContainer && <WebsiteContainer link={props.link}></WebsiteContainer>}
            </div>
            <div className='center-img'>
                {props.showImage &&<img src={props.imgPath} alt={props.title} style={{width: props.imgWidth, height: "auto"}}></img>}
            </div>
            <div className='tech-stack-row'>
                {props.technologies&& <Technologies technologies={props.technologies}></Technologies>}
            </div>
          </div>
          <div className='right-side-container'>

          <div className='description'>
            {props.description && <p style={{fontWeight:"bold"}}>{props.description}</p>}
            {formattedLongDescription}
          </div>
          <div className='links'>
            {props.link &&<a href={props.link} target="_blank" rel="noopener noreferrer">Visit Project Website</a>}
            {props.downloadLink &&<a href={props.downloadLink} target="_blank" rel="noopener noreferrer">Download App</a>}
            {props.gitLink &&<a href={props.gitLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        </div>
          </div>

      </div>
    </div>
  );
}

export default DetailedProjectView;
