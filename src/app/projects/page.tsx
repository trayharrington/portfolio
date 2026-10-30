import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Traylon Harrington",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const earlier = projects.filter((p) => !p.featured);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-16 sm:px-16">
      <h1 className="text-4xl font-bold tracking-tight">Projects</h1>

      <section className="flex flex-col gap-8">
        {featured.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-4 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <div>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              {project.org && <p className="text-zinc-600 dark:text-zinc-400">{project.org}</p>}
            </div>
            <p>{project.summary}</p>
            {project.problem && (
              <div>
                <h3 className="font-semibold">The problem</h3>
                <p>{project.problem}</p>
              </div>
            )}
            {project.built && (
              <div>
                <h3 className="font-semibold">What I built</h3>
                <p>{project.built}</p>
              </div>
            )}
            <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.link && (
              <a href={project.link} className="font-medium underline">
                View project
              </a>
            )}
          </article>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Earlier work</h2>
        <ul className="flex flex-col gap-3">
          {earlier.map((project) => (
            <li key={project.title}>
              <span className="font-medium">{project.title}:</span>{" "}
              <span className="text-zinc-600 dark:text-zinc-400">{project.summary}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
