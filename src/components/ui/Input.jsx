import PropTypes from "prop-types";

export default function Input({ label, type = "text", value, onChange, name, as, ...props }) {
  const Tag = as === "textarea" ? "textarea" : "input";

  return (
    <div className="w-full mb-5 group">
      {label && <label className="text-gray-600">{label}</label>}
      <Tag
        type={Tag === "input" ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full border rounded-md border-gray-700 py-2.5 px-1"
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
  as: PropTypes.string,
};