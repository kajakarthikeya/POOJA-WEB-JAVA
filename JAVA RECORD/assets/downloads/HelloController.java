// Week 9: Activity 1 - Rest Controller
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.example.springmavendemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/")
    public String hello() {
        return "Hello, Maven + Spring Boot!";
    }
}
