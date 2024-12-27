import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 lg:px-16">
        {/* Column 1: Introduction */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Who am I?</h3>
          <span className="block w-16 h-1 bg-red-500"></span>
          <h5 className="text-lg text-gray-700">
            UX/UI Designer | Software/Web Developer
          </h5>
          <p className="text-gray-600 leading-relaxed">
            Hi, I am <strong className="text-gray-800">Madimetja Terence Chuene</strong>, a passionate IT student striving to excel in software development, web development, and UX/UI design. My goal is to create impactful digital solutions that improve people's lives.
          </p>
         
        </div>

        {/* Column 2: Personal Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Personal Info</h3>
          <span className="block w-16 h-1 bg-red-500"></span>
          <ul className="space-y-3 text-gray-600">
            <li>
              <strong className="text-gray-800">Birthdate:</strong> 04/26/2002
            </li>
            <li>
              <strong className="text-gray-800">Email:</strong> <a href="mailto:chuenemadimetja911@gmail.com" className="text-red-500 hover:underline">chuenemadimetja911@gmail.com</a>
            </li>
            <li>
              <strong className="text-gray-800">Phone:</strong> 068 078 3232
            </li>
            <li>
              <strong className="text-gray-800">Skype:</strong> Madimetja Chuene
            </li>
            <li>
              <strong className="text-gray-800">Address:</strong> 40056 Mamaolo Village Ga-Mphahlele
            </li>
          </ul>
        </div>

        {/* Column 3: Expertise */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">My Expertise</h3>
          <span className="block w-16 h-1 bg-red-500"></span>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-red-500 text-2xl">
                <i className="fas fa-paint-brush"></i>
              </span>
              <div>
                <h6 className="text-lg font-medium text-gray-800">UX/UI Design</h6>
                <p className="text-gray-600">Creating intuitive and engaging user experiences.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-red-500 text-2xl">
                <i className="fas fa-code"></i>
              </span>
              <div>
                <h6 className="text-lg font-medium text-gray-800">Web Development</h6>
                <p className="text-gray-600">Building responsive and modern web applications.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-red-500 text-2xl">
                <i className="fas fa-laptop-code"></i>
              </span>
              <div>
                <h6 className="text-lg font-medium text-gray-800">Software Development</h6>
                <p className="text-gray-600">Developing scalable and efficient software solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
