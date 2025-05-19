export interface Image {
  url: string;
  alt: string;
  description: string;
}

export interface TitleSubtitleDescriptionBlade {
  type: "TitleSubtitleDescriptionBlade";
  title: string;
  subtitle: string;
  description: string;
}

export interface TitleSubtitleDescriptionOnSideBlade {
  type: "TitleSubtitleDescriptionOnSideBlade";
  title: string;
  subtitle: string;
  description: string;
}

export interface ThreeImagesBlade {
  type: "ThreeImagesBlade";
  images: Image[];
}

export type Blade =
  | TitleSubtitleDescriptionBlade
  | TitleSubtitleDescriptionOnSideBlade
  | ThreeImagesBlade;

export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  body: Blade[];
}

export interface ProjectsData {
  projects: Project[];
}
