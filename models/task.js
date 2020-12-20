// Setup the mongoose package to a variable.
const mongoose = require('mongoose');

// Assigning the Schema interface to the Schema variable.
const Schema = mongoose.Schema;

// Create a Schema for a Task.
const TaskSchema = new Schema({
    action: {
        type: 'String',
        required: [true, 'The task text field is required']
    }
});

// Create a Model for a Task.
const Task = mongoose.model('task', TaskSchema);

module.exports = Task;