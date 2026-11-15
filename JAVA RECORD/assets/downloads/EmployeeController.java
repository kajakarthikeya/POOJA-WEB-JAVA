// Week 11: Dual Controllers (REST & Thymeleaf)
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
class EmployeeRestController {
    @Autowired
    private EmployeeRepository repo;

    @GetMapping("/employees")
    public List<Employee> getAll() {
        return repo.findAll();
    }
}

@Controller
class EmployeeViewController {
    @Autowired
    private EmployeeRepository repo;

    @GetMapping("/employees")
    public String employeesPage(Model model) {
        model.addAttribute("employees", repo.findAll());
        return "employees";
    }
}
