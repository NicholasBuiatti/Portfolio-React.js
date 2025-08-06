import PropTypes from "prop-types";
// import clsx from "clsx";
//installare con npm install clsx (comodo per la concatenazione delle classi con quelle già esistenti)
//altrimenti uso la concatenazione con il `` e le template literals

export default function Button({
  text,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base = "px-4 py-2 rounded-lg font-semibold transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-800 text-black hover:bg-gray-600 text-white",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };
  const sizes = {
    sm: "text-sm py-1 px-2",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
  };

  return (
    <button
      //   className={clsx(base, variants[variant], sizes[size], className)}
      className={`${base} ${variants[variant]} ${sizes[size]}${
        className ? ` ${className}` : ""
      }`}
      {...props}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};
