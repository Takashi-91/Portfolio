import React from "react";
import Skills from "./Skill";
import { Canvas } from "@react-three/fiber";
import AnimatedModel from "../components/AnimatedModel";
import { OrbitControls } from "@react-three/drei";

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-50 py-16">
        <div className="flex-grow bg-gray-100 overflow-y-auto">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-red-500">My</span> Resume
          </h2>
          <p className="text-gray-600 mt-4">
            A brief overview of my journey, skills, and expertise.
          </p>
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Expertise */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h4 className="text-xl font-semibold text-gray-800">Expertise</h4>
            <span className="block w-12 h-1 bg-red-500 my-4"></span>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-gray-800">2022 - Present:</strong> Software Developer
              working on web applications, UX/UI designs, and creating scalable software solutions.
            </p>
          </div>

          {/* Education */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h4 className="text-xl font-semibold text-gray-800">Education</h4>
            <span className="block w-12 h-1 bg-red-500 my-4"></span>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-gray-800">2022 - Present:</strong> Diploma in Software
              Development, focusing on web technologies, algorithms, and user experience design.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h4 className="text-xl font-semibold text-gray-800">Skills</h4>
            <span className="block w-12 h-1 bg-red-500 my-4"></span>

            {/* Skill Progress Bars */}
            <div className="space-y-4">
              {/* HTML & CSS */}
              <div>
                <h6 className="text-gray-800">HTML & CSS</h6>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 w-4/5 rounded-full"></div>
                </div>
              </div>

              {/* JavaScript */}
              <div>
                <h6 className="text-gray-800">JavaScript</h6>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 w-3/4 rounded-full"></div>
                </div>
              </div>

              {/* React */}
              <div>
                <h6 className="text-gray-800">React.js</h6>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 w-2/3 rounded-full"></div>
                </div>
              </div>

              {/* Tailwind */}
              <div>
                <h6 className="text-gray-800">Tailwind CSS</h6>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 w-4/5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      </div>
       {/* Right Section: Canvas */}
            <div className="bg-pink-500 flex-none" style={{ width: "40vw" }}>
              <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} />
                <OrbitControls enableZoom={true} enablePan={false} enableRotate={false} />
                <AnimatedModel
                  url="/models/Samba Dancing.fbx"
                  scale={0.2}
                  position={[0, 0, 3]}
                />
              </Canvas>
            </div>
    </section>
  );
};

export default Resume;
