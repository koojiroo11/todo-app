import React, { useEffect, useState } from "react";
import { Task } from "../typs";
import { fetchTasks, addTask, deleteTask, updateTask } from "../api/taskApi";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import EditTask from "../components/EditTask";
import Modal from "../components/Modal";

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (task: { title: string; deadline: string }) => {
    const newTask = await addTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleSaveTask = async (updatedTask: Task) => {
    const savedTask = await updateTask(updatedTask.id, updatedTask);
    setTasks(
      tasks.map((task) => (task.id === savedTask.id ? savedTask : task))
    );
    setEditingTask(null);
    setModalOpen(false);
  };

  const closeModal = () => {
    setEditingTask(null);
    setModalOpen(false);
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-list">
      <h1>Todoリスト</h1>
      <TaskForm onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {editingTask && <EditTask task={editingTask} onSave={handleSaveTask} />}
      </Modal>
    </div>
  );
};

export default TaskPage;
