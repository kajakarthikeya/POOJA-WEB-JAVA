// Week 12: Student Repository Interface
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
