import React,{useState} from 'react'
 import {useDispatch} from "react-redux"
 import { addTodo } from '../actions';
import cuid from 'cuid'


const AddTodo = () => {
    const[tasks,setTasks]=useState("");
    const dispatch=useDispatch();

    const handleInputChange=(e)=>{
        setTasks(e.target.value);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTasks(dispatch(addTodo({task:tasks,id:cuid()})));
       e.target.userInput.value="";//for clear the input after adding
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

<input type="text" name="userInput" onChange={handleInputChange} />
<button type="submit">Add</button>


            </form>
        </div>
    )
}

export default AddTodo
