import React from "react";
import { Task } from "../typs";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <li>
      <span>{task.title}</span>
      <span>(期限: {task.deadline})</span>
      <button onClick={() => onDelete(task.id)}>削除</button>
    </li>
  );
};

export default TaskItem;
