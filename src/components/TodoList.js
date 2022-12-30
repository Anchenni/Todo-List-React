import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button} from 'reactstrap';
import CreateTask from '../modals/CreateTask';
import Cards from './Card';
import { CardGroup } from 'reactstrap';


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

	return (
		<>
		<div style={{"text-align": "center"}}>
			<div className='text-center' >
				<h1>My Todo List</h1>
				<Button color="primary" onClick={() => setModal(true)}> Create Task </Button>
			</div>
			<div style = {{"margin": "30px"}}>
			<CardGroup >
			{taskList && taskList.map((obj, index) => <Cards taskObj = {obj} index = {index}/>)}
			</CardGroup>	
			</div>
			<CreateTask toggle = {toggle} modal = {modal}  save = {saveTask}/>
			</div>
		</>
	)
};

export default TodoList;