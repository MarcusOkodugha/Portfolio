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
        <div onClick={handleClick}> {/* Use the regular function here */}
          <Card>
            <div style={{fontSize: "", fontFamily: "arial", fontWeight: "", opacity: "0.5"}} >
              {props.title}
            </div>
            <div style={{fontSize: "x-large", fontFamily: "arial", fontWeight: "", paddingBottom: "2rem"}}>
              {props.description}
            </div>
            {props.link && <WebsiteContainer link={props.link}></WebsiteContainer>}
          </Card>
        </div>
      );
    }
    
    export default ProjectContainer;