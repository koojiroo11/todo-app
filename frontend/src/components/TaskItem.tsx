import React from "react";
import { Task } from "../typs";

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
  return (
    <li className="task-item">
      <span className="task-item-title">{task.title}</span>
      <span className="task-item-deadline">(期限: {task.deadline})</span>
      <div className="task-item-buttons">
        <button onClick={() => onEdit(task)} className="task-item-button edit">
          編集
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="task-item-button delete"
        >
          削除
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
