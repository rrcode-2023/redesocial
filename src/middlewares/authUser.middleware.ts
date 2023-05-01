import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";

/*
  Responsável por autenticar o usuário e adicionar as 
  informações do usuário autenticado à requisição
*/

const AuthUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new AppError("Unauthorized", 401);
  }

  try {
    const decoded: any = jwt.verify(token, process.env.SECRET_KEY as string);

    req.user = {
      email: decoded.email,
      id: decoded._id,
    };
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export { AuthUserMiddleware };
