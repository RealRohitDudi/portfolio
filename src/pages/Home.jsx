import { Canvas } from '@react-three/fiber';
import { useRef } from "react";

import { motion } from 'framer-motion';
import HeroModel from '../components/3d/HeroModel';
import { useThemeStore } from '../store/themeStore';
import ProjectCard from '../components/ui/ProjectCard';
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiDocker,

} from 'react-icons/si';
import { FaAws } from "react-icons/fa";


const Home = () => {
    const { darkMode, toggleDarkMode } = useThemeStore()
    const scrollRef = useRef(null);


    const scrollByAmount = (offset) => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
      }
    };

    
    
    const featuredSkills = [
      {
        title: 'Frontend Development',
        icon: FiCode,
      },
      {
        title: 'Backend Development',
        icon: FiDatabase,
      },
      {
        title: 'react Development',
        icon: FiCode,
      },
      {
        title: 'Api Development',
        icon: FiCode,
      },
      {
        title: 'Frontend Development',
        icon: FiCode,
      },
      {
        title: 'Frontend Development',
        icon: FiCode,
      },
      {
        title: 'Frontend Development',
        icon: FiCode,
      },
    ]
    const featuresProjects = [
      {
        title: 'Project 1',
        description: 'A full-stack web application built with React and Node.js',
        image: '/images/project1.jpg',
        tags: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/yourusername/project1',
        live: 'https://project1.com',
      },
      // Add more projects here
    ];
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* 3D Model */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={darkMode ? 0.3 : 0.5} />
              <pointLight position={[10, 10, 10]} intensity={darkMode ? 0.8 : 1} />
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
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-500 dark:text-gray-200 mb-6"
            >
              Hi, I'm <span className="text-gray-500">Rohit Dudi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Juniour Professional in Software Engineering
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-around p-4 space-x-4 "
            >
              <a href="/projects" className="px-4 py-2 rounded-2xl border-1 border-gray-500 dark:border-gray-200 btn-primary  border-4 border-transparent animate-spin-gradient">
                View Projects
              </a>
              <a href="/contact" className="px-4 py-2 rounded-2xl border-1 border-gray-500 dark:border-gray-200 btn-secondary">
                Contact Me
              </a>

            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
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
        <section className="py-20 bg-gray-50 dark:bg-dark-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-title text-center"
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuresProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Preview Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-title text-center"
            >
              Skills & Expertise
            </motion.h2>

            {/* for horizontal scrolling */}
            {/* <div className="w-full overflow-x-auto whitespace-nowrap p-4 bg-gray-100"> */}
            {
              // featuredSkills.map((skill, index) => (
              //     <div className="inline-block mr-4 bg-green-400  rounded-full">    
              //     <div className='flex items-center justify-center '>     
              //        {/*names in this  div  */}
              //        <skill.icon className="w-8 h-8" /> <button class="px-6 py-3 rounded-xl text-black font-semibold ">{skill.title} </button>
              //     </div>  
              //     </div>

              // ))
            }
            {/* </div> */}


            <div className="w-full bg-gray-100 p-4 relative">
              {/* Scroll buttons */}
              <button
                onClick={() => scrollByAmount(-200)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
                aria-label="Scroll Left"
              >
                &#8592;
              </button>

              <button
                onClick={() => scrollByAmount(200)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
                aria-label="Scroll Right"
              >
                &#8594;
              </button>

              {/* Scrollable container */}
              <div
                ref={scrollRef}
                className="overflow-x-auto scrollbar-hide whitespace-normal"
                style={{ display: "grid", gridAutoFlow: "column", gridTemplateRows: "repeat(3, auto)", gap: "1rem" }}
              >
                {featuredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-2 bg-green-400 rounded-full px-4 py-2 min-w-[120px] cursor-pointer hover:bg-green-500 transition"
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                    <button className="text-white font-semibold whitespace-nowrap">{skill.title}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
 export default Home; 