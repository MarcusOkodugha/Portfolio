
import './styles/App.css'
import Navbar from './components/Navbar'
import Title from './components/Title'
import ProjectContainer from './components/ProjectContainer'

function App() {


  return (
    <div className='container'>
      <Navbar></Navbar>
      <Title></Title>
      <ProjectContainer 
        link='https://sv.wikipedia.org/wiki/Portal:Huvudsida'>
      </ProjectContainer>

    </div>
  )
}


export default App;
