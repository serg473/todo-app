import ToDoItem from "./ToDoItem";
import NoData from "../NoData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ToDoGroup = (props) => {
  const todo = useSelector((state) => state.toDo.toDoArray);
  return (
    <div className="list__group-item">
      {todo.length !== 0 ? (
        todo.map((toDo, toDoIndex) => (
          <ToDoItem editMode={props.editMode} toDo={toDo} count={toDoIndex + 1} key={`ToDo__${toDoIndex}`} />
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default ToDoGroup;
