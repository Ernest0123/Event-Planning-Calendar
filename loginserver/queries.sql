-- Restore databases
mysql --host=127.0.0.1 < file.sql

-- To back up one or more databases to a file, we use the mysqldump command
mysqldump --host=127.0.0.1 --databases db_name_1 db_name_2 > file.sql


-- New Admin insertion
INSERT into adminAccount(username, password) VALUES('admin', 'admin123');

-- Select all Admin information
SELECT * FROM adminAccount;

-- Create table for ADMINS
CREATE TABLE adminAccount {
    username VARCHAR(255);
    password VARCHAR(255);
};
-- +-----------+-----------+
-- | username  | password  |
-- +-----------+-----------+
-- | Ernest    | Ernest123 |
-- | admin     | admin123  |
-- | Jennifer  | 123456    |
-- | Dale      | 123456    |
-- | Alexandra | 123456    |
-- +-----------+-----------+



-- Sign up table for USERS
CREATE TABLE users (
    userid INT UNIQUE AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    lastname VARCHAR(128) NOT NULL,
    firstname VARCHAR(128),
    username VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(128),
    PRIMARY KEY (userid)


);

-- Select all Admin information
SELECT * FROM users;

-- DESCRIBE tables
DESCRIBE users;

-- Reset the auto_increment value
ALTER TABLE `users` AUTO_INCREMENT = 1;

-- Change datatype of users
ALTER TABLE users ALTER COLUMN userid INT NOT NULL AUTO_INCREMENT ON DELETE CASCADE
-- +-----------+--------------+------+-----+---------+-------+
-- | Field     | Type         | Null | Key | Default | Extra |
-- +-----------+--------------+------+-----+---------+-------+
-- | id        | int          | NO   | PRI | NULL    |       |
-- | email     | varchar(255) | NO   |     | NULL    |       |
-- | lastname  | varchar(127) | NO   |     | NULL    |       |
-- | firstname | varchar(127) | YES  |     | NULL    |       |
-- | username  | varchar(64)  | NO   |     | NULL    |       |
-- | password  | varchar(127) | YES  |     | NULL    |       |
-- +-----------+--------------+------+-----+---------+-------+

-- Modify users information (email, lastname, firtname, username, password)
UPDATE users SET lastname="John" WHERE firstname="Shit";
UPDATE users SET lastname="John" WHERE id=1;