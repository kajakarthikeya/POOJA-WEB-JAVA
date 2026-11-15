-- Week 6: Student Table Schema
-- Student: Venkata Sai Karthikeya Kaja (24EU08161)
CREATE DATABASE IF NOT EXISTS it;
USE it;

CREATE TABLE IF NOT EXISTS Student (
    id INT PRIMARY KEY,
    name VARCHAR(30),
    course VARCHAR(30),
    marks INT
);
