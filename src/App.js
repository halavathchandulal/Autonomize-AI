import React, {useState} from 'react'
import './App.css'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [counter, setCounter] = useState(1)

  const addTask = (taskName, quantity) => {
    for (let i = 0; i < quantity; i++) {
      setTasks(prevTasks => [
        ...prevTasks,
        {
          id: counter + i,
          name: taskName,
        },
      ])
    }
    setCounter(counter + quantity)
  }

  const editTask = (taskId, newName) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? {...task, name: newName} : task,
      ),
    )
  }

  const deleteTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='heading'>
          <h1>Day Goals!</h1>
        </div>

        <div className='input-task'>
          <input type='text' id='taskInput' placeholder='Write code 3' />
        </div>
        <button
          className='button-1'
          onClick={() => {
            const input = document.getElementById('taskInput')
            const inputValue = input.value.trim()
            if (inputValue) {
              const inputParts = inputValue.split(' ')
              const taskName = inputParts.join(' ')
              const quantity = parseInt(inputParts[inputParts.length - 1]) || 1
              addTask(taskName, quantity)
              input.value = ''
            }
          }}
        >
          Add Todo
        </button>
        <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      </div>
    </div>
  )
}

export default App
