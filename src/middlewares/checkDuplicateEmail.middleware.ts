import { NextFunction, Response, Request } from "express";
import { AppError } from "../errors/appError";
import { UserModel } from "../models/user.model";

const checkDuplicateEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      throw new AppError("Email already exists", 409);
    }

    next();
  } catch (err) {
    next(err);
  }
};

export default checkDuplicateEmailMiddleware;
