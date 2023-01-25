import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({ task, onDelete, onToggle }) {
    return (
        <div className={`task ${task.reminder ? 'task-reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes
                style={{ color: 'red' }}
                onClick={() => onDelete(task.id)}
            />
            </h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task