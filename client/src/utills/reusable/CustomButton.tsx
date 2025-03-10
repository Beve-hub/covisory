import React from "react";
import clsx from "clsx"; // Optional: for better class name handling

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-[#121212] hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center rounded-lg font-medium transition-all",
        variants[variant],
        sizes[size],
        { "opacity-50 cursor-not-allowed": isLoading },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
