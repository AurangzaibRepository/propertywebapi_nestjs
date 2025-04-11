import { Request, Response, NextFunction } from 'express';

export function AuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (
    !req.headers['api_key'] ||
    req.headers['api_key'] !== process.env.API_KEY
  ) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  next();
}
