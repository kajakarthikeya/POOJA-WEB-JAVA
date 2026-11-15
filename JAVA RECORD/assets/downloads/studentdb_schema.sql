-- Week 8: Student Management System Database Schema
-- Student: Venkata Sai Karthikeya Kaja (24EU08161)
CREATE DATABASE IF NOT EXISTS studentdb;
USE studentdb;

CREATE TABLE IF NOT EXISTS student (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    marks DECIMAL(5,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    marks DECIMAL(5,2) NOT NULL
);
