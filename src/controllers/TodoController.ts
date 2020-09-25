import { Request, Response } from 'express';
import * as Yup from 'yup';
import Todo from '../models/Todo';
import User from '../models/User';

export default class TodoController {
  async index (request: Request, response: Response) {
    // Get user from headers
    const user = request.header('user_id');

    const todos = await Todo.find({ user });

    return response.json(todos);
  }

  async create (request: Request, response: Response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      label: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    };

    const {
      title, label
    } = request.body;

    // Get user from headers
    const user = request.header('user_id');

    // Check if user exists
    const userExists = await User.findById(user);
    if (!userExists) {
      return response
        .status(401)
        .json({ error: 'You can only create a todo for a valid user.' });
    };

    const todo = new Todo({
      title,
      label,
      user,
    });

    await todo.save();

    return response.json(todo);
  }

  async update (request: Request, response: Response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      label: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    };

    // Get todo_id from params
    const { todo_id } = request.params;

    const { title, label } = request.body;

    const todo = await Todo.findByIdAndUpdate(
      todo_id,
      { title, label },
      { new: true },
    );

    return response.json(todo);
  }

  async delete (request: Request, response: Response) {
    // Get todo_id from params
    const { todo_id } = request.params;

    await Todo.findByIdAndDelete(todo_id);

    return response.json({ 'message': 'Todo deleted successfully!' });
  }
};
