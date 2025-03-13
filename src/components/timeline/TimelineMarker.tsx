import { motion, useInView } from "framer-motion";
import React, { FC } from "react";
import { TimelineMarkerProps } from "../../types/Components";

export const TimelineMarker: FC<TimelineMarkerProps> = ({
  date,
  icon,
  title,
  location,
  description,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8 flex items-center w-full"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white text-2xl mr-4">
        {icon}
      </div>
      <div className="flex-1 p-4 to-bmw-gray-300 dark:bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-bmw-gray-900 dark:text-gray-200">
          {title}
        </h3>
        <span className="text-sm text-bmw-gray-700 dark:text-bmw-gray-400">
          {date}
        </span>
        <span className="block text-sm text-bmw-gray-700 dark:text-bmw-gray-400">
          {location}
        </span>
        {description ?? (
          <p className="mt-2 text-bmw-gray-700 dark:text-bmw-gray-400">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};
