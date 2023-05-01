import { IUser, UserModel } from "../../models/user.model";

const listUserService = async (userId: string): Promise<IUser | null> => {
  const user = await UserModel.findById(userId).exec();
  return user;
};

export { listUserService };
