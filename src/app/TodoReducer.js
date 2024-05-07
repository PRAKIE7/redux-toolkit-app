import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState= {
    todos:[
    {
        id:1,
        text:"Sample TODO",
    }
]

}

export const TodoReducer= createSlice({
    name: 'todo',
    initialState,

    reducers: {
        addTodo: (state, action)=>{
            const todo= {id: nanoid(), text: action.payload}
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{state.todos= state.todos.filter((todo)=> todo.id !== action.payload)},
        updateTodo: (state, action)=>{state.todos= state.todos.map((todo)=> todo.id === id ? action.payload : todo)}
    }
})

export const {addTodo, removeTodo, updateTodo}= TodoReducer.actions
export default TodoReducer.reducer