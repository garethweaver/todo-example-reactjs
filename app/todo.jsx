import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super()
    this.state = props
    // this.handleChange = this.handleChange.bind(this);
    // I need to bind something here
  }

  handleChange() {
    // this throws an error
    this.state.onChange(this.state.id)
  }

  render() {
    return (
      <li>
        <label className={'done-' + this.state.done}>
          <input type="checkbox" checked={this.state.done} onChange={this.handleChange} />
          {this.state.children}
        </label>
      </li>
    )
  }
}
