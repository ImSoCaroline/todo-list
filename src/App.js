import React, { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
// import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  // const [image, setImage] = useState("");
  // const [login, setLogin] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetch("https://api.github.com/users/imsocaroline");
  //     const dataJson = await data.json();
  //     const img = await fetch("https://api.thecatapi.com/v1/images/search");
  //     const imgJson = await img.json();

  //     setLogin(dataJson.login);
  //     setImage(imgJson[0].url);
  //   }

  //   fetchData();
  // }, []);

  function handleInputValue(value) {
    // const newTasks = [...tasks, inputValue];
    // setTasks(newTasks);
    // newTasks.push(inputValue); agregar inputValue despues del spread operator es lo mismo que hacer el push
    setTasks([
      ...tasks,
      {
        value,
        completed: false,
      },
    ]); //esto es lo mismo que lo anterior
  }

  function handleCallback(name) {
    const result = tasks.map((task) => {
      if (task.value == name) {
        return {
          value: task.value,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(result);
  }

  return (
    <>
      {/* <Profile items={[image, login]} /> */}
      <AddTasks task={handleInputValue} />
      <Tasks handleCallback={handleCallback} tasks={tasks} />
      <div>
        TAREAS RESUELTAS:
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
