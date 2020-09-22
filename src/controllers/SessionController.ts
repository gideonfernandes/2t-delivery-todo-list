import { Request, Response } from 'express';
import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from 'config';
import User from '../models/User';

export default class SessionController {
  async create (request: Request, response: Response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    // Check if request data is valid
    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    };

    const { email, password } = request.body;

    // Check if email is valid
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(401).json({ error: 'Credentials does not match.' });
    };

    // Check if password is valid
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return response.status(400).json({ message: 'Credentials does not match.' });
    };

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
