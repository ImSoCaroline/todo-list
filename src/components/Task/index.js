import React from "react";
import "./task.css";

function Task(task) {
  // const [status, setStatus] = useState(true);

  // function handleToggle() {
  //   // if(status) {
  //   //   setStatus(false)
  //   // } else {
  //   //   setStatus (true)
  //   // } //esto es casi lo mismo
  //   setStatus((status) => !status); //con este nunca va a tomar un valor desactualizado
  // }

  //HACER CALLBACK PARA CAMBIAR DE COLOR
  function handleClick() {
    const { name, handleCallback } = task;
    if (handleCallback) {
      handleCallback(name);
    }
  }

  return (
    <li onClick={handleClick} className={task.completed ? "green" : "black"}>
      {task.name}
    </li>
  );
}

export default Task;
