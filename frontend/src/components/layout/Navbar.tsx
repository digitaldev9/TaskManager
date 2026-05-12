import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Task Manager
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/tasks"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Tasks
          </Link>

          <Link to="/create-task">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Create Task
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}