import React from 'react';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
	return (
		<>
		<div style={{"background-color":"#4169E1",}}>
			<TodoList />
		</div>
		<div className='footer'>
			
		</div>
		</>
	);
};

export default App;

