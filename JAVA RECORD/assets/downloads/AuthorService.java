// Week 10: Author Service with JdbcTemplate Lifecycle Operations
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.example.demo;

import java.util.Arrays;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;

@Service
public class AuthorService {
    private static final Logger log = LoggerFactory.getLogger(AuthorService.class);

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostConstruct
    public void postConstruct() {
        Author author1 = new Author("ramesh", "it");
        Author author2 = new Author("harshith", "it");
        List<Author> authors = Arrays.asList(author1, author2);

        log.info("Creating tables");
        jdbcTemplate.execute("DROP TABLE author IF EXISTS");
        jdbcTemplate.execute("CREATE TABLE author(first_name varchar(255), last_name varchar(255))");

        authors.forEach(i -> jdbcTemplate.update(
            "INSERT INTO author(first_name, last_name) VALUES (?,?)",
            i.getFirstName(), i.getLastName()
        ));
        log.info("Records Saved");

        log.info("Retrieving records");
        authors = jdbcTemplate.query(
            "SELECT * FROM author",
            (rs, rowNum) -> new Author(rs.getString("first_name"), rs.getString("last_name"))
        );
        authors.forEach(i -> log.info(i.getFirstName() + " " + i.getLastName()));
    }
}
