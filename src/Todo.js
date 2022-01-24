import './Todo.css'
import { useState } from 'react'

export const Todo = () => {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodoList] = useState([])

  const handleAddTodo = () => {
    if (todoText === '') {
      alert('TODOを入力してください')
      return
    }

    setTodoList([...todos, todoText ])
    setTodoText('')
  }

  const handleChaneText = (e) => {
    setTodoText(e.target.value)
  }

  const ShowTodoList = () => {
    if (todos.length === 0) {
      return ''
    }

    const handleDeleteTodo = (paramIndex) => {
      const newTodos = todos.filter((data, index) => { return index !== paramIndex })
      setTodoList([...newTodos])
    }

    const list = todos.map((data, index) => {
      return (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {data}
          <button className='btn btn-danger' onClick={() => handleDeleteTodo(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </li>
      )
    })

    return (
      <ul className="list-group mt-3">
        {list}
      </ul>
    )
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Todo App</span>
        </div>
      </nav>
      <div className="container pt-3 w-75">
        <div className="d-flex">
          <input type="text" className="form-control" value={todoText} onChange={handleChaneText} />
          <button type="button" className="btn btn-primary ms-3" onClick={handleAddTodo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
        </div>
        <ShowTodoList />
      </div>
    </div>
  )
}

export default Todo