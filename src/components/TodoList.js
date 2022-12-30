import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button} from 'reactstrap';
import CreateTask from '../modals/CreateTask';
import Cards from './Card';
import '../App.css'



const TodoList = () => {
	const [modal, setModal] = useState(false);
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		let arr = localStorage.getItem("taskList");
		
		if (arr){
			let obj = JSON.parse(arr);
			setTaskList(obj);
		}
	}, []);
	
	const toggle = () => setModal(!modal);
	console.log(modal, toggle);

	const saveTask = (taskObj) => {
		let tempList = taskList;
		tempList.push(taskObj);
		localStorage.setItem("taskList", JSON.stringify(tempList));
		setTaskList(taskList);
		setModal(false);

	}

	const deleteTask = (index) =>{
		let tempList = taskList;
		tempList.splice(index, 1);
		localStorage.setItem("taskList", JSON.stringify(tempList));
		setTaskList(tempList);
		window.location.reload();
	}

	const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
	
	return (
		<>
		<div style={{"text-align": "center"}}>
			<div className='header'>
				<h1 className='h1'>My Todo List</h1>
				<Button className="button-9" onClick={() => setModal(true)}> Create Task </Button>
			</div>
			

				<div class="MyCards">
					{taskList && taskList.map((obj, index) => <Cards taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/>)}
				</div>
					<CreateTask toggle = {toggle} modal = {modal}  save = {saveTask}/>
			
			
		</div>
		</>
	)
};

export default TodoList;