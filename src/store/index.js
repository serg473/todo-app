import { configureStore } from '@reduxjs/toolkit'
import toDo from './Slice/toDo'

export const store = configureStore({
  reducer: {
    toDo: toDo
  },
})