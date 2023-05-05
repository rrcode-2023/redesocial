import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

/*
  Responsável por verificar se o usuário autenticado tem permissão para 
  realizar uma ação específica em outro usuário
*/
const authorizeUserActionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  const authenticatedUserId = req.user.id;

  if (!userId) {
    throw new AppError("User ID not provided", 400);
  }

  if (userId !== authenticatedUserId) {
    throw new AppError("Unauthorized", 401);
  }

  return next();
};

export { authorizeUserActionMiddleware };
