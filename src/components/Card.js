import React, { useState } from 'react';
import { Card,CardText, CardTitle,CardBody,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditTask from '../modals/EditTask';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';




/**
 * It returns a card with the name, description, and buttons to edit and delete the task
 * @returns A card with the name, description, and buttons to edit and delete the task.
 */
const Cards = ({taskObj, index, deleteTask, updateListArray}) => {
	const [modal, setModal] = useState(false);

	/**
	 * It toggles the modal.
	 */
	const toggle = () => {
		setModal(!modal);
	}

	/**
	 * The function is called when the delete button is clicked. It calls the deleteTask function, which
	 * is passed the index of the task to be deleted
	 */
	const handleDelete = () =>{
		deleteTask(index);
	}

	/**
	 * It takes an object and an index, and then updates the list array with the object at the index
	 * @param obj - The object that you want to update.
	 */
	const updateTask = (obj) => {
		updateListArray(obj, index);
	}
	/* Returning a card with the name, description, and buttons to edit and delete the task. */
	return (
		
			<Card style={{ "background-color" : "azure","border-color" : "blue", "margin": "10px", width: '18rem'}}>
			<CardBody>	
				<CardTitle tag="h5"> <u>{taskObj.Name}</u></CardTitle>
				<div className='description'>
				  <p>{taskObj.Description} </p>
				</div>
				
				  
				<div className= "button-task">
					<Button color ="success" onClick = {() => setModal(true) }><FaEdit/></Button>
					&nbsp;
					<Button color= "danger" onClick  = {handleDelete}><FaTrashAlt/></Button>
					
				<EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
				</div>
			</CardBody>
			</Card> 
			
		
	);
};
export default Cards;