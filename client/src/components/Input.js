import React, { component, Component } from 'react';
import axios from 'axios';

class Input extends Component {
    state = {
        action: ""
    }

    // Function that is fired when the add new task button is clicked.
    addTask = () => {
        const task = { action: this.state.action };

        if (task.action && task.action.length > 0) {
            axios.post('/api/tasks', task)
                .then(res => {
                    if (res.data) {
                        this.props.getTasks();
                        this.setState({ action: "" });
                    }
                })
                .catch(err => console.log(err));
        } else {
            console.log('Input field is required');
        }
    }


    // Function that is fired when the input field has changed.
    handleChange = (e) => {
        this.setState({
            action: e.target.value
        });
    }

    // Function to render the div.
    render = () => {
        let { action } = this.state;
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={action} />
                <button onClick={this.addTask}>Add New Task</button>
            </div>
            )
    }
}

export default Input;