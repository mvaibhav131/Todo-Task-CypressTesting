import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

function TaskApp() {
    const todos=[];
    let [task,setTask]=useState("")
    
   
function onInputChange(e){
    setTask=e.target.value
}
  return (
    
    <>
    <TaskForm value={setTask} onChange={onInputChange} />
    <TaskList todos={todos}/> 
    </>
  )
}

export default TaskApp







// import React,{Component} from 'react'
// import {BrowserRouter as Router} from "react"
// import TaskForm from "./TaskForm"
// import TaskList from "./TaskList"

// export default class TodoApp extends Component {
//     constructor(props){
//         super(props)

//         this.state={
//             todos:[]
//         }
//     }
 
//     render(){
//         return(
//             <Router>
//                 <div className="container-fluid text-center">
//                     <header className="p-2">
//                         <h1>Tasks</h1>
//                         <TaskForm/>
//                     </header>
//                     <section className="mt-2">
//                         <TaskList todos={this.state.todos}/>
//                     </section>
//                 </div>
//             </Router>
//         )
//     }

// }