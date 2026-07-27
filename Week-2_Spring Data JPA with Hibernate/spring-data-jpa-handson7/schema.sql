CREATE DATABASE IF NOT EXISTS ormlearn;
USE ormlearn;

CREATE TABLE IF NOT EXISTS country (
  co_code VARCHAR(5) NOT NULL,
  co_name VARCHAR(255),
  PRIMARY KEY (co_code)
);

INSERT INTO country (co_code, co_name) VALUES ('IN','India') ON DUPLICATE KEY UPDATE co_name = VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('US','United States of America') ON DUPLICATE KEY UPDATE co_name = VALUES(co_name);
