import React from "react";
import { Task } from "../typs";

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
  return (
    <li>
      <span>{task.title}</span>
      <span>(期限: {task.deadline})</span>
      <button onClick={() => onEdit(task)}>編集</button>
      <button onClick={() => onDelete(task.id)}>削除</button>
    </li>
  );
};

export default TaskItem;
