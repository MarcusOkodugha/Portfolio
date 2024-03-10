
import './styles/App.css'
import Navbar from './components/Navbar'
import Title from './components/Title'
import ProjectContainer from './components/ProjectContainer'
import React, { useRef } from 'react';
import ScrollButton from './components/ScrollButton';
import './styles/ScrollButton.css';
import ContactButton from './components/ContactButton';



function App() {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function scrollHorizontally(direction: 'left' | 'right') {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.offsetWidth * (direction === 'left' ? -0.5 : 0.5);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <div >
      <div className='container'>
        <div className='top-bar'>
          <Title></Title>
          <ContactButton></ContactButton>
        </div>
      </div>
      <div ref={scrollContainerRef} className='projectsRow'>
          <ScrollButton direction="left" onClick={() => scrollHorizontally('left')} />
          <ScrollButton direction="right" onClick={() => scrollHorizontally('right')} />
        <div style={{padding:"2.5rem"}}></div>
        <ProjectContainer 
          // link='https://sv.wikipedia.org/wiki/Portal:Huvudsida'>
          // link='https://mvk-cloudsaver-frontend-gm8ghxv42-marcusokodughas-projects.vercel.app/'>
          link='http://localhost:5174/'>
        </ProjectContainer>
        <ProjectContainer 
          link=''>
        </ProjectContainer>
        <ProjectContainer 
          link=''>
        </ProjectContainer>
      </div>
        <Navbar></Navbar>
    </div>
  )
}


export default App;
