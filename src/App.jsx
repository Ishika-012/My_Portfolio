import Landing from './components/landing';
import AboutUs from './components/AboutUs';
import Skill from './components/skillsBox';
import Project from './components/Project';
import Experience from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
      }}
    >
      <section style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}>
        <Landing />
      </section>
      <section style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}>
        <AboutUs />
      </section>
      <section style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}>
        <Experience />
      </section>
      <section style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}>
        <Skill />
      </section>
      <section style={{ scrollSnapAlign: 'start', minHeight: '110vh' }}>
        <Project />
      </section>
      <section style={{ scrollSnapAlign: 'start', minHeight: '110vh' }}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
