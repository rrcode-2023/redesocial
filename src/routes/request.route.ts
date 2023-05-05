import { Router } from "express";
import {
  acceptRequestController,
  createRequestController,
  rejectRequestController,
} from "../controllers/request/request.controller";
import { AuthUserMiddleware } from "../middlewares/authUser.middleware";
import { validateRequestMiddleware } from "../middlewares/validateRequest.middleware";

export const requestUserRouter = Router();

requestUserRouter.post("/", AuthUserMiddleware, createRequestController);

requestUserRouter.patch(
  "/:requestId/accept",
  AuthUserMiddleware,
  validateRequestMiddleware,
  acceptRequestController
);

requestUserRouter.patch(
  "/:requestId/reject",
  AuthUserMiddleware,
  validateRequestMiddleware,
  rejectRequestController
);
