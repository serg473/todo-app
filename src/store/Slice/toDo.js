import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoArray: [],
  toDoEdit: null,
  status: [{ All: 0, Active: 1, Complete: 2 }],
};

export const toDo = createSlice({
  name: "counter",
  initialState,
  reducers: {
    collectionDataEditing: (state, action) => {
      state.toDoEdit = action.payload;
    },
    addToDoItem: (state, action) => {
      state.toDoArray.push(action.payload);
    },
    deleteToDoItem: (state, action) => {
      state.toDoArray = state.toDoArray.filter(
        (el) => el.id !== action.payload
      );
    },
    dataEditingToDoItem: (state, action) => {
      const currentIndex = state.toDoArray.findIndex(
        (item) => item.id === action.payload.id
      );
      state.toDoArray[currentIndex] = action.payload;
    },
    completeTask: (state, action) => {
      const findTask = state.toDoArray.findIndex(
        (item) => item.id === action.payload.id
      );
      state.toDoArray[findTask].isComplete = true;
    },
    searchFilter: (state, action) => {
      state.toDoArray = state.toDoArray.filter((item) =>
        item.name.includes(action.payload)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToDoItem,
  deleteToDoItem,
  collectionDataEditing,
  dataEditingToDoItem,
  completeTask,
  searchFilter,
} = toDo.actions;

export default toDo.reducer;
