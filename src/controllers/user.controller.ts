import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;
  const user = await createUserService(userData);
  return res.status(201).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  await deleteUserService(id);
  return res.status(204).send();
};

export { createUserController, deleteUserController };
