export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  details: {
    overview: string;
    features: string[];
    techStackDetails: { name: string; description: string }[];
    challenges: string;
    futureImprovements: string[];
    architecture?: string;
  };
}

export interface Skill {
  name: string;
  level: number; // percentage 0-100
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  institution: string;
  date: string;
  status?: string;
  details?: string[];
  coursework?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}
