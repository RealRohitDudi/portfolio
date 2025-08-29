import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiLayout, FiServer } from "react-icons/fi";
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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import SkillCard from "../components/ui/SkillCard";
import useThemeStore from "../store/themeStore";

const Skills = () => {
    const { darkMode } = useThemeStore();
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: FiCode,
            skills: [
                {
                    name: "JavaScript",
                    icon: SiJavascript,
                    level: 95,
                    color: "#F7DF1E",
                },
                {
                    name: "TypeScript",
                    icon: SiTypescript,
                    level: 85,
                    color: "#3178C6",
                },
                { name: "React", icon: SiReact, level: 95, color: "#61DAFB" },
                {
                    name: "Tailwind CSS",
                    icon: SiTailwindcss,
                    level: 90,
                    color: "#06B6D4",
                },
            ],
        },
        {
            title: "Backend Development",
            icon: FiServer,
            skills: [
                {
                    name: "Node.js",
                    icon: SiNodedotjs,
                    level: 90,
                    color: "#339933",
                },
                { name: "Python", icon: SiPython, level: 80, color: "#3776AB" },
                {
                    name: "MongoDB",
                    icon: SiMongodb,
                    level: 85,
                    color: "#47A248",
                },
                {
                    name: "PostgreSQL",
                    icon: SiPostgresql,
                    level: 80,
                    color: "#336791",
                },
            ],
        },
        {
            title: "UI/UX Design",
            icon: FiLayout,
            skills: [
                {
                    name: "Responsive Design",
                    icon: FiLayout,
                    level: 95,
                    color: "#4A90E2",
                },
                {
                    name: "User Experience",
                    icon: FiLayout,
                    level: 90,
                    color: "#9B59B6",
                },
            ],
        },
        {
            title: "DevOps & Tools",
            icon: FiDatabase,
            skills: [
                { name: "Git", icon: SiGit, level: 95, color: "#F05032" },
                { name: "Docker", icon: SiDocker, level: 10, color: "#2496ED" },
                { name: "AWS", icon: FaAws, level: 10, color: "#232F3E" },
            ],
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
                        Skills & Expertise
                    </h1>
                    <p
                        className={`text-xl ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        A showcase of my technical skills and professional
                        expertise
                    </p>
                </motion.div>

                {/* Skills Categories */}
                <div className="space-y-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-6">
                                <category.icon className="w-6 h-6 text-primary-500 mr-2" />
                                <h2
                                    className={`text-2xl font-semibold ${
                                        darkMode
                                            ? "text-white"
                                            : "text-gray-900"
                                    }`}
                                >
                                    {category.title}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.skills.map((skill) => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
