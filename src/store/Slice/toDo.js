import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoArray: [],
  toDoEdit: null,
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
  },
});

// Action creators are generated for each case reducer function
export const {
  addToDoItem,
  deleteToDoItem,
  collectionDataEditing,
  dataEditingToDoItem,
} = toDo.actions;

export default toDo.reducer;
