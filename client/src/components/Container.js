import TodoList from '../components/TodoList'
import './Container.css'

export default function Container({todos, toggleStatus, handleDelete, handleEdit}){
  const completed = todos.filter(todo => todo.completed)
  const incomplete = todos.filter(todo => !todo.completed)
  return (
    <div className="list">
    <TodoList todos={incomplete} type={'Incomplete'} toggleStatus={toggleStatus} handleEdit={handleEdit}/>
    <TodoList 
      todos={completed} 
      type={'Completed'} 
      toggleStatus={toggleStatus} 
      handleDelete={handleDelete} 
      handleEdit={handleEdit}
    />
    </div>
  )
}