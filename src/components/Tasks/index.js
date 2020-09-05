import React from "react";
import Task from "../Task";

function Tasks(tasks) {
  function handleCallback(name) {
    tasks.handleCallback(name);
  }

  return (
    <div>
      <ul className="taskContainer">
        {tasks.tasks.map((task, key) => {
          return (
            <Task
              handleCallback={handleCallback}
              name={task.value}
              completed={task.completed}
              key={key}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Tasks;
