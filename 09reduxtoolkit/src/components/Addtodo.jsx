import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo} from '../features/todo/todoSlice';


function Addtodo() {
    const [input, setInput] = useState('') 
    const dispatch = useDispatch()

    const add = (e ) => {
        e.preventDefault()
        // dipatch ek reducer ko use krte hue store me change krta h
        dispatch(addTodo({
            text:input,
        }))
        setInput('') // clean the input field
    }


  return (
        <form  onSubmit={add} className="flex justify-center items-center">
            <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Write Todo..."
                className="w-[33%]  border border-black/10 rounded-l-lg text-2xl outline-none duration-150 bg-white/20 p-[10px]"
            />
            <button type="submit" className="rounded-r-lg p-[10px]  bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default Addtodo