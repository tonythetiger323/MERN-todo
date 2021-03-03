import './List.css'

export default function TodoList({todos, type, toggleStatus, handleDelete, handleEdit}){
  const list = todos.map(todo => {
    const removeX = todo.completed ? <span className="remove-item" onClick={handleDelete}>X</span> : null
    return (
      <div className="list-item">
        <div key={todo.id} onDoubleClick={() => handleEdit(todo.id)}>
          {todo.name}
        </div>
        <span className="remove-item" onClick={() => toggleStatus(todo.id)}>toggleIcon</span>
        {removeX}
      </div>
    )
  })
  return (
    <div className="list-box">
    <h2>{type}</h2>
    {list}
    </div>
  )
}