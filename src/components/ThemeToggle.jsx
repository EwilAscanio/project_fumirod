import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-primary dark:bg-accent shadow-lg hover:scale-110 transition-transform duration-200"
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}

      // className="fixed bottom-6 right-6 p-3 rounded-full bg-primary dark:bg-accent shadow-lg hover:scale-110 transition-transform duration-200"
      // whileTap={{ scale: 0.9 }}
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
    >
      {darkMode ? (
        <FaSun className="text-white text-xl" />
      ) : (
        <FaMoon className="text-white text-xl" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
