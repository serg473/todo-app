import {useState} from 'react'

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    const handleChange = e => {
        if (value.length === 0) setError(false)
        setValue(e.target.value)
    }
    const reset = () => setValue('')
    const bind = {
        value: value,
        onChange: handleChange,
    }
    return {value, bind, error, setError, reset}
}
