import Card from './Card'
import WebsiteContainer from './WebsiteContainer'
import '../styles/ProjectContainer.css';
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
          <Card>
            <div style={{fontSize: "", fontFamily: "arial", fontWeight: "", opacity: "0.5"}} >
              {props.title}
            </div>
            <div style={{fontSize: "x-large", fontFamily: "arial", fontWeight: "", paddingBottom: "2rem"}}>
              {props.description}
            </div>
            {props.link && props.useWebsiteContainer && <WebsiteContainer link={props.link}></WebsiteContainer>}
            {props.showImage && 
            <div style={{display:"flex", width:"100%",  justifyContent: "center" }}>
              <img src={props.imgPath} alt={props.title} style={{width: "60%", height: "auto"}}></img>
            </div>
            }
          </Card>
        </div>
      );
    }
    
    export default ProjectContainer;