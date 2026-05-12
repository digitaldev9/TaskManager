import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Hero"

import TaskPage from "./pages/TaskPage";

import CreateTaskPage from "./pages/tasks/CreateTask";

import EditTaskPage from "./pages/tasks/EditTask";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
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
    </BrowserRouter>
  );
}