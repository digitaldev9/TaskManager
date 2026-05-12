import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Task Manager
        </h1>

        <div className="flex gap-4 justify-center">
          <Link to="/tasks">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg transition">
              View Tasks
            </button>
          </Link>

          <Link to="/create-task">
            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg transition">
              Create Task
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}   