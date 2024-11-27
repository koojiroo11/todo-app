import { formToJSON } from "axios";
import React, { useState } from "react";

interface TaskFormProps {
  onAdd: (task: { title: string; deadline: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && deadline) {
      onAdd({ title, deadline });
      setTitle("");
      setDeadline("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="タスク名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default TaskForm;
