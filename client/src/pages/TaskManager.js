import React, { useState, useEffect } from 'react';
import { taskService } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import '../styles/TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await taskService.getTasks();
      setTasks(response.data.data);
    } catch (err) {
      setError('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await taskService.createTask(
        taskData.title,
        taskData.description,
        taskData.status,
        taskData.dueDate
      );
      setTasks([response.data.data, ...tasks]);
    } catch (err) {
      setError('Failed to create task');
    }
  };

  const handleUpdateTask = async (id, updateData) => {
    try {
      const response = await taskService.updateTask(id, updateData);
      setTasks(tasks.map(task => task._id === id ? response.data.data : task));
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      {error && <div className="error-message">{error}</div>}
      <TaskForm onAddTask={handleAddTask} />
      {loading ? <p>Loading...</p> : <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />}
    </div>
  );
};

export default TaskManager;
