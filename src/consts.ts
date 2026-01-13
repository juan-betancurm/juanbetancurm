import type {Site, Page, Links, Socials} from "./types";



export const SITE: Site = {
  TITLE: "Jan Betancur",
  DESCRIPTION: "Welcome to my personal website!",
  AUTHOR: "Juan Betancur",
}
// Work Page

export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}
//links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  {
    TEXT: "Blog",
    HREF: "#blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects"
  }
]
// Socials

export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "juanmbetancurm@gmail.com",
    HREF: "mailto:juanmbetancurm@gmail.com",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "juanbetancurm",
    HREF: "https://www.linkedin.com/in/juan-betancurm/",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "juanbetancurm",
    HREF: "https://github.com/juan-betancurm",

  }
]