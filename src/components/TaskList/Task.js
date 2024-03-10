import React, {useState} from 'react'
import './index.css'

const Task = ({id, name, onDelete, onEdit}) => {
  const [editing, setEditing] = useState(false)
  const [newName, setNewName] = useState(name)
  const [updateCount, setUpdateCount] = useState(0)
  const [lastUpdate, setLastUpdate] = useState(null)

  const handleEdit = () => {
    setEditing(true)
  }

  const handleSave = () => {
    if (newName !== name) {
      onEdit(id, newName)
      setUpdateCount(updateCount + 1)
      setLastUpdate(new Date())
    }
    setEditing(false)
  }

  return (
    <div className='input-list'>
      <li>
        {editing ? (
          <>
            <input
              type='text'
              value={newName}
              onChange={e => setNewName(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <span>{name}</span>
            <span className='count'>
              Count: {id} (Updated {updateCount} Times) - Last Update:{' '}
              {lastUpdate ? lastUpdate.toLocaleString() : 'Never'}
            </span>
            <span className='edit' onClick={handleEdit}>
              ✏️
            </span>
            <span className='delete' onClick={() => onDelete(id)}>
              x
            </span>
          </>
        )}
      </li>
    </div>
  )
}

export default Task
