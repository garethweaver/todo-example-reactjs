import React from 'react'

export default class TodoCounter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>{this.props.remaining} of {this.props.total} remaining</footer>
    )
  }
}
