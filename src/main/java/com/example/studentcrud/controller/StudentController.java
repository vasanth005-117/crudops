package com.example.studentcrud.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.studentcrud.model.Student;
import com.example.studentcrud.service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping("/addstudent")
    public Student addStudent(@RequestBody Student s) {
        return service.addStudent(s);
    }

    @GetMapping("/getstudents")
    public List<Student> getStudents() {
        return service.getStudents();
    }

    @PutMapping("/upstudent/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @RequestBody Student s) {
        return service.updateStudent(id, s);
    }

    @DeleteMapping("/delstudent/{id}")
    public void deleteStudent(@PathVariable Long id) {
        service.deleteStudent(id);
    }
}
