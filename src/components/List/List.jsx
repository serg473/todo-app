import {useDispatch, useSelector} from 'react-redux'
import {setToDo} from '../../store/reducerTodo'
import ListItem from './ListItem'
import NoTasks from '../NoTask/NoTasks'
import Loader from '../Loader/Loader'
import {useFetch} from "../../hooks/useFetch";
import {useEffect} from "react";

const List = () => {
    const {data, loading} = useFetch('http://localhost:3001/toDo')
    const toDo = useSelector(state => state.toDo.toDoList)
    const dispatch = useDispatch()
    useEffect(() => {
        if (data.length > 0) dispatch(setToDo(data))
    }, [data])
    if (loading && data.length === 0) return <Loader/>

    return (
        <>
            <div>
                {!toDo.length ? (
                    <NoTasks />
                ) : (
                    toDo.map(toDo => <ListItem key={toDo.id} item={toDo} />)
                )}

            </div>
        </>
    )
}

export default List
