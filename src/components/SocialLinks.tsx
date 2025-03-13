import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";
import { FC } from "react";
import { SocialLinksProps } from "../types/Components";

export const SocialLinks: FC<SocialLinksProps> = ({ phoneNo, instagram }) => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${phoneNo}?text=Olá%20Joanã!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.`,
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagram}`, "_blank");
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-4 right-4 flex flex-col gap-2 z-50"
    >
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className={`w-12 h-12 rounded-full bg-green-600 hover:bg-green-700
           flex items-center justify-center text-white transform hover:scale-110
           transition-all duration-300 shadow-lg`}
        aria-label="WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleInstagramClick}
        className={`w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500
           hover:from-purple-600 hover:to-pink-600 flex items-center justify-center
            text-white transform hover:scale-110 transition-all duration-300 shadow-lg`}
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};
