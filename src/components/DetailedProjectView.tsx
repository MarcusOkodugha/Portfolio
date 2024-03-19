
import React from 'react';
import { ProjectContainerProps } from '../types';
import '../styles/DetailedProjectView.css'; 
import WebsiteContainer from './WebsiteContainer';
import Technologies from './Technologies';
import  { useEffect } from 'react';

interface DetailedProjectViewProps extends ProjectContainerProps {
  close: () => void;
}

function DetailedProjectView(props: DetailedProjectViewProps) {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const formattedLongDescription = props.longDescription ? props.longDescription.split('\n').map((text, index)  => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  )) : '';

  const closeDialog = () => {
    props.close();

  };

  useEffect(() => {
    // Add dummy history entry when the dialog opens
    window.history.pushState({ page: "dialogOpened" }, "");

    // Listen for the popstate event
    const handleBackButton = () => {
      closeDialog();
    };

    window.addEventListener('popstate', handleBackButton);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return (
    <div>
    <div className='desktop-version'>
      <div className="dialog-overlay" onClick={props.close}>
          <div className="dialog-card" onClick={stopPropagation}>
            <button className="close-button icon-button" onClick={props.close}>
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className='detail-title'>{props.title}</div>
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
      </div>

      <div className='mobile-version'>
      <div className="dialog-overlay" onClick={props.close}>
        <div className="dialog-card" onClick={stopPropagation}>
          <button className="close-button icon-button" onClick={props.close}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className='detail-title'>{props.title}</div>
          <div className='center-row'>
              <div className='computer'>
                {props.link && props.useWebsiteContainer && <WebsiteContainer link={props.link}></WebsiteContainer>}
              </div>
              <div className='center-img'>
                  {props.showImage &&<img src={props.imgPath} alt={props.title} style={{width: props.imgWidth, height: "auto"}}></img>}
              </div>

            <div className='description'>
              {props.description && <p style={{fontWeight:"bold"}}>{props.description}</p>}
              {formattedLongDescription}
            </div>
              <div className='tech-stack-row'>
                  {props.technologies&& <Technologies technologies={props.technologies}></Technologies>}
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

    </div>
  );
}

export default DetailedProjectView;
