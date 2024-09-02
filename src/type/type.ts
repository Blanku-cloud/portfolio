export interface SocialMediaList {
  media: string;
  link: string;
}

export type ListType = "experience" | "project";

interface Work {
  name: string;
  title: string;
  link: string;
  year: number;
  desc: string;
  imgs: string[];
}

export interface PopupList {
  experience: Work[];
  project: Work[];
}

export interface SocailMedia {
  media: string;
  link: string;
}
