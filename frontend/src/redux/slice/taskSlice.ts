import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

import type { Task } from "../../lib/typedef/taskTypes";

type TaskState = {
  tasks: Task[];

  loading: boolean;
};

const initialState: TaskState = {
  tasks: [],

  loading: false
};

const API_URL =
  "http://127.0.0.1:8000/api/tasks";

export const fetchTasks =
  createAsyncThunk(
    "tasks/fetchTasks",

    async () => {
      const response = await fetch(
        `${API_URL}/`
      );

      const data = await response.json();

      return data.data || data || [];
    }
  );

export const createTask =
  createAsyncThunk(
    "tasks/createTask",

    async (task: {
      title: string;

      description: string;
    }) => {
      const response = await fetch(
        `${API_URL}/`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(task)
        }
      );

      return await response.json();
    }
  );

export const updateTask =
  createAsyncThunk(
    "tasks/updateTask",

    async (task: Task) => {
      await fetch(
        `${API_URL}/${task.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(task)
        }
      );

      return task;
    }
  );

export const deleteTask =
  createAsyncThunk(
    "tasks/deleteTask",

    async (taskId: number) => {
      await fetch(
        `${API_URL}/${taskId}`,
        {
          method: "DELETE"
        }
      );

      return taskId;
    }
  );

const taskSlice = createSlice({
  name: "tasks",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(
        fetchTasks.pending,
        (state) => {
          state.loading = true;
        }
      )

      .addCase(
        fetchTasks.fulfilled,
        (state, action) => {
          state.loading = false;

          state.tasks = action.payload;
        }
      )

      .addCase(
        createTask.fulfilled,
        (state, action) => {
          state.tasks.push(action.payload);
        }
      )

      .addCase(
        updateTask.fulfilled,
        (state, action) => {
          const index =
            state.tasks.findIndex(
              (task) =>
                task.id ===
                action.payload.id
            );

          if (index !== -1) {
            state.tasks[index] =
              action.payload;
          }
        }
      )

      .addCase(
        deleteTask.fulfilled,
        (state, action) => {
          state.tasks =
            state.tasks.filter(
              (task) =>
                task.id !== action.payload
            );
        }
      );
  }
});

export default taskSlice.reducer;