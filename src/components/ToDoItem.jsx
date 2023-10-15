import { useDispatch } from "react-redux";
import { deleteToDoItem } from "../store/Slice/toDo";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ToDoItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="list__item">
      <div className="list__item-group">
        <div className="list__count">{props.count}.</div>
        <div className="list__name">{props.toDo.name}</div>
      </div>
      <div className="list__item-tools">
        <div onClick={() => props.editMode(props.toDo)}>
          <EditOutlined style={{ color: "#1e67c7" }} />
        </div>
        <div
          className="list__item-delete"
          onClick={() => dispatch(deleteToDoItem(props.toDo.id))}
        >
          <DeleteOutlined style={{ color: "#ff0000" }} />
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
