import React from 'react'
import Task from './Task' // Correct the path

const TaskList = ({tasks, onDelete}) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} id={task.id} name={task.name} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TaskList
