import React, {useState} from 'react'
import './assets/Montserrat/Montserrat.css'
import FormCreateTask from './components/Form/FormCreateTask/FormCreateTask'
import Statistic from './components/Statisctic/Statistic'
import AppStyle from './App.module.scss'
import List from './components/List/List'
import {useDispatch, useSelector} from 'react-redux'
import {searchTask} from './api/toDo'
import {setToDo} from './store/reducerTodo'
import ModalToDo from './components/ModalToDo/ModalToDo'
import FormEditTask from './components/Form/FormEditTask/FormEditTask'

const App = () => {
    const [empty, setEmpty] = useState(false)
    const dispatch = useDispatch()
    const list = useSelector(state => state.toDo.toDoList)
    const editMode = useSelector(state => state.toDo.editMode)
    const searchTaskFetch = async e => {
        try {
            const fetchApi = await searchTask(e.target.value)
            return dispatch(setToDo(fetchApi.data))
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <div className='container'>
            <h1>My To-Do List</h1>
            <main className={AppStyle.main__content}>
                <FormCreateTask/>
                <div className={AppStyle.main__statistic}>
                    <Statistic/>
                </div>
                <div className={AppStyle.main__search}>
                    <input placeholder='Поисковой запрос' onChange={searchTaskFetch}/>
                </div>
                <div className={AppStyle.main__list}>
                    <List/>
                </div>
            </main>

            {editMode && (
                <ModalToDo>
                    <h2
                        className={AppStyle.main__formTitle}
                    >
                        Форма редактирования
                    </h2>
                    <div className={AppStyle.main__form}>
                        <FormEditTask/>
                    </div>
                </ModalToDo>
            )}
        </div>
    )
}

export default App
