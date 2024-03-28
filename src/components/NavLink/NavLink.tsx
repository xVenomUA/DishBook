"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={` ${className} ${
        path.startsWith(href) ? "text-orange-500 scale-105" : "text-slate"
      }`}
    >
      {children}
    </Link>
  );
}
