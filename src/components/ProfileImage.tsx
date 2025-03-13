import { motion } from "framer-motion";
import { FC, useState } from "react";

export const ProfileImage: FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-bmw-blue
           via-[#00FF88] to-bmw-blue animate-spin-slow opacity-75 blur-md`}
      />
      <div
        className={`relative w-full h-full rounded-full overflow-hidden border-4
           border-white dark:border-bmw-gray-800`}
      >
        <img
          src={
            imageError
              ? "https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png"
              : "https://github.com/brkscosta.png"
          }
          alt="Profile image"
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    </motion.div>
  );
};
