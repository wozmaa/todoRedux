import { useDispatch, useSelector } from "react-redux"

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    const handleRemove = (id) => {
        dispatch({
            type: "remove",
            payload: {
                id: id
            }
        })
    }

    return todos.map((item, id) => {
        return <div key={id} className="addList">{item.text}<button onClick={() => handleRemove(id)}>X</button></div>
    })
}


export default Todos;