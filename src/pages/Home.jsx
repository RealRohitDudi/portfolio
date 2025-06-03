import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroModel from "../components/3d/HeroModel";
import useThemeStore from "../store/themeStore";
import ProjectCard from "../components/ui/ProjectCard";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiTerminal,
  FiGitBranch,
  FiCpu,
  FiBox,
  FiLayers,
  FiDatabase as FiMongoDB,
  FiPackage,
  FiServer as FiNode,
  FiDatabase as FiMongoose,
  FiCpu as FiLangChain,
} from "react-icons/fi";
import {
  SiCplusplus,
  SiSwift,
  SiJavascript,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";

const Home = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const projectsScrollRef = useRef(null);
  const skillsScrollRef = useRef(null);

  const scrollSkills = (offset) => {
    if (skillsScrollRef.current) {
      skillsScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };
  const scrollProjects = (offset) => {
    if (projectsScrollRef.current) {
      projectsScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const featuredSkills = [
    {
      title: " Data Structures & Algorithms ",
      icon: FiCpu,
    },
    {
      title: "C/C++",
      icon: SiCplusplus,
    },
    {
      title: "Swift",
      icon: SiSwift,
    },
    {
      title: "Javascript",
      icon: SiJavascript,
    },
    {
      title: "Database management system",
      icon: FiDatabase,
    },
    {
      title: "Backend ",
      icon: FiServer,
    },
    {
      title: "Express",
      icon: SiExpress,
    },
    {
      title: "System Design ",
      icon: FiLayers,
    },
    {
      title: "Git & Github",
      icon: FiGitBranch,
    },
    {
      title: "Terminal & Bash",
      icon: FiTerminal,
    },
    {
      title: "react.js",
      icon: SiReact,
    },
    {
      title: "MongoDB",
      icon: FiMongoDB,
    },
    {
      title: "Vite",
      icon: SiVite,
    },
    {
      title: "next.js",
      icon: SiNextdotjs,
    },
    {
      title: "node.js",
      icon: FiNode,
    },
    {
      title: "mongoose ",
      icon: FiMongoose,
    },
    {
      title: "langchain",
      icon: FiLangChain,
    },
  ];

  const featuresProjects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      image: "/images/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
    },
    {
      title: "Project 2",
      description: "A full-stack web application built with React and Express",
      image: "/images/project1.jpg",
      tags: ["React", "Node.js", "Express"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
    },
    // Add more projects here
  ];
  return (
    <div className={`min-h-screen ${darkMode ? "bg-black" : "bg-white"}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Model */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={darkMode ? 0.3 : 0.5} />
            <pointLight
              position={[10, 10, 10]}
              intensity={darkMode ? 0.8 : 1}
            />
            <spotLight
              position={[-10, 10, -10]}
              angle={0.3}
              penumbra={1}
              intensity={darkMode ? 0.5 : 0.8}
              castShadow
            />
            {/* <HeroModel /> */}
          </Canvas>
        </div>

        {/* Content */}
        <div
          className={`relative z-10 text-center px-4 ${
            darkMode ? "dark bg-black text-white" : "bg-white text-gray-900"
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Hi, I'm{" "}
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              Rohit Dudi
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Juniour Professional in Software Engineering
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-around p-4 space-x-4"
          >
            <Link
              to="/projects"
              className={`font-sans-serif px-4 py-2 flex items-center gap-2 border-gray-500  rounded-2xl border transition-all duration-300 ease-in-out hover:scale-105  hover:border-blue-500 ${
                darkMode ? " text-white" : " text-gray-800"
              } btn-primary`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M80-140v-320h320v320H80Zm80-80h160v-160H160v160Zm60-340 220-360 220 360H220Zm142-80h156l-78-126-78 126ZM863-42 757-148q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204L919-98l-56 56ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-380Zm120-260Z" />
              </svg>
              View Projects
            </Link>

            <Link
              to="/contact"
              className={`font-sans-serif px-4 py-2 flex items-center gap-2 rounded-2xl border transition-all duration-300 ease-in-out hover:scale-105  hover:border-blue-500  ${
                darkMode ? "border-gray-500" : "border-gray-500"
              } btn-secondary`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M480-240q-56 0-107 17.5T280-170v10h400v-10q-42-35-93-52.5T480-240Zm-280 34q54-53 125.5-83.5T480-320q83 0 154.5 30.5T760-206v-514H200v514Zm280-194q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T540-540q0-25-17.5-42.5T480-600q-25 0-42.5 17.5T420-540q0 25 17.5 42.5T480-480ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm280-460Zm0 380h200-400 200Z" />
              </svg>
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <div
            className={`w-6 h-10 border-2 ${
              darkMode ? "border-gray-600" : "border-gray-400"
            } rounded-full flex justify-center`}
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section
        className={`py-20 ${
          darkMode ? "dark bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div
          className={`${
            darkMode ? "dark bg-black text-white" : "bg-white text-gray-900"
          }max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 `}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="w-full p-4 rounded-lg relative">
            <button
              onClick={() => scrollProjects(-400)}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${
                darkMode ? "bg-gray-900" : "bg-gray-500"
              } text-white p-2 rounded-full z-10 shadow-lg hover:bg-gray-600 transition"
              aria-label="Scroll Right`}
              aria-label="Scroll Left"
            >
              &#8592;
            </button>

            <button
              onClick={() => scrollProjects(400)}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${
                darkMode ? "bg-gray-900" : "bg-gray-500"
              } text-white p-2 rounded-full z-10 shadow-lg hover:bg-gray-600 transition"
              aria-label="Scroll Right`}
            >
              &#8594;
            </button>
            <div ref={projectsScrollRef} className="overflow-x-auto  mt-12">
              <div className="flex gap-8 w-max">
                {featuresProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title font-sans text-xl text-center"
          >
            Skills & Expertise
          </motion.h2>

          <div className="w-full p-4 overflow-x-hidden w-full max-w-full  rounded-lg relative">
            {/* Scroll buttons */}
            <button
              onClick={() => scrollSkills(-200)}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${
                darkMode ? "bg-gray-900" : "bg-gray-500"
              } text-white p-2 rounded-full  shadow-lg hover:bg-gray-600 transition"
              aria-label="Scroll Right`}
              aria-label="Scroll Left"
            >
              &#8592;
            </button>

            <button
              onClick={() => scrollSkills(200)}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${
                darkMode ? "bg-gray-900" : "bg-gray-500"
              } text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition"
              aria-label="Scroll Right`}
              aria-label="Scroll Right"
            >
              &#8594;
            </button>

            {/* Scroll buttons (same as before) */}
            <div
              ref={skillsScrollRef}
              className="flex flex-col space-y-4 overflow-x-auto scrollbar-hide"
            >
              {[0, 1, 2].map((rowIndex) => (
                <div key={rowIndex} className="flex space-x-4">
                  {featuredSkills
                    .filter((_, index) => index % 3 === rowIndex)
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center justify-center bg-green-400 rounded-full px-4 py-2 cursor-pointer hover:bg-green-500 transition whitespace-nowrap"
                      >
                        <skill.icon className="w-5 h-5 text-black mr-2" />
                        <span className="text-black font-semibold">
                          {skill.title}
                        </span>
                      </div>
                    ))}
                </div>
              ))}
            </div>
            <div className="flex w-full justify-center items-center pt-4">
              {" "}
              <Link to="/skills" className="px-4 py-2 border rounded-full">
                See Score
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
