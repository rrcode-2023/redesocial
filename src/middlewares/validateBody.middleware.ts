import { RequestHandler } from "express";
import { userSchema } from "../schemas/user.schema";

const validateUserBody: RequestHandler = (req, res, next) => {
  const result = userSchema.safeParse(req.body);

  if (result.success) {
    req.body = result.data;
    return next();
  } else {
    return res.status(400).json({ errors: result.error });
  }
};

export { validateUserBody };
