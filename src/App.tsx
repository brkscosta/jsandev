import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { HeroDescription } from './components/hero/HeroDescription'
import { HeroHeader } from './components/hero/HeroHeader'
import { HeroSection } from './components/hero/HeroSection'
import { HeroSubHeader } from './components/hero/Subheader'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { ParticlesBackground } from './components/ParticlesBackground'
import { ProfileImage } from './components/ProfileImage'
import { SocialLinks } from './components/SocialLinks'
import { ThemeToggle } from './components/ThemeToggle'
import { Timeline } from './components/timeline/TimeLine'
import { ThemeProvider } from './contexts/ThemeContext'

export const App = (): ReactElement => {
  const { t } = useTranslation()

  return (
    <ThemeProvider>
      <ParticlesBackground />
      <section className="absolute text-center w-full h-full">
        <div className="flex flex-col items-center justify-center p-6">
          <LanguageSwitcher />
          <ThemeToggle />

          <HeroSection>
            <ProfileImage />
            <HeroHeader name="Joanã Costa" />
            <HeroSubHeader />
            <HeroDescription text={t('HeroDescription_description')} />
          </HeroSection>

          <Timeline />
        </div>
      </section>
      <SocialLinks instagram="jsancosta" mail="hello@jsandev.com" />
    </ThemeProvider>
  )
}

export default App
