import Card from './Card'
import WebsiteContainer from './WebsiteContainer'
import { ProjectContainerProps } from '../types';

interface ProjectContainerExtendedProps extends ProjectContainerProps {
    onClick?: () => void;
}


function ProjectContainer(props: ProjectContainerExtendedProps, ){
    
    function handleClick() {
        if(props.onClick!==undefined){
            props.onClick();
        }
      }

      return (
        <div onClick={handleClick}>
          <Card backgroundColor="var(--card)">
            
            <div className='title-text'style={{ fontFamily: "arial", fontWeight: "", opacity: "0.5"}} >
              {props.title}
            </div>
            <div className="description-text"style={{fontFamily: "arial", fontWeight: "", paddingBottom: "2rem"}}>
              {props.description}
            </div>
            {props.useWebsiteContainer && <WebsiteContainer link={props.link}></WebsiteContainer>}
            {props.showImage && 
            <div style={{display:"flex", width:"100%",  justifyContent: "center"}}>
              <img src={props.imgPath} alt={props.title} style={{width: props.imgWidth, height: "auto"}}></img>
            </div>
            }
          </Card>
        </div>
      );
    }
  
    export default ProjectContainer;