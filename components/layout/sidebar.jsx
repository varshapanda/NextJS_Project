export default function Sidebar() {
  return (
    <aside className="bg-gray-100 w-64 min-h-screen p-4">
      <ul className="space-y-4">
        <li className="font-medium hover:text-blue-600 cursor-pointer">Dashboard</li>
        <li className="font-medium hover:text-blue-600 cursor-pointer">Courses</li>
        <li className="font-medium hover:text-blue-600 cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
}
