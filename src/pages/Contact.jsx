import { useState } from "react";
import { motion } from "framer-motion";
import {
    FiMail,
    FiPhone,
    FiLinkedin,
    FiGithub,
    FiMapPin,
    FiSend,
} from "react-icons/fi";
import useThemeStore from "../store/themeStore";

const Contact = () => {
    const { darkMode } = useThemeStore();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Add your form submission logic here
            await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated API call
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: FiMail,
            title: "Email",
            content: "rohitdudijat@yahoo.com",
            link: "mailto:rohitdudijat@yahoo.com",
        },
        {
            icon: FiGithub,
            title: "GitHub",
            content: "RealRohitDudi",
            link: "https://github.com/RealRohitDudi",
        },
        {
            icon: FiLinkedin,
            title: "LinkedIn",
            content: "rohit-dudi",
            link: "https://linkedin.com/in/RealRohitDudi",
        },
        {
            icon: FiMapPin,
            title: "Website",
            content: "devrohitdudi.vercel.app",
            link: "https://rohitdudi.vercel.app/",
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
                        Get in Touch
                    </h1>
                    <p
                        className={`text-xl ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        Let's discuss your next project or opportunity
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {contactInfo.map((info) => (
                            <a
                                key={info.title}
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200 ${
                                    darkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                <div className="p-3 bg-primary-500/10 rounded-lg">
                                    <info.icon className="w-6 h-6 text-primary-500" />
                                </div>
                                <div>
                                    <h3
                                        className={`text-lg font-semibold ${
                                            darkMode
                                                ? "text-white"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {info.title}
                                    </h3>
                                    <p
                                        className={
                                            darkMode
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }
                                    >
                                        {info.content}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className={`block text-sm font-medium ${
                                        darkMode
                                            ? "text-gray-300"
                                            : "text-gray-700"
                                    }`}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`mt-1 block w-full px-4 py-2 ${
                                        darkMode
                                            ? "bg-gray-900 text-white"
                                            : "bg-white text-gray-900"
                                    } border ${
                                        darkMode
                                            ? "border-gray-700"
                                            : "border-gray-200"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className={`block text-sm font-medium ${
                                        darkMode
                                            ? "text-gray-300"
                                            : "text-gray-700"
                                    }`}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={`mt-1 block w-full px-4 py-2 ${
                                        darkMode
                                            ? "bg-gray-900 text-white"
                                            : "bg-white text-gray-900"
                                    } border ${
                                        darkMode
                                            ? "border-gray-700"
                                            : "border-gray-200"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className={`block text-sm font-medium ${
                                        darkMode
                                            ? "text-gray-300"
                                            : "text-gray-700"
                                    }`}
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className={`mt-1 block w-full px-4 py-2 ${
                                        darkMode
                                            ? "bg-gray-900 text-white"
                                            : "bg-white text-gray-900"
                                    } border ${
                                        darkMode
                                            ? "border-gray-700"
                                            : "border-gray-200"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className={`block text-sm font-medium ${
                                        darkMode
                                            ? "text-gray-300"
                                            : "text-gray-700"
                                    }`}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className={`mt-1 block w-full px-4 py-2 ${
                                        darkMode
                                            ? "bg-gray-900 text-white"
                                            : "bg-white text-gray-900"
                                    } border ${
                                        darkMode
                                            ? "border-gray-700"
                                            : "border-gray-200"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary flex items-center justify-center space-x-2"
                            >
                                <FiSend className="w-5 h-5" />
                                <span>
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </span>
                            </button>

                            {submitStatus === "success" && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-green-500 text-center"
                                >
                                    Message sent successfully!
                                </motion.p>
                            )}

                            {submitStatus === "error" && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-red-500 text-center"
                                >
                                    Failed to send message. Please try again.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
