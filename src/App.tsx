
import './styles/App.css'
import Navbar from './components/Navbar'
import Title from './components/Title'
import ProjectContainer from './components/ProjectContainer'

function App() {


  return (
    <div className='container'>
      <Navbar></Navbar>
      <Title></Title>
      <div className='projectsRow'>
        <ProjectContainer 
          // link='https://sv.wikipedia.org/wiki/Portal:Huvudsida'>
          link='https://mvk-cloudsaver-frontend-gm8ghxv42-marcusokodughas-projects.vercel.app/'>
        </ProjectContainer>
        <ProjectContainer 
          link='https://www.marcusokodugha.com/'>
        </ProjectContainer>
        <ProjectContainer 
          link='https://www.marcusokodugha.com/'>
        </ProjectContainer>
      </div>
    </div>
  )
}


export default App;
