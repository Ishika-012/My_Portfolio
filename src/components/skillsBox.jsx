import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef , useState, useEffect} from 'react';
import "../components/skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import '../App.css'

const skillsData = [
  { icon: <FaHtml5 color="#e44d26" />, name: 'HTML' },
  { icon: <FaCss3Alt color="#264de4" />, name: 'CSS' },
  { icon: <FaJs color="#f0db4f" />, name: 'JavaScript' },
  { icon: <FaReact color="#61DBFB" />, name: 'React' },
  { icon: <FaNodeJs color="#3c873a" />, name: 'Node.js' },
  { icon: <FaPython color="#306998" />, name: 'Python' }
];

function skillsBox() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount:0.3 });

 const [lines, setLines] = useState([]);
  const [started, setStarted] = useState(false);

  const typeLine = async (skill) => {
    return new Promise((resolve) => {
      let typed = '';
      let i = 0;
      const interval = setInterval(() => {
        typed += skill.name[i];
        const newLine = { icon: skill.icon, text: typed };
        setLines(prev => [...prev.slice(0, -1), newLine]);
        i++;
        if (i >= skill.name.length) {
          clearInterval(interval);
          setTimeout(() => resolve(), 500);
        }
      }, 100);
    });
  };

  const handleStart = async () => {
    if (started) return;
    setStarted(true);
    for (const skill of skillsData) {
      setLines(prev => [...prev, { icon: skill.icon, text: '' }]);
      await typeLine(skill);
    }
  };


  return (
    <section id = "skills">
  <div className="skills">
    <motion.div
      ref={ref}
      initial={{ opacity: 0,scale: 0.8,  y: 100 }}
      animate={isInView ? { opacity: 1,scale:1,  y: 0 } : {opacity:0, scale:0.8,y:100}}
      transition={{ duration: 0.6, ease: 'easeOut' , bounce:0.3, type:'spring'}}
    >
      <div id="superHead"> 
      <h1 id="head"> SKILLS</h1>
      </div>

    </motion.div>
  </div>
{/* // skills reaveal */}

  <div className="terminal-container">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <button className="start-button" onClick={handleStart}>Start</button>
        </div>
        <div className="terminal-body">
          {lines.map((line, idx) => (
            <div className="terminal-line" key={idx}>
              <span className="skill-icon">{line.icon}</span>
              <span className="skill-text">{line.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
</section>
  );
};



export default skillsBox;