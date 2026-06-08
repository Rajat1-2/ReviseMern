import { createContext , useContext } from "react";
export const TodoContext= createContext({
                    //  default values
                    // saare todo ki id se baat krni h 
                    // array of objects => todos
                    todos:[
                        {
                            id:1,
                            todo:"todo msg",
                            completed:false,

                        },
                    ],
                    // functionaity me definition nhi likhte bs unke naam likhte h
                    // functionlity app.jsx me likhege
                    addTodo: (todo)=> {},
                    updateTodo : (id,todo)=> {},
                    deleteTodo : (id)=> {},
                    toggleTodo : (id)=> {},


})
// wrap the main file
export const TodoContextProvider= TodoContext.Provider

// hook
// jo hm hr file me usecontext() hook call kr ehw the use ek jagah kr rhe bs
export const useTodo= () =>{
      return useContext(TodoContext)
}