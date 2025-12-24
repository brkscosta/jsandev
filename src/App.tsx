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

      <div className="relative min-h-screen w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 z-10">
        <header className="absolute top-6 right-6 flex gap-3 z-50">
          <LanguageSwitcher />
          <ThemeToggle />
        </header>

        <main className="w-full max-w-4xl glass-panel rounded-3xl p-8 sm:p-12 md:p-16 mt-8 mb-20">
          <HeroSection>
            <ProfileImage />
            <div className="space-y-4 mb-12">
              <HeroHeader name="Joanã Costa" />
              <HeroSubHeader />
              <HeroDescription text={t('HeroDescription_description')} />
            </div>
          </HeroSection>

          <div className="mt-16">
            <Timeline />
          </div>
        </main>
      </div>

      <SocialLinks instagram="jsancosta" mail="hello@jsandev.com" />
    </ThemeProvider>
  )
}

export default App
