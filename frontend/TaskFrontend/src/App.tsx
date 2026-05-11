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


  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/tasks/")

      .then((response) => response.json())

      .then((data) => {

        setTasks(data.data);

        setLoading(false);
      })

      .catch((error) => {

        console.error(error);

        setLoading(false);
      });

  }, []);


  return (

    <div
      style={{
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <h1>
        Task Manager
      </h1>


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

                </div>
              ))
            }

          </div>
        )
      }

    </div>
  );
}