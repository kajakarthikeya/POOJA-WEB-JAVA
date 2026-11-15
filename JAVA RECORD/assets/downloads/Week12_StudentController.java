// Week 12: Student Controller with Browser GET Endpoints
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    @Autowired
    private StudentRepository repo;

    @GetMapping("/")
    public String home() {
        return "Spring Boot + H2 + JPA Example Running!";
    }

    // Add new student using browser URL query params
    // Example: http://localhost:8080/add?name=Anand&city=Vijayawada
    @GetMapping("/add")
    public String addStudent(@RequestParam String name, @RequestParam String city) {
        repo.save(new Student(name, city));
        return "Student Added Successfully!";
    }

    // View all students using browser URL
    // Example: http://localhost:8080/students
    @GetMapping("/students")
    public List<Student> getStudents() {
        return repo.findAll();
    }
}
