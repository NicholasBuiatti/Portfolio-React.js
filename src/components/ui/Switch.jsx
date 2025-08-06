import PropTypes from "prop-types";

export default function Switch({ checked, onChange, label }) {
  return (
    <label className="flex items-center cursor-pointer gap-2">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="sr-only"
      />
      <span className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ${checked ? 'bg-blue-500' : ''}`}>
        <span className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${checked ? 'translate-x-4' : ''}`}></span>
      </span>
    </label>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};