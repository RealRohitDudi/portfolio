import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiTag } from 'react-icons/fi';
import useThemeStore from '../store/themeStore';

const Blog = () => {
  const { darkMode } = useThemeStore();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts data - replace with your actual blog posts
  const posts = [
    {
      title: 'Getting Started with React Three Fiber',
      excerpt:
        'Learn how to create stunning 3D graphics in your React applications using React Three Fiber.',
      category: 'Web Development',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      image: '/images/blog/react-three.jpg',
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt:
        'A comprehensive guide to using Tailwind CSS for building modern and responsive web applications.',
      category: 'CSS',
      date: 'Mar 10, 2024',
      readTime: '8 min read',
      image: '/images/blog/tailwind.jpg',
    },
    // Add more blog posts here
  ];

  const categories = ['all', ...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts.filter(
    (post) => selectedCategory === 'all' || post.category === selectedCategory
  );

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
            Blog
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : darkMode 
                    ? 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card group ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className={`flex items-center space-x-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className="flex items-center space-x-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiClock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-primary-500 transition-colors duration-200`}>
                  {post.title}
                </h2>

                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {post.excerpt}
                </p>

                <div className="flex items-center space-x-2">
                  <FiTag className="w-4 h-4 text-primary-500" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {post.category}
                  </span>
                </div>

                <a
                  href="#"
                  className="inline-block text-primary-500 hover:text-primary-600 transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              No blog posts found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog; 