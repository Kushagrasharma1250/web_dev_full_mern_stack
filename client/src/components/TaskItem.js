import React, { useState } from 'react';
import '../styles/TaskItem.css';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
  });

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(task._id, editData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="task-item editing">
        <input
          type="text"
          name="title"
          value={editData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={editData.description}
          onChange={handleChange}
        />
        <select name="status" value={editData.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className={`task-item ${task.status}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span className={`status ${task.status}`}>{task.status}</span>
      {task.dueDate && (
        <p className="due-date">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      )}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
