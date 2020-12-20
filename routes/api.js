// Storing express package to the express variable.
const express = require('express');

// Setting up the express router to a variable.
const router = express.Router();

// Getting the task model into a variable.
const Task = require('../models/task');

// Get request to /tasks.
router.get('/tasks', (req, res, next) => {
    // We're going to retrieve all the tasks from the DB. We're only going to expose the id and action columns.
    Task.find({}, 'action')
        .then(data => res.json(data))
        .catch(next);
});

// Post request to /tasks.
router.post('/tasks', (req, res, next) => {
    // Check if there a value for action in the request.
    if (req.body.action) {
        Task.create(req.body)
            .then(data => res.json(data))
            .catch(next);
    } else {
        res.json({
            error: "The input field is empty"
        });
    }
});

// Delete request to /tasks/:id with ID being the id of the task we want to delete.
router.delete('/tasks/:id', (req, res, next) => {
    Task.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next);
});

module.exports = router;
