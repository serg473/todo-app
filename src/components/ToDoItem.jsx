import { useDispatch, useSelector } from "react-redux";
import { deleteToDoItem, completeTask } from "../store/Slice/toDo";
import {
  DeleteOutlined,
  FormOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const ToDoItem = (props) => {
  const dispatch = useDispatch();
  const { name, isComplete } = props.toDo;
  return (
    <div className="list__item">
      <div className="list__item-group">
        <div className="list__count">{props.count}.</div>
        <div className="list__name">{name}</div>
      </div>
      <div className="list__item-tools">
        <div onClick={() => dispatch(completeTask(props.toDo))}>
          {!isComplete ? "Выполнить" : <CheckCircleOutlined style={{ color: "#1FB73B" }} />}
        </div>
        <div onClick={() => props.editMode(props.toDo)}>
          <FormOutlined style={{ color: "#1e67c7" }} />
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
