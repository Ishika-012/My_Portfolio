import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';
import '../App.css'

import game from '../assets/game.png';
import todo from '../assets/todo.avif';
import health from '../assets/health.avif';

const projectList = [
  {
    title: 'Tic-Tac-Toe',
    description: 'An interactive and responsive Tic Tac Toe game showcasing fundamental game logic',
    image: game,
    link: 'https://ishika-012.github.io/Tic-Tac-Toe/',
  },
  {
    title: 'ToDo Web App',
    description: 'A task management app using Reactjs and Redux. With various filters and features',
    image: todo,
    link: 'https://task-manager-zeta-three.vercel.app/',
  },
  {
    title: 'Mental Health Web App',
    description: 'A responsive web app promoting mental well-being through various features.',
    image: health,
    link: 'https://mentalwebapp.netlify.app/',
  },
];

function Project() {
  return (
    <div id="project">
      <h1 id="ProHead">Projects</h1>
      <div className="container3">
        {projectList.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            key={index}
          >
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.3 }} // ensures re-animates on every scroll into view
            >
              <div className="img-container">
                <img src={project.image} className="projectImg" alt={project.title} />
              </div>
              <div className="view-text">View Project</div>
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Project;
