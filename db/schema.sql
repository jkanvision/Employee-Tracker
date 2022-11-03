DROP DATABASE IF EXISTS human_resources_db;
CREATE DATABASE human_resources_db;

USE human_resources_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30),
  PRIMARY KEY (id)
  ON DELETE SET NULL
);

CREATE TABLE position (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  position_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)

  FOREIGN KEY (position_id)
  REFERENCES position(id)

  FOREIGN KEY (manager_id)
  REFERENCES position(id)
);
