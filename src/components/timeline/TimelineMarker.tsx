import { motion, useInView } from 'motion/react'
import React, { FC } from 'react'
import { cn } from '@/lib/utils'
import { TimelineMarkerProps } from '@/types/Components'

export const TimelineMarker: FC<TimelineMarkerProps> = ({
  date,
  icon,
  title,
  location,
  description,
  index = 0,
}: TimelineMarkerProps) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      className={cn('flex flex-col md:flex-row items-center w-full mb-8 relative', isEven ? 'md:flex-row-reverse' : '')}
      initial={{ opacity: 0, y: 50 }}
      ref={ref}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Spacer for desktop alignment */}
      <div className="hidden md:block w-1/2" />

      {/* Center Line Dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border-4 border-bmw-blue shadow-lg z-10">
        <span aria-label="icon" className="text-xl" role="img">
          {icon}
        </span>
      </div>

      {/* Content Card */}
      <div className={cn('w-full md:w-1/2 pl-16 md:pl-0', isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left')}>
        <motion.div
          className="glass-panel p-6 rounded-2xl relative overflow-hidden group border-l-4 border-bmw-blue"
          whileHover={{ scale: 1.02 }}
        >
          {/* Decorative gradient blob */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-bmw-blue/10 rounded-full blur-2xl group-hover:bg-bmw-blue/20 transition-colors" />

          <div className={cn('relative z-10 flex flex-col', isEven ? 'md:items-end' : 'md:items-start')}>
            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white bg-bmw-blue rounded-full shadow-md">
              {date}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
              {location}
            </p>
            {description && <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
