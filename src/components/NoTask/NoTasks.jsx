import NoTask from '../../assets/img/nostask.png'
import NoTaskStyle from './NoTasks.module.scss'
const NoTasks = () => {
	return (
		<div className={NoTaskStyle.empty}>
			<img className={NoTaskStyle.empty__picture} src={NoTask} alt='NoTask' />
			<h2 className={NoTaskStyle.empty__title}>Задач нету!</h2>
		</div>
	)
}

export default NoTasks
