import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/user/user.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import checkDuplicateEmailMiddleware from "../middlewares/checkDuplicateEmail.middleware";
import { validateIdMiddleware } from "../middlewares/validateId.middleware";
import { AuthUserMiddleware } from "../middlewares/authUser.middleware";
import { authorizeUserAction } from "../middlewares/authorizeUserAction";
import { userSchema, userUpdateSchema } from "../schemas/user.schema";

export const userRouter = Router();

userRouter.post(
  "",
  validateBody(userSchema),
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
  validateBody(userUpdateSchema),
  validateIdMiddleware,
  AuthUserMiddleware,
  authorizeUserAction,
  updateUserController
);
