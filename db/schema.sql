DROP DATABASE IF EXISTS human_resources_db;
CREATE DATABASE human_resources_db;

USE human_resources_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    INDEX(department_id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON UPDATE CASCADE
);

CREATE TABLE employee (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    INDEX(role_id),
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON UPDATE CASCADE
);
