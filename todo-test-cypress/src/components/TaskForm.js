// import React from 'react'

// function TaskForm() {
//   return (
//     <div>TaskForm</div>
//   )
// }

// export default TaskForm

import React from "react";

onsubmit=(e)=>{
   e.preventDefault()
 }

 const TaskForm= props =>

 
    <form>
     <h1>Tasks</h1>
        <input
        type='text'
        autoFocus
      //   value={props.value}
      //   onChange={props.onChange}
      // onSubmit={onsubmit}
        className="p-2 rounded border task-input"
        placeholder="Add Somethings?"/>
    </form>
 export default TaskForm