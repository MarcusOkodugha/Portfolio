import '../styles/WebsiteContainer.css';

type WebsiteContainerProps = {
    link: string;
}

function WebsiteContainer(props: WebsiteContainerProps){
    return (
        <div className='websiteContainer'>
            <div className='iframeContainer' >
                <iframe src={props.link} title="description" className="websiteContainer"></iframe>
            </div>
        </div>
    )
}

export default WebsiteContainer;