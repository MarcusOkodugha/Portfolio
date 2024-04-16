import '../styles/WebsiteContainer.css';

type WebsiteContainerProps = {
    link?: string;
    imgPath?: string;
}

function WebsiteContainer(props: WebsiteContainerProps){
    return (

        <div className='websiteContainer'>
            <div className='iframeContainer' >
                {props.imgPath && <img src={props.imgPath} className='iframe'></img>}
                {props.link&& <iframe src={props.link} title="description" className='iframe'></iframe>}
            </div>
        </div>
    )
}

export default WebsiteContainer;