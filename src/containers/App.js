import React from 'react';
import style from './App.css';
import uuid from 'uuid';

import Title from '../components/Title'; // importing Title from Title.js
import TodoForm from '../components/TodoForm'; // importing TodoForm from TodoForm.js
import TodoList from '../components/TodoList'; // importing TodoList from todoList.js

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ 
                {
                    id: 1,
                    text: 'clean room'
                },
                {
                    id: 2,
                    text: 'wash the dishes'
                },
                {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        };

        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }

    render() {
        return (
            <div className="TodoApp">
                <Title title="To do list" number={this.state.data.length} />
                <TodoForm onAddClick={this.addTodo} />
                <TodoList data={this.state.data} remove={this.removeTodo} />
            </div>
        );
    }
}

export default App;