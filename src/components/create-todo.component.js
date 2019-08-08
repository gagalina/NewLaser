import React, { Component } from 'react';
import axios from 'axios';


export default class CreateToDo extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_completed: false
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
        .then(res => console.log(res.data))

        
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{ marginTop: '10px' }}>
                <h3>Create New ToDo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="todo_description">Description:</label>
                        <input type="text"
                            className='form-control'
                            value={this.state.todo_description}
                            name='todo_description'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="todo_responsible">Responsible:</label>
                        <input type="text"
                            className='form-control'
                            value={this.state.todo_responsible}
                            name='todo_responsible'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="todo_completed">Responsible:</label>
                        <input type="checkbox"
                            className='form-check-input'
                            value={this.state.todo_completed}
                            name='todo_completed'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value='Create Todo' className="btn btn-primary"/>
                    </div>
                </form>


            </div>
        )
    }
}