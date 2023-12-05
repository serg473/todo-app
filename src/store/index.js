import { configureStore } from '@reduxjs/toolkit'
import reducerTodo from './reducerTodo'
const store = configureStore({
	reducer: {
		toDo: reducerTodo,
	},
})
export default store
