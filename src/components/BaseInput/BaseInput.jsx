import InputStyle from './BaseInput.module.scss'

const BaseInput = ({ value, placeholder, callBackEvent, disabled }) => {
	return (
		<input
			value={value}
			disabled={disabled}
			placeholder={placeholder}
			type='text'
			required
			onChange={callBackEvent}
		/>
	)
}

export default BaseInput
