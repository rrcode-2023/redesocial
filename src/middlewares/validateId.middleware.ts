import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import { AppError } from "../errors/appError";
import { UserModel } from "../models/user.model";

const validateIdMiddleware = async (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid ID", 400);
  }

  const user = await UserModel.findById(id);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export { validateIdMiddleware };
