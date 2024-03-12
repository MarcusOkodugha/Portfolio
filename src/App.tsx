
import './styles/App.css'
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
          description={selectedProject.description}
          longDescription={selectedProject.longDescription}
          close={closeDialog}
          technologies={selectedProject.technologies}
        />
      )}
 
        <div ref={scrollContainerRef} className='projectsRow'>
            <ScrollButton direction="left" onClick={() => scrollHorizontally('left')} />
            <ScrollButton direction="right" onClick={() => scrollHorizontally('right')} />
          <div style={{padding:"2.5rem"}}></div>

          <ProjectContainer
          title="Cloud Saver"
          link="https://mvk-cloudsaver-frontend-eg58.vercel.app/"
          description="Elevate Your Cloud Economy"
          longDescription= {"CloudSaver: Harnessing Kubernetes for Efficient Cloud Management\n\n"+
          "In an era where cloud infrastructure is paramount, CloudSaver emerges as an essential service for optimizing cloud performance and energy consumption. This innovative platform, designed for the Kubernetes ecosystem—which powers a significant majority of cloud deployments—offers a seamless and scalable solution to monitor and manage cloud usage effectively.\n\n"+
          "CloudSaver utilizes a robust backend built with Python, deployed as a containerized application within the cloud environment. This backend tirelessly gathers usage data, which is then stored securely in MongoDB, ensuring that performance metrics are always current and actionable. The Node.js server acts as the bridge, fetching and relaying this vital data to the frontend.\n\n"+
          "On the user-facing side, CloudSaver's intuitive interface, crafted with Vue.js, presents users with real-time insights into their cloud infrastructure's efficiency. Users are guided through a straightforward, step-by-step deployment process, enabling quick setup and immediate value from detailed consumption analytics.\n\n"+
          "As organizations continue to adopt cloud-native applications, with a recorded 96% either using or evaluating Kubernetes and 93% utilizing containers in production, tools like CloudSaver are not just beneficial but necessary. These technologies offer a proactive approach to managing the ever-growing energy footprint of cloud services while fostering cost-effective and environmentally conscious cloud operations.\n\n"+
          "With CloudSaver, enterprises can look forward to not only substantial cost savings but also an enhanced understanding of their cloud operations, a critical factor as businesses increasingly prioritize cloud-native security and multi-cloud strategies."}
          onClick={() => openDialog({
            title: 'Cloud Saver',
            link: 'https://mvk-cloudsaver-frontend-eg58.vercel.app/',
            description: "Cloud Saver Harnessing Kubernetes for Efficient Cloud Management",
            longDescription: "In an era where cloud infrastructure is paramount, CloudSaver emerges as an essential service for optimizing cloud performance and energy consumption. This innovative platform, designed for the Kubernetes ecosystem—which powers a significant majority of cloud deployments—offers a seamless and scalable solution to monitor and manage cloud usage effectively.\n\n"+
            "CloudSaver utilizes a robust backend built with Python, deployed as a containerized application within the cloud environment. This backend tirelessly gathers usage data, which is then stored securely in MongoDB, ensuring that performance metrics are always current and actionable. The Node.js server acts as the bridge, fetching and relaying this vital data to the frontend.\n\n"+
            "On the user-facing side, CloudSaver's intuitive interface, crafted with Vue.js, presents users with real-time insights into their cloud infrastructure's efficiency. Users are guided through a straightforward, step-by-step deployment process, enabling quick setup and immediate value from detailed consumption analytics.\n\n"+
            "As organizations continue to adopt cloud-native applications, with a recorded 96% either using or evaluating Kubernetes and 93% utilizing containers in production, tools like CloudSaver are not just beneficial but necessary. These technologies offer a proactive approach to managing the ever-growing energy footprint of cloud services while fostering cost-effective and environmentally conscious cloud operations.\n\n"+
            "With CloudSaver, enterprises can look forward to not only substantial cost savings but also an enhanced understanding of their cloud operations, a critical factor as businesses increasingly prioritize cloud-native security and multi-cloud strategies.",
            technologies: [
              {imgPath: "../assets/Vue.png", title: "Vue.js"},
              {imgPath: "../assets/ts.png", title: "TypeScript"},
              // {imgPath: "../assets/ts.png", title: "TypeScript"},
              // {imgPath: "../assets/ts.png", title: "TypeScript"},
              // {imgPath: "../assets/ts.png", title: "TypeScript"},
              // {imgPath: "../assets/ts.png", title: "TypeScript"},
            ]
          })}
      
          >
          </ProjectContainer>

        
          <ProjectContainer 
            title='Health Hive'
            link=' '
            description='Where Health Lives'
            >
          </ProjectContainer>
          <ProjectContainer 
            title='Campus'
            link=' '
            description='Chat And Find Your Friends On Campus'
            >
          </ProjectContainer>
        </div>
          <Navbar></Navbar>
      </DarkModeProvider>
  )
}


export default App;
