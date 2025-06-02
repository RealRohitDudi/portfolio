import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import useThemeStore from "../../store/themeStore.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { darkMode } = useThemeStore();

  const socialLinks = [
    {
      icon: <FiGithub className="w-6 h-6" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <FiTwitter className="w-6 h-6" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      href: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  return (
    <footer
      className={` ${
        darkMode ? "dark bg-black text-white" : "bg-white text-gray-900"
      } border-t border-gray-200 dark:border-dark-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-500">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-600">
              A showcase of my work, skills, and experience in web development
              and design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 dark:text-gray-600 hover:text-primary-500 dark:hover:text-primary-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-600 dark:text-gray-600 hover:text-primary-500 dark:hover:text-primary-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 dark:text-gray-600 hover:text-primary-500 dark:hover:text-primary-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-500 hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-200">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2023-{currentYear} RohitDudi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
