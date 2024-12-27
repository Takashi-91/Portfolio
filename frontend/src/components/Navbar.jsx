import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 bg-white shadow-lg">
  <div className="container mx-auto flex justify-between items-center p-4">
    <button className="lg:hidden">
      <span className="navbar-toggler-icon"></span>
    </button>
    <ul className="hidden lg:flex space-x-8">
      <li><a href="#home" className="text-gray-700 hover:text-red-500">Home</a></li>
      <li><a href="#about" className="text-gray-700 hover:text-red-500">About</a></li>
      <li><a href="#resume" className="text-gray-700 hover:text-red-500">Resume</a></li>
      <li><a href="#Blog" className="text-gray-700 hover:text-red-500">Blog</a></li>
      <li><a href="#contact" className="text-gray-700 hover:text-red-500">Contact</a></li>
    </ul>
    <div className="flex items-center">
      <img src="/imgs/land2.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
      <div className="ml-3">
        <h5 className="font-bold">Madimetja Chuene</h5>
        <p className="text-sm text-gray-600">Software Developer</p>
      </div>
    </div>
  </div>
</nav>
</>
);
};

export default Navbar;
