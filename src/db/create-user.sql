SELECT * FROM mysql.user;

CREATE USER techprism_api IDENTIFIED BY '1234567890';

-- SHOW GRANTS FOR techprism_api;

GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE
ON sql_techprism.*
TO techprism_api;
