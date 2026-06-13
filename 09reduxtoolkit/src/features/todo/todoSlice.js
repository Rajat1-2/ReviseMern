import { nanoid , createSlice } from "@reduxjs/toolkit";

// initial state
const initialState={
    todos:[
        {id:1,text:"hello world"},

    ]
}

export const todoSlice=createSlice({
    //slices ke naam hote h , to yaad rakho
    // name ek property h 
    name:'todo',
    initialState, // can write initial state here also 
    reducers:{
        // reducers yhi bnte h and esme aati h property and functions
        // context me hm bs declare kr rhe the definition nhi likh rhe the ab 
        // yha definition bhi likhni h yhi pe
        // yha hmesha do cheeje milegi ek {state}and ek {action} just like usestate and useeffect
        // yaad rkhna in dono words ko
        // state: abhi meri state me kya kya h unka access
        // action : jo mujhe chaiye kuch bhi change krne ke liye like id etc...
        addTodo : (state,action)=>{
              const todo={
                // gives a new id each time 
                id: nanoid(),
                // text kha se lenge to hum use krenge action
                // payload me text bhju ga  , payload is a object kuch bhi a skta h
                text : action.payload.text,
                
              }
            //   merpe state thi usme todos array tha to usme just todo push kr dia no prev no ...
            // reudx beats the context api stuff
              state.todos.push(todo)
        },
        removeTodo : (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },


        // redux style---->>>>>>
        // updateTodo : (state,action)=>{
        //     // ab payload me do chij hongi id and text
        //    const{id,text}=action.payload
        //    const todo = state.todos.find((todo)=> todo.id===id)
        //    if(todo){
        //     todo.text=text
        //    }

        // }


        // react style ------>>>>>>>>>>>>>>
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>
               todo.id===action.payload.id
                ? 
                {
                    ...todo,
                    text: action.payload.text
                }
                :
                todo
            )
        },
    }
})

// ese export nhi krte alag methods h export ke bhi
// saari functionality chaiye hme
export const{addTodo,removeTodo,updateTodo}=todoSlice.actions
// for store sbhi reducer ka pta hona chaiye isko
export default todoSlice.reducer 