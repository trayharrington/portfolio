export type Project = {
  title: string;
  org?: string;
  summary: string; // one line; all that "Earlier work" shows
  problem?: string; // featured only
  built?: string; // featured only
  stack: string[];
  link?: string; // omit for proprietary work
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Account-Shadowing Widget",
    org: "WP Engine",
    summary: "Full-stack internal tool used by the Support, Marketing, and Engineering teams.",
    problem:
      "WP Engine’s platform already supported shadowing a customer’s account, but the feature lived in the back end and reaching it took several steps. Support, Marketing, and Engineering paid that cost every time they needed it.",
    built:
      "A widget that brings shadowing from the back end to the front end, so it’s available right where the teams work. I built it end to end, a React and TypeScript front end backed by Ruby on Rails, and shipped it to production for all three teams. The code is proprietary, so there’s no public repo.",
    stack: ["React", "TypeScript", "Ruby on Rails"],
    featured: true,
  },
  {
    title: "Ruby Rx",
    summary: "Ruby/Sinatra back end that ingests and decodes application error payloads, with debugging guides pulled in via API.",
    stack: ["Ruby", "Sinatra", "APIs"],
    featured: false,
  },
  {
    title: "HearNebraska: Lincoln Calling",
    summary: "Relational database and news aggregation for the Lincoln Calling site, built with an agile team.",
    stack: ["Relational DB", "JavaScript"],
    featured: false,
  },
  {
    title: "FYIIO",
    summary: "Content management system for authoring step-by-step tutorials, with TinyMCE rich-text editing.",
    stack: ["TinyMCE API"],
    featured: false,
  },
];
