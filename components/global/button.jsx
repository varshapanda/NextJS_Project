export default function Button({ label, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
    >
      {label}
    </button>
  );
}
