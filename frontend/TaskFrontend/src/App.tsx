import { useEffect, useState } from "react";


type Task = {

  id: number;

  title: string;

  description: string;

  completed: boolean;
};


export default function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");


  async function fetchTasks() {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/tasks/"
      );

      const data = await response.json();

      setTasks(data.data || data || []);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  }


  useEffect(() => {

    fetchTasks();

  }, []);


  async function createTask() {

    if (!title.trim()) return;

    try {

      const response = await fetch(
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

      const data = await response.json();

      console.log(data);

      setTitle("");

      setDescription("");

      fetchTasks();

    } catch (error) {

      console.error(error);
    }
  }

  async function toggleTask(
  task: Task
) {

  try {

    await fetch(

      `http://127.0.0.1:8000/api/tasks/${task.id}`,

      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          title: task.title,

          description: task.description,

          completed: !task.completed
        })
      }
    );

    fetchTasks();

  } catch (error) {

    console.error(error);
  }
}

async function deleteTask(
  taskId: number
) {

  try {

    await fetch(

      `http://127.0.0.1:8000/api/tasks/${taskId}`,

      {
        method: "DELETE"
      }
    );

    fetchTasks();

  } catch (error) {

    console.error(error);
  }
}

  return (

    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "700px",
        margin: "0 auto"
      }}
    >

      <h1>
        Task Manager
      </h1>


      <div
        style={{
          marginBottom: "40px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px"
        }}
      >

        <h2>Create Task</h2>


        <input

          type="text"

          placeholder="Task title"

          value={title}

          onChange={(e) => setTitle(e.target.value)}

          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />


        <textarea

          placeholder="Task description"

          value={description}

          onChange={(e) =>
            setDescription(e.target.value)
          }

          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />


        <button

          onClick={createTask}

          style={{
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >

          Create Task

        </button>

      </div>


      {
        loading ? (

          <p>Loading tasks...</p>

        ) : (

          <div>

            {
              tasks.map((task) => (

                <div

                  key={task.id}

                  style={{
                    border: "1px solid #ccc",
                    padding: "16px",
                    marginBottom: "16px",
                    borderRadius: "8px"
                  }}
                >

                  <h3>
                    {task.title}
                  </h3>

                  <p>
                    {task.description}
                  </p>

                  <strong>
                    Status:
                  </strong>

                  {
                    task.completed
                      ? " Completed"
                      : " Pending"
                  }

                  <div
                    style={{
                      marginTop: "12px"
                    }}
                  >

                    <button

                      onClick={() => toggleTask(task)}

                      style={{
                        padding: "8px 14px",
                        cursor: "pointer"
                      }}
                    >

                      {
                        task.completed
                          ? "Mark Pending"
                          : "Mark Complete"
                      }

                    </button>

                    <button

                      onClick={() => deleteTask(task.id)}

                      style={{
                        padding: "8px 14px",
                        cursor: "pointer",
                        marginLeft: "10px"
                      }}
                    >

                      Delete

                    </button>

                  </div>

                </div>
              ))
            }

          </div>
        )
      }

    </div>
  );
}