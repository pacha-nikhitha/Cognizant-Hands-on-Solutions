CREATE DATABASE IF NOT EXISTS ormlearn;
USE ormlearn;

CREATE TABLE IF NOT EXISTS country (
  co_code VARCHAR(5) NOT NULL,
  co_name VARCHAR(255),
  PRIMARY KEY (co_code)
);

-- sample rows that include names matching 'ou' and starting with Z
INSERT INTO country (co_code, co_name) VALUES ('BV','Bouvet Island') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('DJ','Djibouti') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('GP','Guadeloupe') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('GS','South Georgia and the South Sandwich Islands') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('LU','Luxembourg') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('SS','South Sudan') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('TF','French Southern Territories') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('UM','United States Minor Outlying Islands') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('ZA','South Africa') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('ZM','Zambia') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
INSERT INTO country (co_code, co_name) VALUES ('ZW','Zimbabwe') ON DUPLICATE KEY UPDATE co_name=VALUES(co_name);
