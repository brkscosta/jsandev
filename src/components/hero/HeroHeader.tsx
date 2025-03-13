import { motion } from "motion/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { HeroHeaderProps } from "../../types/Components";

export const HeroHeader = ({ name }: HeroHeaderProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-bmw-blue
         via-[#00FF88] to-bmw-gray-400 dark:to-white bg-clip-text text-transparent`}
    >
      {t("HeroHeader_name") + " " + name}
    </motion.h1>
  );
};
