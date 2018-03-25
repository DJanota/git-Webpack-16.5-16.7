import React from 'react';
import style from './Todo.css'; 

const Todo = ({ todo, remove }) => {
    return (
        <li>
            {todo.text}
            <button type="button" onClick={(e) => remove(todo.id)}>X</button>
        </li>
    );
}
export default Todo;