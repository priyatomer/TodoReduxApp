export const addTodo=(message)=>{
    return {
        type:"ADD_TODO",
        message
    }
}
export const deleteTodo=(id)=>{
    return {
        type:"DELETE_TODO",
       id
    }
}
export const editTodo=({message,id})=>{
    return {
        type:"EDIT_TODO",
        message,
        id
    }
}