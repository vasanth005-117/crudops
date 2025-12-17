package com.example.studentcrud.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.studentcrud.model.Student;
import com.example.studentcrud.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public Student addStudent(Student s) {
        return repo.save(s);
    }

    public List<Student> getStudents() {
        return repo.findAll();
    }

    public Student updateStudent(Long id, Student s) {
        s.setId(id);
        return repo.save(s);
    }

    public void deleteStudent(Long id) {
        repo.deleteById(id);
    }
}
