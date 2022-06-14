CREATE DATABASE createevent ;

USE createevent;

CREATE TABLE Events_Backup(
    event_name VARCHAR(63),
    price VARCHAR(127),
    publicity VARCHAR(255),
    event_method VARCHAR(25)
);

INSERT INTO Events_Backup(event_name,price,publicity,event_method)
VALUES("test","1","private","online");


