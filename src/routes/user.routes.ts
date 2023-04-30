import { Router } from "express";
import { createUserController, deleteUserController } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.delete("/:id", deleteUserController);
