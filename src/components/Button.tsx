import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
};

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  size = "md",
  className = "",
  as = "button",
  icon,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:translate-y-[-2px] text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenbutton";

  const variantClasses = {
    primary:
      "bg-greenbutton text-white hover:bg-darkgreen shadow-md hover:shadow-lg",
    secondary:
      "bg-white text-primarygreen border border-primarygreen hover:bg-lightgreen hover:bg-opacity-10 shadow-sm hover:shadow-md",
    outline:
      "bg-transparent text-primarygreen border border-primarygreen hover:bg-lightgreen hover:bg-opacity-10",
  };

  // Classes responsives pour les tailles
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs sm:text-sm sm:px-4 sm:py-2",
    md: "px-4 py-2 text-sm sm:px-5 sm:py-2.5 md:px-6 md:py-3 md:text-base",
    lg: "px-6 py-2.5 text-sm sm:px-7 sm:py-3 md:px-8 md:py-4 md:text-base lg:text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (as === "a") {
    return (
      <a
        className={allClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button
      className={allClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
