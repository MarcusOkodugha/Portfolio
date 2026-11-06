import '../styles/Credential.css';

function Credential(){
    return (
        <a className='credential' href='https://www.credly.com/badges/062bb0bd-4c3e-4181-ba04-dd199076f8cd' target='_blank' rel='noopener noreferrer'>
            <img src='/assets/claude.jpg' alt=''></img>
            <span>Claude Certified Developer</span>
            <span className='credentialBy'>Anthropic</span>
        </a>
    )
}

export default Credential;
