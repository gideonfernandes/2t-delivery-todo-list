import { Request, Response } from 'express';
import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from 'config';
import User from '../models/User';

export default class TodoController {
  async create (request: Request, response: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    };

    const {
      name, lastName, email, password,
    } = request.body;

    // Check if user exists
    let user = await User.findOne({ email });

    if (user) {
      return response.status(400).json({ error: 'User already exists!' });
    };

    user = new User({
      name,
      last_name: lastName,
      email,
      password,
    });

    // Encrypt password
    user.password = await bcrypt.hash(password, 8);
    await user.save();

    return response.json({
      user: {
        id: user._id,
        name: user.name,
        last_name: user.last_name,
      },
      token: jwt.sign({ id: user._id }, config.get('jwtSecret'), {
        expiresIn: config.get('jwtExpiresIn'),
      }),
    });
  }
};
