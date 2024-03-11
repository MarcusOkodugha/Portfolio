// DetailedProjectView.tsx

import React from 'react';
import { ProjectContainerProps } from '../types';
import '../styles/DetailedProjectView.css'; 
import WebsiteContainer from './WebsiteContainer';
import Technologies from './Technologies';

interface DetailedProjectViewProps extends ProjectContainerProps {
  close: () => void;
}

const DetailedProjectView: React.FC<DetailedProjectViewProps> = ({ title, link, description, longDescription, close, technologies }) => {
  // Function to stop the propagation of click events to prevent closing when clicking inside the dialog
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const formattedLongDescription = longDescription ? longDescription.split('\n').map((text, index)  => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  )) : '';

  return (
    <div className="dialog-overlay" onClick={close}>
      <div className="dialog-card" onClick={stopPropagation}>
        <button className="close-button" onClick={close}>
          <span className="material-icons">close</span> {/* Material icon for close */}
        </button>
        <div className='title'>{title}</div>
        <div className='center-row'>
          <div className='left-flex-col-container'>
            <div className='computer'>
              {link && <WebsiteContainer link={link}></WebsiteContainer>}
            </div>
            <div className='tech-stack-row'>
             {technologies&& <Technologies technologies={technologies}></Technologies>}
            </div>

          </div>
          <div className='description'>
            {description && <p style={{fontWeight:"bold"}}>{description}</p>}
            {formattedLongDescription}
          </div>
        </div>

        <div className='bottom-row'>
        <a href={link} target="_blank" rel="noopener noreferrer">Visit Project Website</a>
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectView;
