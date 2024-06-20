import express from 'express';
import cors from 'cors';

import './db/sequelize';
import { notFoundHandler } from './middleware/notFoundRoute';
import { errorHandler, logErrors, wrapErrors } from './middleware/errorHandler';
import { userRouter } from './api/users/user.router';

const app = express();

app.use(cors('*'));
app.use(express.json());

app.use('/api/auth', userRouter);

app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);
export default app;