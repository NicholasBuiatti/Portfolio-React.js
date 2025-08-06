import PropTypes from "prop-types";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  name,
  ...props
}) {
  return (
    <div className="w-full mb-5 group">
      {label && <label className="">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="block py-2.5 px-0 w-full"
        {...props}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};
