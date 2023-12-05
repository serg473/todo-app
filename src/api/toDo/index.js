import { http } from '../http'

export const getTodo = () => http.get('toDo')
export const getSingleToDo = id => http.get(`toDo/${id}`)
export const addTask = data => http.post('toDo', data)
export const deleteTask = id => http.delete(`toDo/${id}`)
export const updateStatus = (id, data) => http.put(`toDo/${id}`, data)
export const searchTask = query => http.get(`toDo/?q=${query}`)
