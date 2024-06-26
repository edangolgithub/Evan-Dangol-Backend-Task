const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/jwt');
const TaskService = require('../services/task.service');

router.get('/', authenticateToken, async (req, res) => {
    try {
        const tasks = await TaskService.getAllTasks();
        console.log(tasks);
        res.json(tasks);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const task = await TaskService.getTaskById(req.params.id);
        if (!task) {
            res.status(404).send('Task not found');
        } else {
            res.json(task);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});


router.post('/', authenticateToken, async (req, res) => {
    try {
        if (!req.body || !req.body.title) {
            return res.status(400).send('Bad Request');
        }

        console.log(req.body);
        const newTask = await TaskService.createTask(req.body);
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


router.put('/:id', authenticateToken, async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request');
        }
        const updatedTask = await TaskService.updateTask(req.params.id, req.body);

        if (!updatedTask) {
            res.status(404).send('Task not found');
        } else {
            res.json(updatedTask);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});


router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const deletedTask = await TaskService.deleteTask(req.params.id);
        console.log("deleted task",deletedTask);
        if (!deletedTask) {
            res.status(404).send('Task not found');
        } else {
            res.status(204).send();
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
