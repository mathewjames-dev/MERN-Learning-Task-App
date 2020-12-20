import React from 'react';

const ListTask = ({ tasks, deleteTask }) => {
    return (
        <ul>
            {
                tasks && tasks.length > 0 ?
                    (
                        tasks.map(task => {
                            return (
                                <li key={task._id} onClick={() => deleteTask(task._id)}>{task.action}</li>
                            )
                        })
                    )
                    :
                    (
                        <li>No task(s) left.</li>
                    )
            }
        </ul>
    )
}

export default ListTask;