import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log("toggleTheme");
    toggleTheme();
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={handleToggle}
      className={`
        fixed top-4 right-4 p-2 rounded-full
        bg-bmw-gray-100 dark:bg-bmw-gray-800
        shadow-lg hover:shadow-xl transition-all duration-300
        dark:text-bmw-blue text-bmw-gray-800
      `}
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  );
};
