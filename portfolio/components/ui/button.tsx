import * as React from "react";

export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium ${className}`} {...props}>
      {children}
    </button>
  );
}
