import React, { useState } from 'react';

const AddTasks = (task) => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) { //los inputs pasan eventos por defecto
    // setInputValue(e.target.value); //es una opcion
    const { value } = e.target;
    setInputValue(value);
  }

  function handleClick() {
    if (inputValue && task.task) {
      //para limpiar el input
      task.task(inputValue);
      setInputValue("");
    }
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>Agregar</button>
    </>
  )
}

export default AddTasks;