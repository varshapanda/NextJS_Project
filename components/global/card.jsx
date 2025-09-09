export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
}
