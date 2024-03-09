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
            <div style={{fontSize:"x-large", fontFamily:"arial", fontWeight:""}}>Elevate Your Cloud Economy</div>
                    <div className='projectContainer'>
                        <WebsiteContainer link={props.link}></WebsiteContainer>
                    </div>
            </Card>
        </div>
    )
}

export default ProjectContainer;