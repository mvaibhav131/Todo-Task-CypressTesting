// import React from 'react'

// function TaskList() {
//   return (
//     <div>TaskList</div>
//   )
// }

// export default TaskList

import React from "react";

const TaskItem=props=>
<li>
    <div>
        <input type="checkbox"/>
        <label>
            {' '}
        </label>
    </div>
</li>

const TaskList = props =>
<ul className="todo-list">
    {props.todos.map(todo=><TaskItem/>)}
</ul>

export default TaskList