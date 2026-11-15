// Week 13: Derived and Custom Query Methods Repository Interface
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.example.demo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    // 1. Retrieve all records
    List<Student> findAll();

    // 2. Exact match by name
    List<Student> findByName(String name);

    // 3. Match by firstName
    List<Student> findByFirstName(String firstName);

    // 4. Conjunction: firstName AND lastName
    List<Student> findByFirstNameAndLastName(String firstName, String lastName);

    // 5. Disjunction: firstName OR lastName
    List<Student> findByFirstNameOrLastName(String firstName, String lastName);

    // 6. Ordered retrieval: matching lastName, ordered by firstName ASC
    List<Student> findByLastNameOrderByFirstNameAsc(String lastName);

    // 7. Limited results: First 10 matching records
    List<Student> findFirst10ByLastName(String lastName);

    // 8. Custom native SQL query via @Query
    @Query(value = "SELECT * FROM student WHERE first_name = ?1", nativeQuery = true)
    Student fetchByFirstName(String firstName);
}
