import { motion } from "framer-motion";
import ExperienceCard from "../components/ui/ExperienceCard";
import useThemeStore from "../store/themeStore";

const Experience = () => {
    const { darkMode } = useThemeStore();
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "Freelance / Open Source",
            location: "Remote",
            period: "2022 - Present",
            description:
                "Building and maintaining web applications like Quantor, Tubeloft, and more. Focused on React, Node.js, TypeScript, and cloud deployment. Contributed to open source and technical communities.",
            technologies: [
                "React",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "AWS",
                "Docker",
            ],
        },
        {
            title: "Frontend Developer",
            company: "Personal Projects",
            location: "Remote",
            period: "2020 - 2022",
            description:
                "Developed and launched several web projects, learning modern frameworks and best practices. Built scalable and performant UIs.",
            technologies: ["React", "Tailwind CSS", "Vite"],
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
                        Work Experience
                    </h1>
                    <p
                        className={`text-xl ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        My professional journey and achievements
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="relative">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>

                {/* Download Resume Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center space-x-2"
                    >
                        <span>Download Resume</span>
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
