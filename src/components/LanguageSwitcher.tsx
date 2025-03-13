import { motion } from "framer-motion";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 left-4 flex space-x-2">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={`p-2 rounded-full ${
          i18n.language === "en" ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={`p-2 rounded-full ${
          i18n.language === "pt" ? "bg-green-500" : "bg-gray-300"
        }`}
        onClick={() => changeLanguage("pt")}
      >
        PT
      </motion.button>
    </div>
  );
};
