// Week 9: Activity 2 - Student Controller
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.example.studentmanagement.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    @GetMapping("/students")
    public String students() {
        return "Student Management System";
    }
}
