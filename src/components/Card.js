import React from 'react';
import { Card,CardText, CardTitle,CardBody,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Cards = ({taskObj, index}) => {
	console.log(taskObj.Name)
	return (
		
			<Card style={{ "margin": "10px", width: '18rem'}}>
			<CardBody>	
				<CardTitle tag="h5"> {index + 1}-{taskObj.Name}</CardTitle>
				<CardText>{taskObj.Description}</CardText>
				<Button color ="success">Edit</Button>  <Button color= "danger">Delete</Button>
			</CardBody>
			</Card> 
		
	);
};
/Users/anchenni/Desktop/workspace/my-todo-list/src/modals/CreateTask.js
export default Cards;