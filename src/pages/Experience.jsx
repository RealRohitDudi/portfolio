import { motion } from 'framer-motion';
import ExperienceCard from '../components/ui/ExperienceCard';
import useThemeStore from '../store/themeStore';

const Experience = () => {
  const { darkMode } = useThemeStore();
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description:
        'Led the development of enterprise-level web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup XYZ',
      location: 'Remote',
      period: 'Mar 2020 - Dec 2021',
      description:
        'Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality products.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency ABC',
      location: 'New York, NY',
      period: 'Jun 2018 - Feb 2020',
      description:
        'Created responsive and interactive user interfaces for various clients. Implemented modern design patterns and best practices for web development.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Sass', 'jQuery'],
    },
  ];

  return (
    <div className={`min-h-screen pt-20 pb-12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Work Experience
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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