import { Request, Response } from "express";
import { listFriendsService } from "../../services/friend/listFriends.service";
import { deleteFriendService } from "../../services/friend/deleteFriend.service";

const listFriendsController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId = req.user.id;
    const friends = await listFriendsService(userId);
    console.log("-----FRIENDS CONTROLLER-----");
    return res.json(friends);
};

const deleteFriendController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId = req.user.id;
    const friendId = req.params.friendId;
    await deleteFriendService(userId, friendId);
    return res.status(204).send();
};

export { listFriendsController, deleteFriendController };
