import Router from 'express';
import models from '../../models';

const userRouter = Router();

userRouter.get('/', (request, response) => {
  response.send('Responding with a welcome message');
});

userRouter.get('/de-scholar/create-table-users', models.createTableUsers);

userRouter.post('/create-user', models.addOrUpdateUser);

userRouter.post('/update-user/:id', models.addOrUpdateUser);

userRouter.get('/get-all-users', models.getAllUsers);

userRouter.get('/user-profile-:id', models.getUserById);

export default userRouter;
