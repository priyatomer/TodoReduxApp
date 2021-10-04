import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';


const TodoList = () => {
    const taskObj=useSelector((state)=>state.todos.data);
    const taskItems=taskObj.map((task)=>{
        return<TodoItem task={task} key={task.id}/>;
    });
    return (
        <div>
    
            {taskItems}
        </div>
    )
}

export default TodoList
