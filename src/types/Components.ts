export type ThemeProviderProps = {
  children: React.ReactNode
}

export type HeroDescriptionProps = {
  text: string
}

export type HeroHeaderProps = {
  name: string
}

export type HeroSectionProps = {
  children?: React.ReactNode
}

export type SocialLinksProps = {
  mail: string
  instagram: string
}

export type TimelineMarkerProps = {
  date: string
  icon: string
  title: string
  location: string
  description?: string
  index?: number
}

type SVGIconProps = {
  className: string
}

export type WhatsAppIconProps = SVGIconProps

export type InstagramIconProps = SVGIconProps

export type GitHubIconProps = SVGIconProps
