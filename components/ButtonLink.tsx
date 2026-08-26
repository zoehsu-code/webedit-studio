import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "navy";
  className?: string;
};

const variants = {
  primary:
    "bg-maize text-navy hover:bg-[#ffd83d] shadow-[0_10px_28px_rgba(255,203,5,0.25)]",
  secondary:
    "border border-white/70 text-white hover:border-maize hover:text-maize",
  navy: "bg-navy text-white hover:bg-[#073965]",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-extrabold transition duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
