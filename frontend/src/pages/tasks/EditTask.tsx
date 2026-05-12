import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export default function EditTaskPage() {
  const location = useLocation();

  const navigate = useNavigate();

  const task = location.state as Task;

  const [title, setTitle] = useState(
    task.title
  );

  const [description, setDescription] =
    useState(task.description);

  async function updateTask() {
    try {
      await fetch(
        `http://127.0.0.1:8000/api/tasks/${task.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            title,
            description,
            completed: task.completed
          })
        }
      );

      navigate("/tasks");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6">
          Edit Task
        </h1>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 h-32 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={updateTask}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg transition"
        >
          Update Task
        </button>
      </div>
    </div>
  );
}