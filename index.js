import express from 'express';
import dotenv from 'dotenv';
import routes from './controllers/routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/users', routes.userRouter);

app.listen(port);
