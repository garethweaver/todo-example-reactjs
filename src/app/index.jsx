import React, {Component} from 'react'

import TodoForm from './components/form'
import Todo from './components/todo'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {todos: props.initialData}
  }

  // Callbacks
  //-----------------------------------------------
  // TODO: ajax to server
  addNewTodo (todo) {
    const todos = this.state.todos.slice()
    todos.push(todo)
    this.setState({todos})
  }

  onTodoChange (todoId) {
    const todos = this.state.todos.map((todo, i) =>
      i === todoId
        ? {...todo, done: !todo.done}
        : todo
    )

    this.setState({todos})
  }

  onTodoDelete (todoId) {
    const todos = this.state.todos.slice()
    todos.splice(todoId, 1)
    this.setState({todos})
  }

  // Render utils
  //-----------------------------------------------
  getTodos () {
    return this.state.todos.map((todo, i) => {
      return (
        <Todo key={i} id={i} done={todo.done}
              onTodoChange={this.onTodoChange.bind(this)}
              onTodoDelete={this.onTodoDelete.bind(this)}>
          {todo.text}
        </Todo>
      )
    })
  }

  getRemaining () {
    return this.state.todos.reduce((ret, todo) => (
      todo.done ? ret : ret + 1
    ), 0)
  }

  getStatus () {
    const remaining = this.getRemaining()
    const total     = this.state.todos.length

    if (total === 0) {
      return 'Add a task!'
    }

    return remaining > 0
      ? `Remaining: ${remaining} of ${total}`
      : 'All done!'
  }

  // Lifecycle methods
  //-----------------------------------------------
  render () {
    return (
      <div className="wrap">
        <h1>ReactJS Todo List</h1>
        <TodoForm onSubmit={this.addNewTodo.bind(this)}/>
        <ul>{this.getTodos()}</ul>
        <footer>{this.getStatus()}</footer>
      </div>
    )
  }
}

export default App
