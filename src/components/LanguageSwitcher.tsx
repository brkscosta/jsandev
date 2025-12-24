import { motion } from 'motion/react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex space-x-2">
      <motion.button
        className={`p-2 rounded-full bg-bmw-gray-100 dark:bg-bmw-gray-800 shadow-lg
           hover:shadow-xl transition-all duration-300`}
        onClick={(): void => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        {i18n.language === 'en' ? <span className="text-2xl">🇧🇷</span> : <span className="text-2xl">🇬🇧</span>}
      </motion.button>
    </div>
  )
}
