import React from 'react'
import Todo from './todo'
import TodoForm from './todo_form'
import TodoCounter from './todo_counter'

var data = [
  { text: 'learn react', done: true },
  { text: 'build an app', done: false }
]

export default class TodoApp extends React.Component {

  constructor() {
    super()
    this.state = { data: data }
  }

  remaining() {
    return this.state.data.reduce(function(count, todo){
      return todo.done ? count : count + 1
    }, 0)
  }

  addNewTodo(todo){
    // TODO: ajax to server
    var arr = this.state.data.slice()
    arr.push(todo)
    this.setState({data:arr})
  }

  toggleCheckedTodo(todoId){
    var updatedTodos = this.state.data.map(function(todo, i){
      if (i === todoId) todo.done = !todo.done
      return todo;
    })
    this.setState({data:updatedTodos})
  }

  getTodos() {
    return this.state.data.map(function(todo, i) {
      return (
        <Todo key={i} id={i} done={todo.done} onChange={this.toggleCheckedTodo}>{todo.text}</Todo>)
    }, this)
  }

  render() {
    return (
      <div className="wrap">
        <h1>ReactJS Todo List</h1>
        <TodoForm onTodoSubmit={this.addNewTodo} />
        <ul className="list-unstyled">{this.getTodos()}</ul>
      </div>
    )
  }
  // <TodoCounter remaining={this.remaining()} total={this.state.data.length}></TodoCounter>
}
