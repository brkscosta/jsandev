import { GitHubIcon } from '@/icons/GitHubIcon'
import { InstagramIcon } from '@/icons/InstagramIcon'
import { cn } from '@/lib/utils' // Import the cn function
import { SocialLinksProps } from '@/types/Components'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FC } from 'react'

export const SocialLinks: FC<SocialLinksProps> = ({ mail: phoneNo, instagram }) => {
  const handleMailClick = () => {
    window.open(`mailto:${phoneNo}`, '_self')
  }

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagram}`, '_blank')
  }

  const handleGitHubClick = () => {
    window.open('https://github.com/brkscosta', '_blank')
  }

  const socialButtons = [
    {
      onClick: handleMailClick,
      className: 'bg-blue-400 hover:bg-blue-700',
      icon: <Mail className="w-7 h-7" />,
      label: 'Mail'
    },
    {
      onClick: handleInstagramClick,
      className: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      icon: <InstagramIcon className="w-7 h-7" />,
      label: 'Instagram'
    },
    {
      onClick: handleGitHubClick,
      className: 'bg-gray-300 hover:bg-white',
      icon: <GitHubIcon className="w-7 h-7" />,
      label: 'GitHub'
    }
  ]

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-4 right-4 flex flex-col gap-2 z-50"
    >
      {socialButtons.map((button, index) => (
        <motion.button
          key={index}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
          onClick={button.onClick}
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center hover:scale-100 transition-all duration-200 shadow-lg',
            button.className
          )}
          aria-label={button.label}
        >
          {button.icon}
        </motion.button>
      ))}
    </motion.div>
  )
}
