import { getTodo } from '../../api/toDo'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setToDo } from '../../store/reducerTodo'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'
import NoTasks from '../NoTask/NoTasks'
import Loader from '../Loader/Loader'

const List = () => {
	const [loading, setLoading] = useState(false)
	const toDoList = useSelector(state => state.toDo.toDoList)
	const dispatch = useDispatch()
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const fetch = await getTodo()
				return await dispatch(setToDo(fetch.data))
			} catch (err) {
				throw new Error(err)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [])

	if (loading && toDoList.length === 0) return <Loader />
	return (
		<>
			{!toDoList.length ? (
				<NoTasks />
			) : (
				toDoList.map(toDo => <ListItem key={toDo.id} item={toDo} />)
			)}
		</>
	)
}

export default List
