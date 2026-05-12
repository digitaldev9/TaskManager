import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function CreateTaskPage() {
  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const navigate = useNavigate();

  async function createTask() {
    if (!title.trim()) return;

    try {
      await fetch(
        "http://127.0.0.1:8000/api/tasks/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            title,
            description
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
          Create Task
        </h1>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 h-32 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={createTask}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition"
        >
          Create Task
        </button>
      </div>
    </div>
  );
}