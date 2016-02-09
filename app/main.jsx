import React from 'react';
import ReactDOM from 'react-dom';

var data = [
  { text: 'learn react', done: true },
  { text: 'build an app', done: false }
]


var ToDoApp = React.createClass({
  getInitialState: function() {
    return {data: data}
  },

  remaining: function() {
    return this.state.data.reduce(function(count, todo){
      return todo.done ? count : count + 1
    }, 0)
  },

  addNewTodo: function(todo){
    // TODO: ajax to server
    var arr = this.state.data.slice()
    arr.push(todo)
    this.setState({data:arr})
  },

  toggleCheckedTodo: function(todoId){
    var updatedTodos = this.state.data.map(function(todo, i){
      if (i === todoId) todo.done = !todo.done
      return todo;
    })
    this.setState({data:updatedTodos})
  },

  getTodos: function() {
    return this.state.data.map(function(todo, i) {
      return (
        <Todo key={i} id={i} done={todo.done} onChange={this.toggleCheckedTodo}>{todo.text}</Todo>)
    }, this)
  },

  render: function() {
    return (
      <div className="wrap">
        <h1>ReactJS Todo List</h1>
        <TodoForm onTodoSubmit={this.addNewTodo} />
        <ul className="list-unstyled">{this.getTodos()}</ul>
        <TodoCounter remaining={this.remaining()} total={this.state.data.length}></TodoCounter>
      </div>
    )
  }
})


var TodoForm = React.createClass({
  getInitialState: function () {
    return {text: ''}
  },

  handleChange: function (e) {
    this.setState({text: e.currentTarget.value})
  },

  handleSubmit: function(e) {
    e.preventDefault()
    if (this.state.text.length) {
      this.props.onTodoSubmit({text:this.state.text, done:false})
      this.setState({text: ''})
    }
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" size="30" placeholder="add a new task" value={this.state.text} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    )
  }
})

var Todo = React.createClass({
  handleChange: function(e) {
    this.props.onChange(this.props.id)
  },

  render: function() {
    return (
      <li>
        <label className={'done-' + this.props.done}>
          <input type="checkbox" checked={this.props.done} onChange={this.handleChange} />
          {this.props.children}
        </label>
      </li>
    )
  }
})

var TodoCounter = React.createClass({
  render: function() {
    return (
      <footer>{this.props.remaining} of {this.props.total} remaining</footer>
    )
  }
})

ReactDOM.render(<ToDoApp />, document.getElementById('container'))
