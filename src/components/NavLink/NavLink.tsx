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
  function isActive(pathname: string) {
    return path == pathname ? "text-orange-500 scale-105" : "text-white";
  }

  
  return (
    <Link href={href} className={` ${className} ${isActive(href)}`}>
      {children}
    </Link>
  );
}
