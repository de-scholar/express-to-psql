export const CREATE_TABLE_USERS = 'CREATE TABLE IF NOT EXISTS users ('
    + 'id SERIAL PRIMARY KEY, '
    + 'fname VARCHAR(255),'
    + 'lname VARCHAR(255),'
    + 'age DATE,'
    + 'email VARCHAR(50),'
    + 'username VARCHAR(50),'
    + 'password VARCHAR(255))';

export const ADD_NEW_USER = 'INSERT INTO users (fname,lname,age,email,username,password)'
    + 'VALUES($1,$2,$3,$4,$5,$6)';

export const GET_ALL_USERS = 'SELECT * FROM users ORDER BY id ASC';

export const GET_USER_BY_ID = 'SELECT * FROM users WHERE id=$1';
