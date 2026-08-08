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
    "inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<string, string> = {
    primary:
      "bg-[#f36801] text-white hover:bg-[#9f4200] focus:ring-[#f36801] shadow-sm hover:shadow",
    secondary:
      "bg-[#f5f3f3] text-[#1b1c1c] border border-[#e1c0b1]/60 hover:bg-[#eae8e7] focus:ring-[#f36801]",
    dark: "bg-[#1b1c1c] text-white hover:bg-[#353535] focus:ring-[#1b1c1c]",
    white:
      "bg-white text-[#1b1c1c] hover:bg-[#f5f3f3] border border-[#e1c0b1]/40 focus:ring-[#f36801] shadow-sm",
    outline:
      "border border-[#f36801] text-[#f36801] hover:bg-[#f36801] hover:text-white focus:ring-[#f36801]",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-6 py-3 text-sm gap-2.5",
    lg: "px-8 py-3.5 text-base gap-3",
  };

  const roundedClass = rounded ? "rounded-full" : "rounded-xl";

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${roundedClass} ${className}`;

  if (href) {
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

