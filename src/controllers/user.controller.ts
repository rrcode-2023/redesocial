import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const user = await createUserService(userData);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

export { createUserController };
