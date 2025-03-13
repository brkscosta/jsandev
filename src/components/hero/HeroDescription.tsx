import { motion } from "motion/react";
import { ReactElement } from "react";
import { HeroDescriptionProps } from "../../types/Components";

export const HeroDescription = ({
  text,
}: HeroDescriptionProps): ReactElement => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="text-lg text-bmw-gray-500 dark:text-bmw-gray-400 pb-6"
    >
      {text}
    </motion.p>
  );
};
