import * as images from '../../assets/img/exportPicture';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask, getSingleToDo, updateStatus} from '../../api/toDo'
import {deleteTaskToDo, openCloseModal, setSingleTodo, updateStatusTask} from '../../store/reducerTodo'
import Button from '../Buttons/ButtonsModal'
import ModalToDo from '../ModalToDo/ModalToDo'
import ListStyle from './ListItem.module.scss'

const ListItem = ({item}) => {
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const getSingleTask = async id => {
        dispatch(openCloseModal(true))
        setLoading(true)
        try {
            const fetchApi = await getSingleToDo(id)
            return await dispatch(setSingleTodo(fetchApi.data))
        } catch (error) {
            throw new Error(error)
        } finally {
            setLoading(false)
        }
    }
    const completedTask = async task => {
        if (task.completed) return
        setLoading(true)
        try {
            const fetch = await updateStatus(task.id, {
                name: task.name,
                completed: true,
            })
            return dispatch(updateStatusTask(fetch.data))
        } catch (error) {
            throw new Error(error)
        } finally {
            setLoading(false)
        }
    }
    const deleteTaskSubmit = async id => {
        try {
            const fetch = await deleteTask(id)
            return await dispatch(deleteTaskToDo(id))
        } catch (error) {
            throw new Error(error)
        }
    }
    return (
        <div className={ListStyle.item}>
            <h3
                className={`${ListStyle.item__title} ${
                    item.completed && ListStyle.item__completed
                }`}
            >
                {item.id}. {item.name}
            </h3>
            <div className={ListStyle.item__tools}>
                <button onClick={() => setIsOpen(true)}>
                    <img src={images.deleteTask} alt='Delete'/>
                </button>
                <button onClick={() => getSingleTask(item.id)}>
                    <img src={images.edit} alt='Edit'/>
                </button>
                <span onClick={() => completedTask(item)}>
					{/**Обязательно переписать!!! */}
                    {(loading && <img src={images.complete}/>) || (
                        <img src={item.completed ? images.check : images.progress}/>
                    )}
				</span>
            </div>
            {isOpen && (
                <ModalToDo>
                    <div className={ListStyle.modal__removeTask}>
                        <div className={ListStyle.modal__headIcon}>
                            <img src={images.deleteTask} alt={item.name}/>
                        </div>
                        <div className={ListStyle.modal__body}>
                            <h2>Вы действительно хотите удалить запись?</h2>
                            <h4>Запись №{item.id}</h4>
                        </div>
                        <div className={ListStyle.modal__footer}>
                            <Button
                                onclick={() => setIsOpen(false)}
                                color='#D0DEEB'
                                textColor='#9BA9B9'
                            >
                                Отменить
                            </Button>
                            <Button
                                color='#FB4B4B'
                                onclick={() => deleteTaskSubmit(item.id)}
                                textColor='#fff'
                            >
                                Удалить
                            </Button>
                        </div>
                    </div>
                </ModalToDo>
            )}
        </div>
    )
}

export default ListItem
