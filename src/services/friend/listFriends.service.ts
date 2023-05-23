import { AppError } from "../../errors/appError";
import { UserModel } from "../../models/user.model";

const listFriendsService = async (userId: string) => {
    const user = await UserModel.findById(userId).populate("friends");
    console.log("-----USER SERVICE-----");
    console.log(user);
    if (!user) {
        throw new AppError("User not found", 404);
    }
    return user.friends;
};

export { listFriendsService };
