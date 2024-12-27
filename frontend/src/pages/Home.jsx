import { Canvas } from "@react-three/fiber";
import AnimatedModel from "../components/AnimatedModel";
import { OrbitControls } from "@react-three/drei";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Suspense, useRef, useState } from "react";
import About from "../components/About";
import Skills from "../components/Skill";
import Contact from "../components/Contact";

function Home() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <div
        className="flex flex-col lg:flex-row bg-gray-100 h-screen shadow-lg"
        style={{
          backgroundImage: "url(/imgs/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.9)",
        }}
      >
        {/* Left Section - 3D Model */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center">
          <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} />
            <OrbitControls enableZoom={true} enablePan={false} enableRotate={false} />
            <Suspense fallback={<div>Loading 3D Model...</div>}>
              <AnimatedModel url="/models/Dancing Twerk.fbx" scale={0.2} position={[0, 0, 3]} />
            </Suspense>
          </Canvas>
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center items-center p-6 lg:p-8 space-y-6">
          {/* Social Links */}
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="https://m.facebook.com/profile.php/?id=100018381121831" className="text-light hover:text-blue-500">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/chuenemadimetj1" className="text-light hover:text-blue-400">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/metja_91/" className="text-light hover:text-pink-500">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://github.com/Takashi-91" className="text-light hover:text-gray-800">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://myaccount.google.com/u/2/profile?pageId=none" className="text-light hover:text-blue-700">
                <FaLinkedin />
              </a>
            </li>
          </ul>

          {/* Intro Section */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-black">Hello, I am</h4>
            <h1 className="text-4xl  font-bold text-black">Madimetja Chuene</h1>
            <h6 className="text-xl  font-bold text-black">UX/UI Designer | Software/Web Developer</h6>
          </div>
          {/* Buttons */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="w-full lg:w-auto px-6 py-3 bg-red-500 text-white font-medium rounded-md shadow hover:bg-red-600 transition duration-300">
              <a href="/doc/cv.pdf" download="Madimetja-Chuene-CV.pdf" className="text-white">
                Download My CV
              </a>
            </button>
            <button className="w-full lg:w-auto px-6 py-3 bg-black text-white font-medium rounded-md shadow hover:bg-red-600 transition duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Background Soundtrack */}
      <audio ref={audioRef} src="/audio/Imithandazo.mp3" autoPlay loop hidden={!isMuted}></audio>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-4 left-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>

      {/* Additional Sections */}
      <About />
      <Skills />
    </>
  );
}

export default Home;
