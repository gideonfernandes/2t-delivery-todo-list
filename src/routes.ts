import express from 'express';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import TodoController from './controllers/TodoController';

const routes = express.Router();
const usersController = new UserController();
const sessionsController = new SessionController();
const todosController = new TodoController();

routes.post('/users', usersController.create);
routes.post('/sessions', sessionsController.create);

// Auth routes
routes.get('/todos', todosController.index);
routes.post('/todos', todosController.create);
routes.put('/todos/:todo_id', todosController.update);
routes.delete('/todos/:todo_id', todosController.delete);

export default routes;
