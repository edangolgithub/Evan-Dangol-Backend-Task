//const  createPool  = require('../data/db');
const connection = require('../data/db1')


class TaskService {
    static async getAllTasks() {
        try {
            const tasks = await connection.query('SELECT * FROM tasks');
            return tasks;
        } catch (error) {
            console.error('Error fetching all tasks:', error);
            throw new Error('Could not retrieve tasks');
        }
    }

    static async getTaskById(id) {
        try {
            const tasks = await connection.query('SELECT * FROM tasks WHERE id = ?', [id]);
            return tasks[0] || null;
        } catch (error) {
            console.error(`Error fetching task with ID ${id}:`, error);
            throw new Error('Could not retrieve task');
        }
    }
    static async createTask(task) {
        try {
            const { title, description, status } = task;
            const query = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
            const values = [title, description, status];
            const result = await connection.query(query, values);
            console.log(result);
            return { id: result.insertId, ...task };
        } catch (error) {
            console.error(`Error posting`, error);
            throw new Error('Could not post task');
        }
    }

    static async updateTask(id, task) {
        try {
            console.log('try');
            const result = await connection.query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [task.title, task.description, task.status, id]);
            console.log(result);
            return result.affectedRows === 0 ? null : { id, ...task };
        } catch (error) {
            console.error(`Error updating task`, error);
            throw new Error('Could not update task');
        }

    }

    static async deleteTask(id) {
        try {
            const result = await connection.query('DELETE FROM tasks WHERE id = ?', [id]);
            console.log(result);
            return result.affectedRows === 0 ? null : true;
        } catch (error) {
            console.error(`Error updating task`, error);
            throw new Error('Could not update task');
        }

    }
}

module.exports = TaskService;
