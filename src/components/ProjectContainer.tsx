import React from 'react'
import Card from './Card'
import WebsiteContainer from './WebsiteContainer'

type ProjectContainerProps = {  
    link: string;
}   

function ProjectContainer(props: ProjectContainerProps){
    return (
        <div>
            <div style={{paddingLeft:"1rem"}}>CloudSaver</div>
            <Card>
                <WebsiteContainer link={props.link}></WebsiteContainer>
            </Card>
        </div>
    )
}

export default ProjectContainer;