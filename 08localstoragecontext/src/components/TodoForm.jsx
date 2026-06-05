import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo,settodo]=useState("")
    // add todo ki funationlity to app.jsx pe h but context pe bhi to h useTodo
    const{addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todo) return
        // use object chaiye na ki koi string , date vhi pe de rhe
        addTodo({todo:todo,completed:false})
        settodo("")
    }

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e)=>settodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;