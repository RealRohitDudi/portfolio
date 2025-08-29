import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import useThemeStore, { useHydrateTheme } from "./store/themeStore";

const AppContent = () => {
    // Hydrate theme from localStorage or system preference
    useHydrateTheme();
    const { darkMode } = useThemeStore();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    // Scroll to top and show loading on route change
    useEffect(() => {
        setLoading(true);
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setLoading(false), 400); // 400ms loading
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${
                darkMode ? "dark bg-black text-white" : "bg-white text-gray-900"
            }`}
        >
            <Navbar />
            {loading ? (
                <div className="flex items-center justify-center h-[60vh]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
                </div>
            ) : (
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </AnimatePresence>
            )}
            <Footer />
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
