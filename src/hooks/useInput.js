import { useState } from 'react'

export const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue)
	const bind = {
		value: value,
		onChange: e => setValue(e.target.value),
	}
	return { value, bind }
}
