import Card from './Card'
import WebsiteContainer from './WebsiteContainer'
import '../styles/ProjectContainer.css';


type ProjectContainerProps = {  
    link: string;
}   

function ProjectContainer(props: ProjectContainerProps){
    return (
        <div>
            <Card>

            <div style={{fontSize:"",fontFamily:"arial", fontWeight:"", opacity:"0.5"}} >Cloud Saver</div>
            <div style={{fontSize:"x-large", fontFamily:"arial", fontWeight:"", paddingBottom:"2rem"}}>Elevate Your Cloud Economy</div>
                        <WebsiteContainer link={props.link}></WebsiteContainer>
            </Card>
        </div>
    )
}

export default ProjectContainer;