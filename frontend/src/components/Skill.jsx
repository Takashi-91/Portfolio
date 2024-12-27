import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJsSquare, faMicrosoft, faPhp, faReact, faNodeJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase as faSolidDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt, faFigma } from '@fortawesome/free-brands-svg-icons'; // Import icons


const Frameworks = [
  { name: "Java", icon: <FontAwesomeIcon icon={faJava} size="2x" /> },
  { name: "JavaScript", icon: <FontAwesomeIcon icon={faJsSquare} size="2x" /> },
  { name: "C#", icon: <FontAwesomeIcon icon={faMicrosoft} size="2x" /> },  // Using FontAwesome Microsoft icon for C#
  { name: "PHP", icon: <FontAwesomeIcon icon={faPhp} size="2x" /> },
  { name: "SQL", icon: <FontAwesomeIcon icon={faSolidDatabase} size="2x" /> },  // Using database icon for SQL
  { name: "React", icon: <FontAwesomeIcon icon={faReact} size="2x" /> },
  { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} size="2x" /> },
  { name: "HTML5", icon: <FontAwesomeIcon icon={faHtml5} size="2x" /> },
  { name: "GIT", icon: <FontAwesomeIcon icon={faGitAlt} size="2x" /> },    // Using faGitAlt for GIT
  { name: "Figma", icon: <FontAwesomeIcon icon={faFigma} size="2x" /> },    // Using faFigma for Figma
 
];



const Skills = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center"style={{
      backgroundImage: "url(/imgs/skbg.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.9)",
    }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">My Skills</h1>
        <span className="text -center block w-12 h-1 bg-red-500 my-4"></span>
        <p className="text-gray-200">
          I have experience working with the following tools and technologies.
        </p>
        <br />
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-10">
        {Frameworks.map((framework, index) => (
          <motion.div
            key={index}
            className="bg-white text-center rounded-lg p-6 shadow-lg cursor-pointer transform hover:scale-105 hover:shadow-red-500/50 transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="mx-auto">{framework.icon}</div>
            <p className="text-red-400 font-bold mt-4">{framework.name}</p>
          </motion.div>
        ))}
      </div>
      
 </div>
  );
};

export default Skills;
