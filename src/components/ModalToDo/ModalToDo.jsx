import ModalStyle from './ModalToDo.module.scss'

const ModalToDo = ({ children }) => {
	return (
		<div className={ModalStyle.modal}>
			<div className={ModalStyle.modal__box}>
				{children}
			</div>
		</div>
	)
}

export default ModalToDo
