import { ThemeProviderProps } from '@/types/Components'
import { Theme, ThemeContextType } from '@/types/Theme'
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    const savedTheme: Theme = (localStorage.getItem('theme') as Theme) || 'dark'
    setTheme(savedTheme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
