import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	toDoList: [],
	editMode: false,
	singleDataTask: {},
}

const toDoSlice = createSlice({
	name: 'toDo',
	initialState,
	reducers: {
		openCloseModal(state, actions) {
			state.editMode = actions.payload ? true : false
		},
		setSingleTodo(state, actions) {
			state.singleDataTask = actions.payload
		},
		setToDo(state, actions) {
			state.toDoList = actions.payload
		},
		addTaskToDo(state, actions) {
			state.toDoList.push(actions.payload)
		},
		deleteTaskToDo(state, actions) {
			state.toDoList = state.toDoList.filter(
				item => item.id !== actions.payload
			)
		},
		updateStatusTask(state, actions) {
			const findIndex = state.toDoList.findIndex(
				item => item.id === actions.payload.id
			)
			state.toDoList[findIndex] = actions.payload
		},
	},
})
export const {
	setToDo,
	setSingleTodo,
	addTaskToDo,
	deleteTaskToDo,
	updateStatusTask,
	openCloseModal,
} = toDoSlice.actions
export default toDoSlice.reducer
