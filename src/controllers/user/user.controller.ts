import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";
import { deleteUserService } from "../../services/users/deleteUser.service";
import { updateUserService } from "../../services/users/updateUser.service";
import { IUser } from "../../models/user.model";
import { listUserService } from "../../services/users/listUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IUser = req.body;
  const user = await createUserService(userData);

  return res.status(201).json(user);
};

const listUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = req.user.id;
  const user = await listUserService(userId);
  return res.json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  await deleteUserService(id);

  return res.status(204).send();
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  const userData: IUser = req.body;
  const updatedUser = await updateUserService(id, userData);

  return res.status(200).json(updatedUser);
};

export {
  createUserController,
  listUserController,
  deleteUserController,
  updateUserController,
};
