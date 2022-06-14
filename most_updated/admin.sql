CREATE DATABASE adminpage;

USE adminpage;

CREATE TABLE edit_event (
    event_name VARCHAR(63),
    event_overview VARCHAR(2000),
    event_date VARCHAR(100),
    event_time VARCHAR(50),
    event_location VARCHAR(1000),
    price VARCHAR(50),
);

CREATE TABLE edit_event_2 (
    event_overview VARCHAR(2000),
    event_date VARCHAR(100),
    event_time VARCHAR(50),
    event_location VARCHAR(1000),
    price VARCHAR(50)
);

INSERT INTO edit_event(event_name, event_overview, event_date, event_time, event_location, price)
VALUES ("Yoga Class", "abcdef ghijk", "05/12/2022", "14.00", "123 North Terrace, Adelaide SA 5000", "5.00");

INSERT INTO edit_event_2(event_overview, event_date, event_time, event_location, price)
VALUES ( "abcdef ghijk", "05/12/2022", "14.00", "123 North Terrace, Adelaide SA 5000", "5.00");