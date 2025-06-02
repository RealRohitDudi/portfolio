import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const ExperienceCard = ({ experience }) => {
  const { title, company, location, period, description, technologies } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l-2 border-primary-500"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500" />

      {/* Content */}
      <div className="card">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-lg text-primary-500">{company}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-1">
              <FiCalendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiMapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300">{description}</p>

          {technologies && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard; 