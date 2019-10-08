import connect from '../settings/connect-to-db';
import { validateUser } from '../../../../helper-functions/functions';
import {
  CREATE_TABLE_USERS, GET_ALL_USERS, GET_USER_BY_ID, ADD_NEW_USER, UPDATE_USER,
} from '../settings/queries';

export const createTableUsers = (request, response) => {
  connect.query(CREATE_TABLE_USERS, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`table users created successfully ${results}`);
  });
};

export const addOrUpdateUser = (request, response) => {
  const {
    fname, lname, age, email, username, password,
  } = request.body;
  const { id } = request.params;
  const isUserValid = validateUser(fname, email, username, password);

  switch (id) {
    /** IF THERE IS NO ID IN REQUEST BODY */
    case undefined:
      if (isUserValid) {
        connect.query(ADD_NEW_USER, [fname, lname, new Date(age), email, username, password],
          (error) => {
            if (error) {
              throw error;
            }
            response.send(`The user ${username} is inserted successfully!`);
          });
      } else {
        response.status(400).send('Failed to add new user, check if family name,'
          + ' or email, or username or password is present');
      }
      break;
    /** IF IN THE REQUEST THERE IS AN ID, THEN UPDATE THAT USER */
    default:
      connect.query(UPDATE_USER, [fname, lname, new Date(age), email, username,
        password, parseInt(id)],
      (error) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`The user ${username} is updated successfully!`);
      });
      break;
  }
};

export const getAllUsers = (request, response) => {
  connect.query(GET_ALL_USERS, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getUserById = (request, reponse) => {
  const id = parseInt(request.params.id);
  connect.query(GET_USER_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    reponse.status(200).json(results.rows);
  });
};
