import React from "react";

const ToDoItem = (props) => {
  // const [style, setStyle] = useState({
  //   textDecoration: "none"
  // });
  // function styleHandler() {
  //   setStyle((prevStyle) => {
  //     if (prevStyle.textDecoration === "none") {
  //       return { textDecoration: "line-through" };
  //     } else {
  //       return { textDecoration: "none" };
  //     }
  //   });
  //  }
  

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text} </li>
    </div>
  );
};

export default ToDoItem;
