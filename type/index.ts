import { StaticImageData } from "next/image";

export type ProcessStep = {
  title: string;
  duration: string;
  tags: string[];
  icon: "search" | "strategy" | "solution"; // Identifying icons by name
}

export type ProjectChallenge = {
  title: string;
  description: string;
}

export type ProjectSolution = {
  title: string;
  description: string;
}

export type ProjectImages = {
  hero: StaticImageData;
  gallery: StaticImageData[];
}

export type ProjectProp = {
  id: string;
  slug: string;
  img: StaticImageData,
  category: string;
  title: string;
  description: string;
  tags?: string[];
  year?: string;
  client?: string;
  role?: string;
  overview?: string;
  impact?: string;
  designProcess?: string;
  processSteps?: ProcessStep[]; // New field for structured process steps
  techStack?: string[];
  challenge?: {
    title: string;
    description: string;
  };
  solution?: {
    title: string;
    description: string;
  };
  images?: {
    hero: StaticImageData | string;
    hero2: StaticImageData | string;
    gallery: (StaticImageData | string)[];
    responsive?: (StaticImageData | string)[];
  };
  midSectionImage?: StaticImageData | string;
  liveUrl?: string;
};
//   images?: {
//     hero: StaticImageData | string;
//     gallery: (StaticImageData | string)[];
//   };
//   liveUrl?: string;
// }

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  img: StaticImageData;
  bio?: string;
  linkedIn?: string;
  description: string[]
  is_board?: boolean;
}

type ListProp = {
  id: string;
  title: string;
  list_items: string[];
}

type ContentProp = {
  id: string;
  paragraphs: string[];
  lists: ListProp[]
}

export type BlogDescriptionProps = {
  id: string;
  title: string;
  contents: ContentProp[];

}

export type BlogProp = {
  id: string;
  img: StaticImageData;
  slug: string;
  title: string;
  overview: string;
  published_date: string;
  description: BlogDescriptionProps[];
}

export type BlogImage = {
  src: string;
  alt: string;
};

export type BlogContentSection = {
  subtitle: string;
  text: string[];
};

export type BlogPostProp = {
  id: string;
  img: StaticImageData;
  published_date: string;
  publisher: string;
  title: string;
  description: string;
  keywords: string;
  primaryKeyword: string;
  image: BlogImage;
  content: BlogContentSection[];
};

type EventDescriptionProp = {
  id: string;
  contents: string[];
}

export type Speaker = {
  id: string;
  name: string;
  role: string;
  company?: string;
  image: StaticImageData;
  bio?: string;
}

export type AgendaItem = {
  id: string;
  time: string;
  title: string;
  description?: string;
  speaker_id?: string;
}

export type EventProp = {
  id: string;
  event_slug: string;
  event_type: 'online' | 'in-person';
  published_date: string;
  main_description: string;
  location: string;
  img: StaticImageData;
  header: string;
  date: string;
  time: string;
  event_link?: string;
  title: string;
  description: EventDescriptionProp[];
  speakers?: Speaker[];
  agenda?: AgendaItem[];
  registration_deadline?: string;
  max_attendees?: number;
  current_attendees?: number;
  price?: {
    amount: number;
    currency: string;
  };
  tags?: string[];
}

interface SubResponsibility {
  id: string;
  title: string;
  contents: string[];
}

interface Responsibility {
  res_id: string;
  title: string;
  res_items?: string[];
  contents?: string[];
  sub_res?: SubResponsibility[];
}

interface AboutRole {
  about: string;
  skill: Responsibility[];
}

export interface JobItem {
  id: string;
  slug: string;
  role: string;
  location: string;
  time: string;
  salary: string;
  company: string;
  department: string;
  about_role: AboutRole;
  min_experience?: string;
}

export interface ProblemContentProp {
  id: string;
  title: string;
  description: string;
}

export interface ProblemSectionProp {
  title: string;
  contents: ProblemContentProp[];
  summary: string;
  problem_images: any[];
}

export interface SolutionItemProp {
  id: string;
  title: string;
  contents: string[];
}

export interface SolutionSection {
  images: StaticImageData[];
  solutions: SolutionItemProp[];
}

export interface ResultItemProp {
  id: string;
  title: string;
  contents: string;
}

export interface ResultSection {
  images: StaticImageData[];
  results: ResultItemProp[];
}

export interface ClientFeedbackProp {
  quote: string;
  author: string;
  role: string;
  image: StaticImageData;
}

export interface CaseStudyProp {
  id: string;
  youtube_url: string;
  title: string;
  slug: string;
  description: string;
  logo?: StaticImageData;
  img: StaticImageData;
  type: string;
  industry?: string;
  services?: string[];
  problems: ProblemSectionProp;
  our_solutions: SolutionSection;
  our_results: ResultSection;
  client_feedback?: ClientFeedbackProp;
  client?: string;
  role?: string;
  year?: string | number;
}