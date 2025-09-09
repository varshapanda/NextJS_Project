export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">LMS</h1>
      <div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Profile</button>
      </div>
    </nav>
  );
}
