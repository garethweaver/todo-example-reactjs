import React from 'react'

import styles from './style.css'

const Todo = ({id, done, children, onTodoChange, onTodoDelete}) => (
  <li className={'todo done-' + done}>
    <label className={'todo__control'}>
      <input className="todo__control__check" type="checkbox" checked={done} onChange={() => onTodoChange(id)}/>
      <span className="todo__control__text">{children}</span>
    </label>
    <button className="todo__delete" type="button" onClick={() => onTodoDelete(id)} />
  </li>
)

export default Todo
