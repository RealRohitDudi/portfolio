import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import useThemeStore from '../store/themeStore';

const About = () => {
  const { darkMode } = useThemeStore();
  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: FiTwitter,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
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
            About Me
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
              <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Who am I?
              </h2>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                I'm a passionate Full Stack Developer with over 5 years of experience
                in building modern web applications. I specialize in JavaScript
                technologies and have a strong foundation in both frontend and
                backend development.
              </p>
            </div>

            <div>
              <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Journey
              </h2>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                My journey in web development began during my college years when I
                discovered my passion for creating interactive and user-friendly
                applications. Since then, I've worked with various companies and
                startups, helping them build scalable and efficient solutions.
              </p>
            </div>

            <div>
              <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                What I Do
              </h2>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Full Stack Web Development</li>
                <li>• UI/UX Design Implementation</li>
                <li>• Performance Optimization</li>
                <li>• Technical Consulting</li>
                <li>• Code Review & Mentoring</li>
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Personal Interests
              </h2>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor activities
                like hiking and photography. I believe in continuous learning and
                staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FiDownload className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 