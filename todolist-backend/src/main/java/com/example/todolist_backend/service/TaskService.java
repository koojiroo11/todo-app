package com.example.todolist_backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todolist_backend.model.Task;
import com.example.todolist_backend.repository.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    public Task save(Task task) {
        return taskRepository.save(task);
    }

    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }
}
