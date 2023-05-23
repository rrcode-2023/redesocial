import { Router } from "express";
import { AuthUserMiddleware } from "../middlewares/authUser.middleware";
import {
    deleteFriendController,
    listFriendsController,
} from "../controllers/friend/friend.controller";

export const friendsRouter = Router();

friendsRouter.get("/", AuthUserMiddleware, listFriendsController);
friendsRouter.delete("/:friendId", AuthUserMiddleware, deleteFriendController);
