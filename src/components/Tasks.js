import React from 'react'
import Task from './Task'

function Tasks({ tasks, onDelete, onToggle }) {
    return (
        <div>
            {
                tasks.length > 0 ?
                    tasks.map((task, index) =>
                        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
                    ) : <h5><i>Nothing pending...</i></h5>
            }
        </div>
    )
}

export default Tasks