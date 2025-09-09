export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">LMS</h1>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Dashboard</a>
          <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Courses</a>
          <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Student Dashboard</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Profile
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Courses</h3>
            <p className="text-gray-700">You are enrolled in 3 courses</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Progress</h3>
            <p className="text-gray-700">75% Completed</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            <p className="text-gray-700">2 new messages</p>
          </div>
        </div>
      </main>
    </div>
  );
}
