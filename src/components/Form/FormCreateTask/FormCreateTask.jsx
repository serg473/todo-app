import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../../api/toDo'
import { addTaskToDo } from '../../../store/reducerTodo'
import BaseInput from '../../BaseInput/BaseInput'
import FormStyle from './FormCreateTask.module.scss'

const Form = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [error, setError] = useState(false)
	const handleChange = e => {
		if (value.length === 0) setError(false)
		setValue(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		if (!value.length) {
			setError(true)
			return
		} else setError(false)
		fetchRequest()
		setValue('')
	}
	const fetchRequest = async () => {
		try {
			const fetch = await addTask({ name: value, completed: false })
			return dispatch(addTaskToDo(fetch.data))
		} catch (err) {
			throw new Error(err)
		}
	}
	return (
		<div className={FormStyle.form}>
			<form className={FormStyle.form__group}>
				<div className={FormStyle.form__create}>
					<BaseInput
						value={value}
						placeholder='Введите текст'
						callBackEvent={handleChange}
						required
					/>
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
