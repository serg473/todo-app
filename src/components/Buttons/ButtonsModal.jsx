const ButtonsModal = props => {
	const buttonStyle = {
		backgroundColor: props.color,
		color: props.textColor,
		border: 'none',
		borderRadius: '4px',
		padding: '13px 46px',
		textAlign: 'center',
		textDecoration: 'none',
		display: 'inline-block',
		fontSize: '14px',
		fontWeight: 800,
		margin: '4px 2px',
		cursor: 'pointer',
	}
	return (
		<button onClick={props.onclick} style={buttonStyle}>
			{props.children}
		</button>
	)
}

export default ButtonsModal
