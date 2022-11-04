INSERT INTO department (department_name)
VALUES ("marketing"),
       ("sales"),
       ("distribution"),
       ("billing");

       
INSERT INTO role (title, salary, department_id)
VALUES ("advertising-manager", 80.5, 1),
       ("sales-manager", 64.7, 2),
       ("distribution-manager", 35.0, 3),
       ("collections-manager", 45.2, 4),
       ("copy-writer", 45.9, 1),      
       ("salesperson", 38.3, 2),     
       ("driver", 22.5, 3),
       ("dispatcher", 25.8, 3),
       ("collections-rep", 30.7, 4);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5601, "Deborah", "Gonsalves", 1, NULL),
       (5602, "Gerald", "Henson", 2, NULL),
       (5603, "Lynn", "Ybor", 3, NULL),
       (5604, "Terry", "Babson", 4, NULL),
       (5605, "Charlie", "Dixon", 5, 1),      
       (5606, "Danielle", "Tindel", 6, 2),     
       (5607, "Jack", "Kane", 7, 3),
       (5608, "Marley", "Grossman", 8, 3),
       (5609, "Fred", "Flintstone", 9, 4),
       (5610, "Constantine", "Georgopolis", 5, 1),
       (5611, "Crystal", "Kennedy", 9, 4),
       (5612, "Jane", "Perkins", 6, 2),
       (5613, "Leanne", "Hedey", 7, 3),
       (5614, "Jessica", "Rollins", 7, 3),
       (5615, "Melissa", "Golojuch", 7, 3);  