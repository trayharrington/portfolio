"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isCurrent = usePathname() === href;

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={isCurrent ? "underline decoration-2 underline-offset-8" : "hover:underline hover:underline-offset-8"}
    >
      {children}
    </Link>
  );
}
