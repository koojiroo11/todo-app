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
    <form onSubmit={handleSubmit} className="task-form">
      <div form-group>
        <input
          type="text"
          placeholder="タスク名"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div form-group>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-save">
        追加
      </button>
    </form>
  );
};

export default TaskForm;
