import { Request, Response, NextFunction } from 'express';

import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import config from 'config';

async function authMiddleware(
  request: Request, response: Response, next: NextFunction
){
  // Get token from header
  const token = request.header('auth-token');

  // Check if not token
  if (!token) {
    return response.status(401).json({ error: 'Token is not provided.' });
  };

  // Verify token
  try {
    const decoded: any = await promisify(jwt.verify)(token, config.get('jwtSecret'));
    request.headers.user_id = decoded.id;

    return next();
  } catch (error) {
    return response.status(401).json({ error: 'Token is not valid.' });
  };
};

export default authMiddleware;
