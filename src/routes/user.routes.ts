import { Router } from "express";
import {
  changePasswordController,
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/user/user.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import checkDuplicateEmailMiddleware from "../middlewares/checkDuplicateEmail.middleware";
import { validateIdMiddleware } from "../middlewares/validateId.middleware";
import { AuthUserMiddleware } from "../middlewares/authUser.middleware";
import { authorizeUserActionMiddleware } from "../middlewares/authorizeUserAction.middleware";
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
  validateIdMiddleware,
  AuthUserMiddleware,
  authorizeUserActionMiddleware,
  listUserController
);
userRouter.delete(
  "/:id",
  validateIdMiddleware,
  AuthUserMiddleware,
  authorizeUserActionMiddleware,
  deleteUserController
);
userRouter.patch(
  "/:id",
  validateBody(userUpdateSchema),
  validateIdMiddleware,
  AuthUserMiddleware,
  authorizeUserActionMiddleware,
  updateUserController
);
userRouter.patch(
  "/:id/change-password",
  AuthUserMiddleware,
  validateIdMiddleware,
  changePasswordController
);
