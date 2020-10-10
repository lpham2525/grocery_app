USE grocery_db;

INSERT INTO users(username)
VALUES('johndoe'), ('janedoe');

INSERT INTO groceries(name, quantity, userid)
VALUES('milk', 2, 1), ('bread', 3, 1), ('eggs', 4, 1), ('cheese', 5, 1);

INSERT INTO groceries(name, quantity, userid)
VALUES('cupcakes', 2, 2), ('cake', 3, 2), ('cookies', 4, 2), ('brownies', 5, 2);