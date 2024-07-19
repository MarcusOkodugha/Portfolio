
import Navbar from './components/Navbar'
import ProjectContainer from './components/ProjectContainer'
import  { useRef ,useState} from 'react';
import ScrollButton from './components/ScrollButton';
import './styles/ScrollButton.css';
import ContactButton from './components/ContactButton';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { ProjectContainerProps } from './types';
import DetailedProjectView from './components/DetailedProjectView';
import CvContainer from './components/CvContainer';
import Typewriter from './components/Typewriter';


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
      <DarkModeProvider >
        <div className='container'>
          <div className='top-bar'>
            {/* <Title></Title> */}
            <Typewriter></Typewriter>
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
        <div className='center-section'>

          <div ref={scrollContainerRef} className='projectsRow'>
              <ScrollButton direction="left" onClick={() => scrollHorizontally('left')} />
              <ScrollButton direction="right" onClick={() => scrollHorizontally('right')} />
              <div className='spacer'></div>
            <CvContainer></CvContainer>

            <ProjectContainer
            title="Cloud Saver"
            link="https://mvk-cloudsaver-frontend.vercel.app/"
            description="Elevate Your Cloud Economy"
            longDescription= {""}
            onClick={() => openDialog({
              title: 'Cloud Saver',
              link: 'https://mvk-cloudsaver-frontend.vercel.app/',
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
                {imgPath: "../assets/github-actions.jpg", title: "Actions"},
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
            imgWidth='60%'
            >
            </ProjectContainer>

            <ProjectContainer
            title="Book And Claim"
            link=""
            gitLink=''
            downloadLink=''
            genericLink='https://afry.com/en'
            genericLinkText='AFRY'
            description="AFRY"
            longDescription= {""}
            onClick={() => openDialog({
              title: 'Book And Claim',
              link: '',
              gitLink: '',
              downloadLink: '',
              genericLink:'https://afry.com/en',
              genericLinkText:'AFRY',
              description: "Book And Claim by Dream Team",
              longDescription:"In the spring of 2023, I assumed the role of product owner for a pioneering sustainability and enterprise system developed for Afry, a consulting leader in sustainability. This system, built under a strict non-disclosure agreement (NDA), integrates advanced technology to enhance sustainable practices across industries. Due to confidentiality constraints, the specifics of the system's functionalities remain undisclosed. However, I can highlight the sophisticated technology stack utilized in its creation.\n\n" +
              "The development employed Angular for crafting a dynamic user interface, complemented by NgRx for state management, ensuring a reactive and consistent experience. Angular Material provided a suite of design components for a sleek, modern look and feel. The server-side logic was powered by .NET Core, with C Sharp as the primary programming language, offering robust performance and scalability. Azure cloud services were crucial for hosting and data management, providing a secure and scalable infrastructure. TypeScript brought strong typing to JavaScript, enhancing the maintainability and reliability of the codebase. GitHub Actions automated the continuous integration and deployment processes, streamlining development and ensuring high-quality outputs.\n\n"+
              "As product owner, my responsibility was to orchestrate these technologies into a seamless and effective system that supports Afry's strategic goals in sustainability and EUs 2050 Taxonomy goal. This project not only highlights my expertise in managing complex technological solutions but also reflects my commitment to leveraging technology for environmental stewardship.",
              technologies: [
                {imgPath: "../assets/angular.jpg", title: "Angular"},
                {imgPath: "../assets/ngRx.jpg", title: "NgRx"},
                {imgPath: "../assets/angularMaterial.jpg", title: "Angular Material"},
                {imgPath: "../assets/dotNet.jpg", title: ".NET Core"},
                {imgPath: "../assets/cSharp.jpg", title: "C Sharp"},
                {imgPath: "../assets/azure.jpg", title: "Azure"},
                {imgPath: "../assets/typescript.jpg", title: "TypeScript"},
                {imgPath: "../assets/github-actions.jpg", title: "Actions"},
              ],
              useWebsiteContainer: true,
              showImage:false,
              imgPath: '../assets/bookAndClaim.png',
              imgWidth: "77%",
            })}
            useWebsiteContainer={true}
            showImage={false}
            imgPath='../assets/bookAndClaim.png'
            imgWidth='100%'
            >
            </ProjectContainer>

            <ProjectContainer
            title="Chess"
            link=""
            gitLink='https://github.com/MarcusOkodugha/Chess'
            downloadLink=''
            description="Play Against Infinity"
            longDescription= {""}
            onClick={() => openDialog({
              title: 'Chess',
              link: '',
              gitLink: 'https://github.com/MarcusOkodugha/Chess',
              downloadLink: '',
              description: "Play Against Infinity",
              longDescription:"Dive into the captivating world of Chess with Infinity a digital chess platform meticulously crafted in the fall of 2022, as I explored the depths of object-oriented programming and applied its principles through the Java Swing framework. This project encapsulates the fusion of a beloved traditional game with the innovative twists of modern technology, offering a unique chess experience for players of all skill levels. At the heart of this platform is Infinity, a chess bot designed to provide a challenging yet enjoyable game to those daring to test their skills. Infinity is not just any opponent; it embodies the strategic depth and complexity of chess, making each game a new opportunity to learn and improve. Players have the flexibility to choose their experience: engage in a thoughtful match against Infinity, enjoy the camaraderie of playing against friends, or sit back and observe as Infinity takes on itself in an intriguing display of automated strategy."+"\n\n"+"Chess with Infinity is more than a game; it's a reflection of my journey through the art of programming and my passion for chess. The user interface, carefully designed with Java Swing, offers intuitive navigation and clear visual cues, ensuring a seamless interaction with the game. Whether you're a seasoned chess enthusiast or new to the game, the platform invites you into an engaging world where each move tells a story of strategic thought and the endless possibilities that programming can unlock."+"\n"+"This project highlights my dedication to crafting an interactive experience that bridges the gap between classic strategy and modern innovation. By stepping into the world of Chess with Infinity players embark on a journey that challenges their skills, stimulates their minds, and offers a fresh take on the timeless game of chess",
              technologies: [
                {imgPath: "../assets/java.jpg", title: "Java"},
                {imgPath: "../assets/JavaSwing.jpg", title: "Java Swing"},
                {imgPath: "../assets/javafx.jpg", title: "JavaFX"},
                {imgPath: "../assets/junit.jpg", title: "JUnit"},

              ],
              useWebsiteContainer: false,
              showImage:true,
              imgPath: '../assets/Chess.png',
              imgWidth: "77%",
            })}
            useWebsiteContainer={false}
            showImage={true}
            imgPath='../assets/Chess.png'
            imgWidth='55%'
            >
            </ProjectContainer>

            <ProjectContainer
            title="Apple Store"
            link=""
            gitLink=''
            downloadLink=''
            genericLink=''
            genericLinkText=''
            description="Det bästa stället att
            köpa dina favoritprodukter"
            longDescription= {""}
            onClick={() => openDialog({
              title: 'Apple Store Clone',
              link: '',
              gitLink: 'https://github.com/KTH-awaken/DistLab1',
              downloadLink: '',
              genericLink:'https://afry.com/en',
              genericLinkText:'Det bästa stället att köpa dina favoritprodukter.',
              description: "",
              longDescription:"In the fall of 2023, as part of a course on Distributed Systems at KTH Royal Institute of Technology, I developed a web application that closely mirrors the functionality of an Apple Web Store. This project was implemented using Java Server Pages (JSP), integrating MySQL for database management. \n\n"+
              "The application showcases a distributed system's principles by enabling efficient data handling and user interaction in a simulated e-commerce environment. \n\n"+
              "I chose to replicate the Apple Web Store because I admire their design principles and the methodologies they apply regarding UI and UX. This project not only honed my skills in JSP and MySQL but also enhanced my insights into the architectural design and management of distributed systems.",
              technologies: [
                {imgPath: "../assets/jsp.jpg", title: "JSP"},
                {imgPath: "../assets/java.jpg", title: "Java"},
                {imgPath: "../assets/mysql.jpg", title: "MySQL"},
              ],
              useWebsiteContainer: true,
              showImage:false,
              imgPath: '../assets/AppleStore.png',
              imgWidth: "77%",
            })}
            useWebsiteContainer={true}
            showImage={false}
            imgPath='../assets/AppleStore.png'
            imgWidth='100%'
            >
            </ProjectContainer>

            <ProjectContainer
            title="Journal System"
            link="https://user-interface.app.cloud.cbh.kth.se/"
            description="Streamlining Health Management"
            longDescription= {""}
            onClick={() => openDialog({
              title: 'Journal System',
              link: 'https://user-interface.app.cloud.cbh.kth.se/',
              gitLink: 'https://github.com/orgs/KTH-awaken/repositories',
              description: "journal System Streamlining Health Management",
              longDescription: "This health journaling platform uses React.js for its interface and Node.js for backend operations, including image uploads.\n\n"+
              "Security is handled through Keycloak.\n\n"+
              "MySQL, Docker, Kubernetes, and GitHub Actions support its infrastructure and deployment.",
              technologies: [
                {imgPath: "../assets/react.jpg", title: "React.js"},
                {imgPath: "../assets/typescript.jpg", title: "TypeScript"},
                {imgPath: "../assets/java.jpg", title: "Java"},
                {imgPath: "../assets/springboot.jpg", title: "springboot"},
                {imgPath: "../assets/junit.jpg", title: "JUnit"},
                {imgPath: "../assets/mysql.jpg", title: "MySQL"},
                {imgPath: "../assets/keycloack.jpg", title: "Keycloak"},
                {imgPath: "../assets/quarkus.jpg", title: "Quarkus"},
                {imgPath: "../assets/nodejs.jpg", title: "Node.js"},
                {imgPath: "../assets/tailwind.jpg", title: "Tailwind"},
                {imgPath: "../assets/github-actions.jpg", title: "Actions"},
                {imgPath: "../assets/kubernets.jpg", title: "Kubernetes"},
                {imgPath: "../assets/docker.jpg", title: "Docker"},
              ],
              useWebsiteContainer: true,
              showImage: false,
              imgPath: '../assets/JournalNoFrame.png',
              imgWidth: "",
            })}
            useWebsiteContainer={true}
            showImage={false}
            imgPath='../assets/JournalNoFrame.png'
            imgWidth=''
            >
            </ProjectContainer> 

            {/* <ProjectContainer
            title="Terraformer"
            link=""
            gitLink='https://github.com/KTH-dream-team/KTH-dream-project'
            downloadLink=''
            description="Play Online Against Friends"
            longDescription= {""}
            onClick={() => openDialog({
              title: 'Terraformer',
              link: '',
              gitLink: 'https://github.com/KTH-dream-team/KTH-dream-project',
              downloadLink: '',
              description: "Play Online Against Friends",
              longDescription:"",
              technologies: [
                {imgPath: "../assets/java.jpg", title: "Java"},
              ],
              useWebsiteContainer: false,
              showImage:true,
              imgPath: '../assets/Chess.png',
              imgWidth: "77%",
            })}
            useWebsiteContainer={false}
            showImage={true}
            imgPath='../assets/Chess.png'
            imgWidth='55%'
            >
            </ProjectContainer> */}

            <div style={{ backgroundColor: "transparent" }}></div>
          </div>
          <div style={{position:"fixed",bottom:"1rem", right:"1rem", }}>
            <Navbar></Navbar>
          </div>
        </div>

      </DarkModeProvider>
  )
}


export default App;
