import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import useThemeStore from "../store/themeStore";

const About = () => {
    const { darkMode } = useThemeStore();
    const socialLinks = [
        {
            icon: FiGithub,
            href: "https://github.com/DevRohitDudi",
            label: "GitHub",
        },
        {
            icon: FiLinkedin,
            href: "https://linkedin.com/in/rohit-dudi",
            label: "LinkedIn",
        },
        {
            icon: FiTwitter,
            href: "https://twitter.com/",
            label: "Twitter",
        },
        {
            icon: FiDownload,
            href: "/Rohit Dudi - Resume Frontend.pdf",
            label: "Resume",
        },
        {
            icon: FiGithub,
            href: "https://devrohitdudi.vercel.app/",
            label: "Portfolio",
        },
    ];

    return (
        <div
            className={`min-h-screen pt-20 pb-12 ${
                darkMode ? "bg-black" : "bg-white"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1
                        className={`text-4xl md:text-5xl font-bold mb-4 ${
                            darkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        About Me
                    </h1>
                    <p
                        className={`text-xl ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        Get to know more about my journey and passion
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden">
                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                            <div className="flex space-x-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-primary-400 transition-colors duration-200"
                                    >
                                        <link.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2
                                className={`text-2xl font-semibold mb-4 ${
                                    darkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                Who am I?
                            </h2>
                            <p
                                className={
                                    darkMode ? "text-gray-300" : "text-gray-600"
                                }
                            >
                                Hi, I'm Rohit Dudi, a passionate Full Stack
                                Developer with expertise in JavaScript,
                                TypeScript, React, Node.js, and modern web
                                technologies. I love building scalable,
                                performant, and beautiful web applications. My
                                journey started with curiosity and has grown
                                into a career of impactful projects and
                                continuous learning.
                            </p>
                        </div>

                        <div>
                            <h2
                                className={`text-2xl font-semibold mb-4 ${
                                    darkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                My Journey
                            </h2>
                            <p
                                className={
                                    darkMode ? "text-gray-300" : "text-gray-600"
                                }
                            >
                                I have worked on several real-world projects
                                including Quantor, Tubeloft, and more. My
                                experience spans startups and established
                                companies, always focusing on delivering
                                high-quality solutions and learning new
                                technologies.
                            </p>
                        </div>

                        <div>
                            <h2
                                className={`text-2xl font-semibold mb-4 ${
                                    darkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                What I Do
                            </h2>
                            <ul
                                className={`space-y-2 ${
                                    darkMode ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                <li>
                                    • Full Stack Web Development (React,
                                    Node.js, TypeScript, MongoDB, PostgreSQL)
                                </li>
                                <li>
                                    • UI/UX Design Implementation (Figma,
                                    Tailwind CSS)
                                </li>
                                <li>• DevOps & Cloud (Docker, AWS)</li>
                                <li>• Open Source Contributions</li>
                                <li>• Technical Consulting & Mentoring</li>
                            </ul>
                        </div>

                        <div>
                            <h2
                                className={`text-2xl font-semibold mb-4 ${
                                    darkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                Personal Interests
                            </h2>
                            <p
                                className={
                                    darkMode ? "text-gray-300" : "text-gray-600"
                                }
                            >
                                Outside of work, I enjoy learning new tech,
                                contributing to open source, and sharing
                                knowledge with the community. I also love
                                photography and exploring new places.
                            </p>
                        </div>

                        {/* Download CV Button */}
                        <div className="pt-4">
                            <a
                                href="/Rohit Dudi - Resume Frontend.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center space-x-2"
                            >
                                <FiDownload className="w-5 h-5" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
