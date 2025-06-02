import { motion } from 'framer-motion';
// import { IconType } from 'react-icons';

const SkillCard = ({ skill }) => {
  const { name, icon: Icon, level, color } = skill;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card flex flex-col items-center text-center p-6"
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: `${color}20` ||"gray"}}
      >
        <Icon className="w-8 h-8" style={{ color }} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {name}
      </h3>
      <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {level}%
      </span>
    </motion.div>
  );
};

export default SkillCard; 