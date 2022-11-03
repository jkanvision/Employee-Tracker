INSERT INTO department (id, department_name)
VALUES (1, "marketing"),
       (2, "sales"),
       (3, "distribution"),
       (4, "billing");

       
INSERT INTO position (id, title, salary, department_id)
VALUES (101, "advertising-manager", 80.5, 1),
       (102, "sales-manager", 64.7, 2),
       (103, "distribution-manager", 35.0, 3),
       (104, "collections-manager", 45.2, 4),
       (105, "copy-writer", 45.9, 1),      
       (106, "salesperson", 38.3, 2),     
       (107, "driver", 22.5, 3),
       (108, "dispatcher", 25.8, 3),
       (109, "collections-rep", 30.7, 4);


INSERT INTO employee (id, first_name, last_name, position_id, manager_id)
VALUES (5601, "Deborah", "Gonsalves", 101, NULL),
       (5602, "Gerald", "Henson", 102, NULL),
       (5603, "Lynn", "Ybor", 103, NULL),
       (5604, "Terry", "Babson", 104, NULL),
       (5605, "Charlie", "Dixon", 105, 101),      
       (5606, "Danielle", "Tindel", 106, 102),     
       (5607, "Jack", "Kane", 107, 103),
       (5608, "Marley", "Grossman", 108, 103),
       (5609, "Fred", "Flintstone", 109, 104),
       (5610, "Constantine", "Georgopolis", 105, 101),
       (5611, "Crystal", "Kennedy", 109, 104),
       (5612, "Jane", "Perkins", 106, 102),
       (5613, "Leanne", "Hedey", 107, 103),
       (5614, "Jessica", "Rollins", 107, 103),
       (5615, "Melissa", "Golojuch", 107, 103);      