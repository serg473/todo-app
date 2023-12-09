import FormStyle from './FormCreateTask.module.scss'
import {useDispatch} from 'react-redux'
import {addTask} from '../../../api/toDo'
import {addTaskToDo} from '../../../store/reducerTodo'
import {useInput} from "../../../hooks/useInput";

const Form = () => {
    const {value, bind, error, setError, reset} = useInput('')
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        if (!value.length) {
            setError(true)
            return
        } else setError(false)
        fetchRequest()
        reset();
    }
    const fetchRequest = async () => {
        try {
            const fetch = await addTask({name: value, completed: false})
            return dispatch(addTaskToDo(fetch.data))
        } catch (err) {
            throw new Error(err)
        }
    }
    return (
        <div className={FormStyle.form}>
            <form className={FormStyle.form__group}>
                <div className={FormStyle.form__create}>
                    <input placeholder='Введите текст' {...bind}/>
                    <button onClick={handleSubmit} className={FormStyle.form__btn}>
                        Добавить
                    </button>
                </div>
                {error && (
                    <div className={FormStyle.form__error}>
                        <strong>Обязательное поле</strong>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Form
