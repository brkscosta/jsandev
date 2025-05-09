import translationEN from '@/locales/en/translation.json'
import translationPT from '@/locales/pt/translation.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
