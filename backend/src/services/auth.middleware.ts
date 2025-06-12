import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secretKey';

export const verificarToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.status(401).json({ mensaje: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).usuario = decoded;
    next();
  } catch {
    res.status(401).json({ mensaje: 'Token inválido' });
  }
};
