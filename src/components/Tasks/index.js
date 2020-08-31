import React, { useState } from 'react';
import Task from '../Task';

function Tasks() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) { //los inputs pasan eventos por defecto
    // setInputValue(e.target.value); //es una opcion
    const { value } = e.target;
    setInputValue(value);
  }

  function handleClick() {
    // const newTasks = [...tasks, inputValue];
    // setTasks(newTasks);
    // newTasks.push(inputValue); agregar inputValue despues del spread operator es lo mismo que hacer el push
    if (inputValue != "") { //para limpiar el input
      setTasks([...tasks, inputValue]); //esto es lo mismo que lo anterior
      setInputValue("");
    }
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>Agregar</button>
      <ul className="taskContainer">
        {tasks && tasks.map((name, key) => {
          return <Task task={name} key={key} />
        })}
      </ul>
    </div>
  )
}

export default Tasks;