import StatisticItem from './Statisticitem'
import { useSelector } from 'react-redux'

const Statistic = () => {
	const taskCompleted = useSelector(state => state.toDo.toDoList)
	return (
		<>
			<StatisticItem
				title='Выполнено заданий'
				data={taskCompleted.filter(item => item.completed)}
			/>
			<StatisticItem
				title='В прогрессе'
				data={taskCompleted.filter(item => !item.completed)}
			/>
		</>
	)
}

export default Statistic
