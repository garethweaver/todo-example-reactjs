import React, {Component, PropTypes} from 'react'

import './style.css'

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {text: ''}
  }

  handleChange (e) {
    this.setState({text: e.currentTarget.value})
  }

  handleSubmit (e) {
    e.preventDefault()

    if (this.state.text.length) {
      this.props.onSubmit({text: this.state.text, done: false})
      this.setState({text: ''})
    }
  }

  render () {
    return (
      <form className="todo__form" onSubmit={this.handleSubmit.bind(this)}>
        <input className="todo__form__input"
               placeholder="add a new task"
               value={this.state.text}
               onChange={this.handleChange.bind(this)} />
        <button className="todo__form__submitbtn">Add</button>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form
