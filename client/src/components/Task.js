import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';
import ListTask from './ListTask';

class Task extends Component {
    // Setting the state for the task component.
    state = {
        tasks: []
    }

    // Function that runs upon mounting.
    componentDidMount() {
        this.getTasks();
    }

    // Function to get the tasks from the backend api. Once we have the tasks we then set the state.
    getTasks = () => {
        axios.get('/api/tasks')
            .then(res => {
                if (res.data) {
                    this.setState({
                        tasks: res.data
                    });
                }
            })
            .catch(err => console.log(err));
    }

    // Function to delete a task from the backend api and then retrieve tasks afterwards.
    deleteTask = (id) => {
        axios.delete(`/api/tasks/${id}`)
            .then(res => {
                if (res.data) {
                    this.getTasks();
                }
            })
            .catch(err => console.log(err));
    }

    // Function to render the HTML and state.
    render() {
        let { tasks } = this.state;

        return (
            <div>
                <h1>My Task List</h1>
                <Input getTasks={this.getTasks} />
                <ListTask tasks={tasks} deleteTask={this.deleteTask} />
               </div>
            )
    }
}

export default Task;