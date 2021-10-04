import React,{useState,useRef} from 'react'
import {useDispatch} from "react-redux"
import { deleteTodo,editTodo } from '../actions';

const TodoItem = ({task}) => {
    const[isUpdate,setIsUpdate]=useState(false);
    const dispatch = useDispatch();
   const textRef = useRef(null);
   
    const editItemToState=(e)=>{
        e.prevent.defaultValue();
        dispatch(editTodo({message:textRef.current.value,id:task.id}));
        setIsUpdate(false);
        textRef.current.value=null;
    }

    const renderForm=()=>{
        return(
            <form onSubmit={editItemToState}>
            <input ref={textRef} type="text" defaultValue={task.task} />
            <button type="submit">Edit Todo</button>
            
        </form>

        )
        
    };

    const renderItem=()=>{
        return(
            <>
        
            {task.task}
            <button onClick={()=>setIsUpdate(true)}>Edit</button>
            <button onClick={()=>dispatch(deleteTodo(task.id))}>Delete</button>

        </>

        )

    }
    return (
        <>
        <div>
        <p></p>
        {isUpdate? renderForm():renderItem()}
        </div>
        </>
        
    )
}

export default TodoItem;
