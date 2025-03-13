export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type HeroDescriptionProps = {
  text: string;
};

export type HeroHeaderProps = {
  name: string;
};

export type HeroSectionProps = {
  children?: React.ReactNode;
};

export type SocialLinksProps = {
  phoneNo: string;
  instagram: string;
};

export type TimelineMarkerProps = {
  date: string;
  icon: string;
  title: string;
  location: string;
  description?: string;
};
