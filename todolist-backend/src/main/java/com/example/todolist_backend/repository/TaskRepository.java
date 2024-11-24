package com.example.todolist_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todolist_backend.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
