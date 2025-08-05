import React from "react";
import clsx from "clsx";

const Button = ({ children, variant = "primary", className, ...props }) => {
  const baseClasses = "px-6 py-2 cursor-pointer whitespace-nowrap rounded-md transition-all duration-300"
  const variants = {
    primary: "bg-button text-white hover:opacity-90",
    outline: "border border-button text-button hover:bg-button hover:text-white"
  }
  return (
    <button className={clsx(baseClasses, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

export default Button

