import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskItems, setTaskItems] = useState(TASKS);
  const [currectSelectedButton, setCurrectSelectedButton] = useState("All");
  const [buttonState, setButtonState] = useState({
    All: true,
    Code: false,
    Food: false,
    Money: false,
    Misc: false,
  });

  const changeSelectedButton = (category) => {
    setCurrectSelectedButton(category);
    setButtonState({
      ...buttonState,
      [currectSelectedButton]: false,
      [category]: true,
    });
  };

  const deleteTask = (taskIndex) => {
    const newTasks = taskItems.filter((_, index) => {
      if (index !== taskIndex) {
        return true;
      } else {
        return false;
      }
    });

    setTaskItems(newTasks);
  };

  const addTask = (task) => {
    const newTasks = [...taskItems, task];
    setTaskItems(newTasks);
    console.log(newTasks);
  };

  const filtedTasks = taskItems.filter((task) => {
    if (currectSelectedButton === "All") {
      return true;
    } else {
      return task.category === currectSelectedButton;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        buttonState={buttonState}
        onSelectedButtonChange={changeSelectedButton}
      />
      <NewTaskForm
        categories={CATEGORIES.slice(1)}
        onTaskFormSubmit={addTask}
      />
      <TaskList tasks={filtedTasks} onTaskDelete={deleteTask} />
    </div>
  );
}

export default App;
