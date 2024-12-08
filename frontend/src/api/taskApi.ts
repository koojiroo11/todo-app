import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks";

// タスクの取得
export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// タスクの追加
export const addTask = async (task: { title: string; deadline: string }) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

// タスクの更新
export const updateTask = async (
  id: number,
  updatedTask: { title: string; deadline: string }
) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedTask);
  return response.data;
};

// タスクの削除
export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
