import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "white" | "outline";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  rounded = true,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all btn-hover focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<string, string> = {
    primary:
      "bg-brand-orange text-white hover:bg-brand-orange/90 focus:ring-brand-orange shadow-lg shadow-brand-orange/20",
    secondary:
      "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white focus:ring-brand-black",
    dark: "bg-brand-black text-white hover:bg-zinc-800 focus:ring-zinc-700",
    white:
      "bg-white text-brand-black hover:bg-zinc-100 focus:ring-zinc-300 shadow-lg",
    outline:
      "border-2 border-white text-white hover:bg-white/10 focus:ring-white",
  };

  const sizes: Record<string, string> = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-7 py-3.5 text-sm gap-2.5",
    lg: "px-9 py-4 text-base gap-3",
  };

  const roundedClass = rounded ? "rounded-full" : "rounded-xl";

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${roundedClass} ${className}`;

  if (href) {
    // External links
    if (href.startsWith("http") || href.startsWith("//")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
