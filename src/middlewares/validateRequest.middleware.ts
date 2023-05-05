import { NextFunction, Request, Response } from "express";
import { RequestModel } from "../models/request.models";
import { AppError } from "../errors/appError";

const validateRequestMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const requestId = req.params.requestId;
  const request = await RequestModel.findById(requestId);

  if (!request) {
    throw new AppError("Request not found", 404);
  }

  if (request.status !== "pending") {
    throw new AppError("Invalid request status", 400);
  }

  return next();
};

export { validateRequestMiddleware };
