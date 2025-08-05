export default function Input({ label, type = "text", value, onChange, name, ...props }) {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
        {...props}
      />
    </div>
  );
}