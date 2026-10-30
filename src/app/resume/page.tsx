import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Traylon Harrington",
};

const experience = [
  {
    role: "Software Engineer, Associate",
    org: "WP Engine",
    dates: "Jun 2025 – Jun 2026",
    points: [
      "Built and shipped a full-stack account-shadowing widget (React, TypeScript, Ruby on Rails) used by the Support, Marketing, and Engineering teams.",
      "Built reusable, accessible UI components for the company-wide design system.",
      "Worked in an agile squad with a CI/CD-gated pull request workflow, writing automated tests for my features.",
    ],
  },
  {
    role: "Technical Onboarding Manager",
    org: "WP Engine",
    dates: "Jun 2021 – Jun 2025",
    points: [
      "Translated frontline customer pain points into technical requirements as a product stakeholder for several engineering teams.",
      "Ran large-scale site and data migrations into the WP Engine/Flywheel platform.",
      "Converted a Ruby post-migration cleanup script to Python and began integrating it into Redshell, WP Engine’s internal CLI.",
    ],
  },
  {
    role: "Happiness Engineer",
    org: "WP Engine",
    dates: "Jan 2018 – Jun 2021",
    points: ["Advanced technical support and troubleshooting with a consistent 95%+ customer satisfaction rating."],
  },
  {
    role: "Software Developer",
    org: "TSL Companies",
    dates: "May 2016 – Jul 2016",
    points: [
      "Refactored legacy .NET code and built a SQL-driven email notification system for safety compliance data.",
    ],
  },
];

const skills = [
  { label: "Languages", items: "JavaScript, TypeScript, HTML, CSS, Ruby, SQL, Java, Python, C#" },
  { label: "Frameworks", items: "React, Ruby on Rails, Sinatra, Rack, .NET" },
  { label: "Practices", items: "Agile/Scrum, CI/CD, automated testing, code review, API design, accessible UI components" },
];

export default function Resume() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-16 sm:px-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
        <a
          href="/Traylon-Harrington-Resume.pdf"
          download
          className="inline-flex w-fit items-center rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-300"
        >
          Download PDF
        </a>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p>
          Full-stack software engineer who builds web applications with Ruby on Rails, React, and TypeScript, shipped
          to production at WP Engine. Eight years at a website-hosting company, moving from customer support and
          technical onboarding into engineering, with a habit of turning real user pain points into clean, efficient
          tools.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        {experience.map((job) => (
          <article key={job.role} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold">
                {job.role} <span className="font-normal text-zinc-600 dark:text-zinc-400">· {job.org}</span>
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{job.dates}</p>
            </div>
            <ul className="flex list-disc flex-col gap-1 pl-5">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="flex flex-col gap-1">
          <li>
            <span className="font-medium">B.S. Computer Science</span>, Western Governors University (in progress,
            expected Oct 2027)
          </li>
          <li>
            <span className="font-medium">Advanced Web Development Immersive</span>, Omaha Code School
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Skills</h2>
        <dl className="flex flex-col gap-1">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="inline font-medium">{group.label}: </dt>
              <dd className="inline">{group.items}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
