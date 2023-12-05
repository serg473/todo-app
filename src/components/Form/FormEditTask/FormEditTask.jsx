import Switch from '@mui/material/Switch'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../../../api/toDo'
import { openCloseModal, updateStatusTask } from '../../../store/reducerTodo'
import FormStyle from './FormEditTask.module.scss'

const FormEditTask = () => {
	const single = useSelector(state => state.toDo.singleDataTask)
	const [checked, setChecked] = useState(false)
	const [name, setName] = useState('')
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()
	useEffect(() => {
		setChecked(single.completed || false)
		setName(single.name || '')
	}, [single])
	const handleSubmit = async () => {
		setLoading(true)
		try {
			const fetch = await updateStatus(single.id, {
				name: name,
				completed: checked,
			})
			return dispatch(updateStatusTask(fetch.data))
		} catch (error) {
			throw new Error(error)
		} finally {
			dispatch(openCloseModal(false))
			setLoading(false)
		}
	}
	if (loading) return <strong>Обновление данных...</strong>
	return (
		<div className={FormStyle.edit}>
			<form className={FormStyle.edit__form}>
				<div className={FormStyle.edit__field}>
					<span>Название</span>
					<input
						value={name}
						type='text'
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className={FormStyle.edit__field}>
					<span>Статус задания</span>
					<div>
						<Switch
							checked={checked}
							onChange={() => setChecked(checked => !checked)}
						/>
					</div>
				</div>
			</form>
			<div className={FormStyle.edit__groupSubmit}>
				<button onClick={handleSubmit}>Сохранить</button>
				<button onClick={() => dispatch(openCloseModal(false))}>Закрыть</button>
			</div>
		</div>
	)
}

export default FormEditTask
