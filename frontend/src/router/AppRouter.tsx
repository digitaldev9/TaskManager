import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Hero from "../pages/Hero";

import TaskPage from "../pages/TaskPage";

import CreateTaskPage from "../pages/tasks/CreateTask";

import EditTaskPage from "../pages/tasks/EditTask";
import Navbar from "../components/layout/Navbar"

export default function AppRouter() {
  return (
    <BrowserRouter>
     <div className="min-h-screen bg-gray-100">
        <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Hero />}
        />

        <Route
          path="/tasks"
          element={<TaskPage />}
        />

        <Route
          path="/create-task"
          element={<CreateTaskPage />}
        />

        <Route
          path="/edit-task/:id"
          element={<EditTaskPage />}
        />
      </Routes>
      </div>
    </BrowserRouter>
  );
}