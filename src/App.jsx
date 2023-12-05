import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ToDoGroup from "./components/ToDoList/ToDoGroup";
import ToDoModal from "./components/ToDoList/ToDoForm";
import { collectionDataEditing } from "./store/Slice/toDo";
import { useDispatch, useSelector } from "react-redux";
import TodoFilter from "./components/ToDoList/SearchFilter";

const App = () => {
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const editData = useSelector((state) => state.toDo.toDoEdit);
  const createMode = () => {
    setEditMode(false);
    setModal(true);
  };
  const EditMode = (value) => {
    if (value) {
      dispatch(collectionDataEditing(value));
      setEditMode(true);
      setModal(true);
    }
  };
  return (
    <div className="to-do">
      <div className="to-do__container">
        <h1>To-Do List</h1>
        <div onClick={createMode} className="list__tools-group">
          <Button title="Добавить" />
        </div>
        <div className="to-do__group">
          <TodoFilter />
          <div className="to-do__list list">
            <ToDoGroup editMode={EditMode} />
          </div>
        </div>
      </div>
      {!editMode && modal && <ToDoModal disableModal={setModal} />}
      {editMode && modal && (
        <ToDoModal editData={editData} disableModal={setModal} />
      )}
    </div>
  );
};

export default App;
