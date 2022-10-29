import React, { useState } from "react";

function InputArea(props) {
  const [list, setList] = useState("");

  function textHandler(event) {
    const { value } = event.target;
    setList(value);
  }

  return (
    <div className="form">
      <input onChange={textHandler} type="text" value={list} />
      <button
        onClick={() => {
          props.onAdd(list);
          setList("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
