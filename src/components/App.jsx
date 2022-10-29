import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [list, setList] = useState("");
  const [add, setAdd] = useState([]);



  function addHandler() {
    setAdd((prevItem) => {
      return [...prevItem, list];
    });

    setList(" ");
  }

  function deleteItem(id) {
    setAdd((prevItems) => {
      return prevItems.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addHandler} value={list} />
      <div>
        <ul>
          {add.map((toDoList, index) => (
            <ToDoItem
              key={index}
              id={index}
              onChecked={deleteItem}
              text={toDoList}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
