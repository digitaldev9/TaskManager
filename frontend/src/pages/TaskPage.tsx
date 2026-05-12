import { useEffect } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import type {
  RootState,
  AppDispatch
} from "../redux/store";

import {
  fetchTasks,
  updateTask,
  deleteTask
} from "../redux/slice/taskSlice";

import type { Task } from "../lib/typedef/taskTypes";

export default function TaskPage() {
  const navigate = useNavigate();

  const dispatch =
    useDispatch<AppDispatch>();

  const { tasks, loading } =
    useSelector(
      (state: RootState) => state.tasks
    );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  function toggleTask(task: Task) {
    dispatch(
      updateTask({
        ...task,

        completed: !task.completed
      })
    );
  }

  function handleDelete(
    taskId: number
  ) {
    dispatch(deleteTask(taskId));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">
            Tasks
          </h1>

          <Link to="/create-task">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg">
              Create Task
            </button>
          </Link>
        </div>

        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          <div className="space-y-5">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white shadow-md rounded-xl p-6"
              >
                <h2 className="text-2xl font-semibold">
                  {task.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {task.description}
                </p>

                <p className="mt-4">
                  <span className="font-semibold">
                    Status:
                  </span>{" "}
                  {task.completed
                    ? "Completed"
                    : "Pending"}
                </p>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() =>
                      toggleTask(task)
                    }
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                  >
                    {task.completed
                      ? "Mark Pending"
                      : "Mark Complete"}
                  </button>

                  <button
                    onClick={() =>
                      navigate(
                        `/edit-task/${task.id}`,
                        {
                          state: task
                        }
                      )
                    }
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(task.id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}