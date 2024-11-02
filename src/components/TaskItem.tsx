import React from 'react';
import { ListItem, Checkbox, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <Typography
        variant="body1"
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          flexGrow: 1,
        }}
      >
        {task.title}
      </Typography>
    </ListItem>
  );
};

export default TaskItem;
