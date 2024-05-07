import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/TodoReducer'

function AddTodo() {
    const [text, setText] = useState("")
    const dispatch= useDispatch()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo(text))
        console.log(text);
        setText("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-x-3 mt-12">
                <input type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder='Enter Todo'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
            </form>
        </div>
    )
}

export default AddTodo
