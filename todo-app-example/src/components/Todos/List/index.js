import { useEffect, useState } from 'react'
import Footer from '../Footer/footer';
import "../styles.css"



function List() {
	const [newTodo, setNewTodo] = useState("");
	const [todoList, setTodoList] = useState([
		{
			name: "Learn JavaScript",
			completed: true
		},
		{
			name: "Learn React",
			completed: false
		},
		{
			name: "Have a life",
			completed: false
		}]);

	const [filteredList, setFilteredList] = useState(todoList)
	const [filterStatus, setFilterStatus] = useState("all")

	const onChangeInput = (e) => {
		setNewTodo(e.target.value);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		setTodoList([...todoList, { name: newTodo, completed: false }]);
		setNewTodo("");
	}

	const onCompleteHandler = (e) => {

		todoList[e.target.name].completed = !todoList[e.target.name].completed;
		setTodoList([...todoList]);



	}
	const onDeleteHandler = (e) => {
		setTodoList(todoList.filter((todo) => todo.name !== todoList[e.target.name].name))
	}

	useEffect(() => {
		if (filterStatus === "all"){
			setFilteredList(todoList)
		}
		else {
			setFilteredList(todoList.filter((todo) => todo.completed === (filterStatus === "completed" ? true : false)));
		}
	}, [filterStatus,todoList]);

	return (
		<div >
			<header className="header">
				<h1>todos</h1>
				<form onSubmit={onSubmit}>
					<input className="new-todo" value={newTodo} placeholder="What needs to be done?" onChange={onChangeInput} />
				</form>
			</header>
			<section className='main'>

				<input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">
					Mark all as complete
				</label>
				<ul className='todo-list'>
					{filteredList.map((todo, i) => (

						<li key={i} className={todo.completed ? "completed" : ""}>

							<div className='view'>
								<input name={i} defaultChecked={todo.completed} onClick={onCompleteHandler} className='toggle' type="checkbox" ></input>
								<label>{todo.name}  </label>
								<button name={i} className="destroy" onClick={onDeleteHandler}></button>

							</div>
						</li>
					))}

				</ul>
			</section>
			{(todoList.length>0)?<Footer htmlIf todoList={todoList} 
				setTodoList={setTodoList}
				filterStatus={filterStatus} 
				changeFilterStatus={setFilterStatus} /> :""}
			
		</div>

	)
}

export default List