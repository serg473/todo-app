import { useDispatch, useSelector } from "react-redux";
import { searchFilter } from "../../store/Slice/toDo";
import { useState } from "react";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const [valueString, setValue] = useState("");
  const inputValue = (event) => {
    setValue(event.target.value)
    dispatch(searchFilter(valueString))
  };
  return (
    <div className="search__filter">
      <input type="text" value={valueString} onChange={inputValue} />
    </div>
  );
};
export default TodoFilter;
