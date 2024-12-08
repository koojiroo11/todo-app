import React, { useState } from "react";
import { Task } from "../typs";

interface EditTaskProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
}

const EditTask: React.FC<EditTaskProps> = ({ task, onSave }) => {
  const [title, setTitle] = useState(task.title);
  const [deadline, setDeadline] = useState(task.deadline);

  const handleSubmit = () => {
    onSave({ ...task, title, deadline });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={handleSubmit}>更新</button>
    </div>
  );
};

export default EditTask;
