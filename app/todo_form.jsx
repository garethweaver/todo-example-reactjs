import React from 'react'

export default class TodoForm extends React.Component {

  constructor() {
    super()
    this.state = { text: '' };
  }

  handleChange(e) {
    this.setState({text: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.text.length) {
      this.props.onTodoSubmit({text:this.state.text, done:false})
      this.setState({text: ''})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" size="30" placeholder="add a new task" value={this.state.text} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    )
  }
}
