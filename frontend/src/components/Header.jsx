import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <ul className="flex justify-center space-x-4">
          <li><a href="https://m.facebook.com/profile.php/?id=100018381121831" className="text-light"><i className="ti-facebook"></i></a></li>
          <li><a href="https://twitter.com/chuenemadimetj1" className="text-light"><i className="ti-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/metja_91/" className="text-light"><i className="ti-instagram"></i></a></li>
          <li><a href="https://github.com/Takashi-91" className="text-light"><i className="ti-github"></i></a></li>
          <li><a href="https://myaccount.google.com/u/2/profile?pageId=none" className="text-light"><i className="ti-linkedin"></i></a></li>
        </ul>
        <div className="text-center mt-4">
          <h4 className="text-lg">Hello, I am</h4>
          <h1 className="text-4xl font-bold">Madimetja Chuene</h1>
          <h6 className="text-xl">UX/UI Designer | Software/Web Developer</h6>
        </div>
      </div>
    </header>
  );
};

export default Header;
