
import Navbar from './components/Navbar'
import Title from './components/Title'
import ProjectContainer from './components/ProjectContainer'
import  { useRef ,useState} from 'react';
import ScrollButton from './components/ScrollButton';
import './styles/ScrollButton.css';
import ContactButton from './components/ContactButton';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { ProjectContainerProps } from './types';
import DetailedProjectView from './components/DetailedProjectView';
import CvContainer from './components/CvContainer';


function App() {

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectContainerProps | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function scrollHorizontally(direction: 'left' | 'right') {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.offsetWidth * (direction === 'left' ? -0.5 : 0.5);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }


  

  const openDialog = (projectDetails: ProjectContainerProps) => {
    setSelectedProject(projectDetails);
    setIsDialogOpen(true);
  };
  
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
      <DarkModeProvider>
        <div className='container'>
          <div className='top-bar'>
            <Title></Title>
            <ContactButton></ContactButton>
          </div>
        </div>

        {isDialogOpen && selectedProject && (
        <DetailedProjectView 
          title={selectedProject.title}
          link={selectedProject.link}
          gitLink={selectedProject.gitLink}
          downloadLink={selectedProject.downloadLink}
          description={selectedProject.description}
          longDescription={selectedProject.longDescription}
          close={closeDialog}
          technologies={selectedProject.technologies}
          useWebsiteContainer={selectedProject.useWebsiteContainer}
          showImage={selectedProject.showImage}
          imgPath={selectedProject.imgPath}
          imgWidth={selectedProject.imgWidth}

        />
      )}
          
          <div ref={scrollContainerRef} className='projectsRow'>
              <ScrollButton direction="left" onClick={() => scrollHorizontally('left')} />
              <ScrollButton direction="right" onClick={() => scrollHorizontally('right')} />
            <div className='spacer'></div>

            <ProjectContainer
            title="Cloud Saver"
            link="https://mvk-cloudsaver-frontend-eg58.vercel.app/"
            description="Elevate Your Cloud Economy"
            longDescription= {""}
            onClick={() => openDialog({
              title: 'Cloud Saver',
              link: 'https://mvk-cloudsaver-frontend-eg58.vercel.app/',
              gitLink: 'https://github.com/KTH-awaken/mvk-cloudsaver-frontend',
              description: "Cloud Saver Harnessing Kubernetes for Efficient Cloud Management",
              longDescription: "In an era where cloud infrastructure is paramount, CloudSaver emerges as an essential service for optimizing cloud performance and energy consumption. This innovative platform, designed for the Kubernetes ecosystem—which powers a significant majority of cloud deployments—offers a seamless and scalable solution to monitor and manage cloud usage effectively.\n\n"+
              "CloudSaver utilizes a robust backend built with Python, deployed as a containerized application within the cloud environment. This backend tirelessly gathers usage data, which is then stored securely in MongoDB, ensuring that performance metrics are always current and actionable. The Node.js server acts as the bridge, fetching and relaying this vital data to the frontend.\n\n"+
              "On the user-facing side, CloudSaver's intuitive interface, crafted with Vue.js, presents users with real-time insights into their cloud infrastructure's efficiency. Users are guided through a straightforward, step-by-step deployment process, enabling quick setup and immediate value from detailed consumption analytics.\n\n"+
              "As organizations continue to adopt cloud-native applications, with a recorded 96% either using or evaluating Kubernetes and 93% utilizing containers in production, tools like CloudSaver are not just beneficial but necessary. These technologies offer a proactive approach to managing the ever-growing energy footprint of cloud services while fostering cost-effective and environmentally conscious cloud operations.\n\n"+
              "With CloudSaver, enterprises can look forward to not only substantial cost savings but also an enhanced understanding of their cloud operations, a critical factor as businesses increasingly prioritize cloud-native security and multi-cloud strategies.",
              technologies: [
                {imgPath: "../assets/Vue.png", title: "Vue.js"},
                {imgPath: "../assets/typescript.jpg", title: "TypeScript"},
                {imgPath: "../assets/mongodb.jpg", title: "MongoDB"},
                {imgPath: "../assets/nodejs.jpg", title: "Node.js"},
                {imgPath: "../assets/tailwind.jpg", title: "Tailwind"},
                {imgPath: "../assets/github-actions.jpg", title: "GitHub Actions"},
                {imgPath: "../assets/kubernets.jpg", title: "Kubernetes"},
                {imgPath: "../assets/docker.jpg", title: "Docker"},
                {imgPath: "../assets/Python-logo-notext.svg.png", title: "Python"},
                {imgPath: "../assets/Firebase_icon.svg.png", title: "Firebase"},
              ],
              useWebsiteContainer: true,
              showImage: false,
            })}
            useWebsiteContainer={true}
            showImage={false}
            >
            </ProjectContainer>
            <ProjectContainer
            title="Health Tracker"
            link=""
            description="Streamlining Health Management"
            longDescription= {""}
            onClick={() => openDialog({
              title: 'Health Tracker',
              link: '',
              gitLink: 'https://github.com/KTH-awaken/mvk-cloudsaver-frontend',
              description: "Health Tracker Streamlining Health Management",
              longDescription: "HealthHive is a health journaling platform using React.js for its interface and Node.js for backend operations, including image uploads.\n\n"+
              "HealthHive is a health journaling platform using React.js for its interface and Node.js for backend operations, including image uploads.\n\n"+
              "Security is handled through Keycloak.\n\n"+
              "MySQL, Docker, Kubernetes, and GitHub Actions support its infrastructure and deployment.",
              technologies: [
                {imgPath: "../assets/Vue.png", title: "Vue.js"},
                {imgPath: "../assets/typescript.jpg", title: "TypeScript"},
                {imgPath: "../assets/mongodb.jpg", title: "MongoDB"},
                {imgPath: "../assets/nodejs.jpg", title: "Node.js"},
                {imgPath: "../assets/tailwind.jpg", title: "Tailwind"},
                {imgPath: "../assets/github-actions.jpg", title: "GitHub Actions"},
                {imgPath: "../assets/kubernets.jpg", title: "Kubernetes"},
                {imgPath: "../assets/docker.jpg", title: "Docker"},
                {imgPath: "../assets/Python-logo-notext.svg.png", title: "Python"},
                {imgPath: "../assets/Firebase_icon.svg.png", title: "Firebase"},
              ],
              useWebsiteContainer: true,
              showImage: false,
            })}
            useWebsiteContainer={true}
            showImage={false}
            >
            </ProjectContainer>
            <ProjectContainer
            title="Campus"
            link=""
            gitLink='https://github.com/KTH-awaken/Campus'
            downloadLink='https://ufile.io/rcnsbl4l'
            description="Chat And Find Your Friends On Campus"
            longDescription= {""}
            onClick={() => openDialog({
              title: 'Campus',
              link: '',
              gitLink: 'https://github.com/KTH-awaken/Campus',
              downloadLink: 'https://ufile.io/rcnsbl4l',
              description: "Chat And Find Your Friends On Campus",
              longDescription: "Campus is designed to enhance the social experience for students and professionals by providing a social platform to locate friends and colleagues on campus. Developed using Kotlin for Android, the app integrates Firebase for robust back-end services and Google Maps for precise location tracking, offering a seamless and intuitive user interface.\n\n"+
              "Key Features:\n"+
              "- Real-time Location Sharing: Students can effortlessly share their current location with friends, making it simple to find companions in sprawling campus environments.\n"+
              "- Customizable Rooms: Campus facilitates the creation of custom rooms or study groups, allowing students to join and manage their study sessions or social meetups.\n"+
              "- Interactive Campus Maps: Leveraging Google Maps, the application provides detailed maps of university campuses, guiding users to their desired locations.\n"+
              "- Simplified Communication: The app features a built-in messaging system, enabling users to coordinate and chat within the platform.\n\n"+
              "Development and Technologies:\n"+
              "- Crafted with Kotlin, Campus stands out for its smooth performance and reliability on Android devices.\n"+
              "- Firebase serves as the backbone for real-time data synchronization, user authentication, and database management.\n"+
              "- Google Maps is expertly integrated to deliver accurate geolocation services and mapping.\n\n"+
              "Availability:\n"+
              "Campus is available for download on Android devices.\n\n"+
              "Download Campus and discover a smarter way to campus life today.",
              technologies: [
                {imgPath: "../assets/jetpackCompose.jpg", title: "Jetpack Compose"},
                {imgPath: "../assets/GoogleMaps.png", title: "Google Maps"},
                {imgPath: "../assets/Kotlin.png", title: "Kotlin"},
                {imgPath: "../assets/Firebase_icon.svg.png", title: "Firebase"},

              ],
              useWebsiteContainer: false,
              showImage:true,
              imgPath: '../assets/Campus.png',
              imgWidth: "85%",
            })}
            useWebsiteContainer={false}
            showImage={true}
            imgPath='../assets/Campus.png'
            imgWidth='85%'
            >
            </ProjectContainer>
            <CvContainer></CvContainer>
            <div style={{ backgroundColor: "transparent" }}></div>
          </div>
          <div className='container' style={{position:"absolute",bottom:"1rem", right:"0rem"}}>
            <Navbar></Navbar>
          </div>
      </DarkModeProvider>
  )
}


export default App;