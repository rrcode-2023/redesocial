import { AppError } from "../../errors/appError";
import { UserModel } from "../../models/user.model";

const deleteFriendService = async (userId: string, friendId: string) => {
    const user = await UserModel.findById(userId);
    if (!user) {
        throw new AppError("User not found", 404);
    }
    user.friends = user.friends.filter(
        (friend) => friend.toString() !== friendId
    );
    await user.save();
};

export { deleteFriendService };
