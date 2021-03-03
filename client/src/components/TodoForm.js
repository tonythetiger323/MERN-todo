export default function TodoForm({handleTodo, handleSubmit, todo}){
  return (
    <div>
      <h2>What do you have to do?</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleTodo} value={todo.name}/>
      </form>
    </div>
  )
}