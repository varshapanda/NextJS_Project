export default function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      {/* Make label dark */}
      <label className="font-medium text-gray-800">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
