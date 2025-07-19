import './AboutUs.css';
import '../App.css'

const AboutUs = () => {
  return (
    <div className="about-us-wrapper" id="about">
      <h2 className="about-title">About Us</h2>

      <div className="about-us-container">
        <div className="letters-inline">
          <span className="letter floating-i">I</span>
          <span className="ampersand">&</span>
          <span className="letter floating-k">K</span>
        </div>

        <div className="content-panel">
          <p>
            Hi there! We’re <strong>Ishika Arora</strong> and <strong>Krishika Khandelwal</strong> — two friends who met 
            during our college days at <strong>Vivekananda Institute of Professional Studies (VIPS), Pitampura</strong>, 
            and ended up building a shared passion for all things tech.
          </p>
          <p>
            Our journey began in the BCA classrooms, where endless projects, 
            late-night debugging, and brainstorming sessions sparked a deeper curiosity for how things
             work behind the screen. What started as classmates collaborating on assignments soon grew 
             into a dynamic partnership exploring full tech stacks, 
            creative problem-solving, and digital innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;