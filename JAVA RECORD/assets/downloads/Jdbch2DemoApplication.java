// Week 10: Spring Boot Application with In-Memory H2
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Jdbch2DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(Jdbch2DemoApplication.class, args);
        System.out.println("H2 In-Memory Database Application Running on Port 83!");
    }
}
