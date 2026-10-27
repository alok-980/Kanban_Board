import React from "react";

const variants = {
  primary:
    "bg-brand text-white font-semibold border border-brand hover:bg-brand-dark",
  secondary: "bg-white text-ink border border-line-strong hover:bg-gray-50",
  danger:
    "bg-danger text-white font-semibold border border-danger hover:opacity-90",
  ghost: "border border-transparent text-brand font-semibold hover:bg-brand/10",
};

const Button = ({
  variant = "primary",
  small = false,
  type = "button",
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
        small ? "min-h-9 px-3 text-sm" : "min-h-11 px-4"
      } ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
