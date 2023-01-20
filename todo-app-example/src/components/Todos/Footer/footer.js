import { useEffect, useState } from 'react'

function Footer({ todoList, setTodoList, filterStatus, changeFilterStatus }) {

    const [completedCount,setCompletedCount] = useState((todoList.filter((t)=>t.completed==true).length))
    console.log(completedCount)

    useEffect(()=>{
        setCompletedCount((todoList.filter((t)=>t.completed==true).length))
    },[todoList])
    const onClickHandler = (e) => {
        changeFilterStatus(e.target.name)
    }

    const onClearCompletedClick=(e)=>{
        setTodoList(todoList.filter((todo)=>todo.completed==false))
    }
    return (
        <div className="footer">
            <span className="todo-count">
                <strong>{todoList.length}</strong>   items left
            </span>

            <ul className="filters">
                <li>
                    <a name="all" onClick={onClickHandler} className={filterStatus == "all" ? "selected" : ""}>All</a>
                </li>
                <li>
                    <a name="active" onClick={onClickHandler} className={filterStatus == "active" ? "selected" : ""}>Active</a>
                </li>
                <li>
                    <a name="completed" onClick={onClickHandler} className={filterStatus == "completed" ? "selected" : ""}>Completed</a>
                </li>
            </ul>

            <button onClick={onClearCompletedClick} hidden={completedCount===0} className="clear-completed">
                Clear completed
            </button>
        </div>
    )
}

export default Footer