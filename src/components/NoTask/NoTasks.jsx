import NoTask from '../../assets/nostask.png'
import NoTaskStyle from './NoTasks.module.scss'
console.log(NoTask)
const NoTasks = () => {
	return (
		<div className={NoTaskStyle.empty}>
			<img className={NoTaskStyle.empty__picture} src={NoTask} alt='NoTask' />
			<h2 className={NoTaskStyle.empty__title}>Все задачи выполнены!</h2>
		</div>
	)
}

export default NoTasks
