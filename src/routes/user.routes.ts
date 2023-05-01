import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/user/user.controller";
import { validateUserBody } from "../middlewares/validateBody.middleware";
import checkDuplicateEmailMiddleware from "../middlewares/checkDuplicateEmail.middleware";
import { validateIdMiddleware } from "../middlewares/validateId.middleware";
import { AuthUserMiddleware } from "../middlewares/authUser.middleware";
import { authorizeUserAction } from "../middlewares/authorizeUserAction";

export const userRouter = Router();

userRouter.post(
  "",
  validateUserBody,
  checkDuplicateEmailMiddleware,
  createUserController
);
userRouter.get(
  "/:id",
  AuthUserMiddleware,
  authorizeUserAction,
  listUserController
);
userRouter.delete(
  "/:id",
  validateIdMiddleware,
  AuthUserMiddleware,
  authorizeUserAction,
  deleteUserController
);
userRouter.patch(
  "/:id",
  validateIdMiddleware,
  AuthUserMiddleware,
  authorizeUserAction,
  updateUserController
);
