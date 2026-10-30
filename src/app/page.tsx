import Image from "next/image";
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Home() {
  return (
    <main id="main" className="mx-auto flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 px-6 sm:px-16 sm:items-start">
      <Image
        src={"/headshot.jpg"}
        alt={"Headshot of Traylon Harrington"}
        width={160}
        height={160}
        className={"rounded-full"}
        priority
      />
      <div>
        <h1 className={"text-4xl font-bold tracking-tight"}>Traylon Harrington</h1>
        <p className={"mt-2 text-lg text-zinc-600 dark:text-zinc-400"}>
          Full-stack engineer building tools that take the friction out of people’s work.
        </p>
      </div>

      <div>
        <p>
          Hi, I’m Tray. I’m a full-stack engineer in Omaha working in Ruby on Rails, React, and TypeScript. I spent
          eight years at WP Engine moving from customer support to technical onboarding to engineering, where I built
          and shipped an internal tool used by our Support, Marketing, and Engineering teams. I like starting from the
          problem people actually have, and I’m finishing my Computer Science degree at WGU along the way.
        </p>
      </div>

      <div className={"flex gap-4 items-center"}>
        <p>Connect with me!</p>
        <a href="https://www.linkedin.com/in/traylon-harrington/" aria-label="LinkedIn"><FaLinkedin size={28} /></a>
        <a href="https://github.com/trayharrington" aria-label="GitHub"><FaGithub size={28} /></a>
        <a href="mailto:connect@traylonharrington.com" aria-label="Email"><MdEmail size={28} /></a>
      </div>
    </main>
  );
}
