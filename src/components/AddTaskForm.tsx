import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface AddTaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ setTasks }) => {
  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleAddTask = () => {
    if (taskTitle.trim() === '') return; // Validación para evitar tareas vacías
    const newTask: Task = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setTaskTitle('');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTask();
      }}
      style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}
    >
      <TextField
        label="Nueva Tarea"
        variant="outlined"
        fullWidth
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
