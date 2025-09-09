export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">LMS</h1>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Dashboard</a>
          <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Manage Users</a>
          <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Admin Dashboard</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Profile
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Users</h3>
            <p className="text-gray-700">120 registered users</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Courses</h3>
            <p className="text-gray-700">15 active courses</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Reports</h3>
            <p className="text-gray-700">5 pending reports</p>
          </div>
        </div>
      </main>
    </div>
  );
}
