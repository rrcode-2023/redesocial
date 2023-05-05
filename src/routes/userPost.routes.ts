import { Router } from "express";
import {
    createPostController,
} from "../controllers/post/post.controller";
import { AuthUserMiddleware } from "../middlewares/authUser.middleware";

export const userPostRouter = Router();

userPostRouter.post(
  "",
  AuthUserMiddleware,
  createPostController
);

