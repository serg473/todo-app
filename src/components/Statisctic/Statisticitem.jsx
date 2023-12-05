import StatisticStyle from './StatistisItem.module.scss'

const StatisticItem = ({ title, data }) => {
	return (
		<div className={StatisticStyle.progress}>
			{title}: {data && data.length}
		</div>
	)
}

export default StatisticItem
