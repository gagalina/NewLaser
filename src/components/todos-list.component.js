import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td><Link to={`/edit/${props.todo._id}`}>Edit</Link></td>
    </tr>
)

export default class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.getTodos = this.getTodos.bind(this);

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
       this.getTodos();
    }

    componentDidUpdate(){
        this.getTodos();
    }

    getTodos(){
        axios.get('http://localhost:4000/todos/')
        .then(res => {
            this.setState({ todos: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    toDoList() {
        return this.state.todos.map((currentTodo) => {
            return <Todo todo={currentTodo} key={currentTodo._id} />
        })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.toDoList()}
                    </tbody>

                </table>
            </div>
        )
    }
}