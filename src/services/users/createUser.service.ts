import { IUser, UserModel } from "../../models/user.model";
const createUserService = async (userData: any): Promise<IUser> => {
  const user = new UserModel(userData);
  return await user.save();
};

export { createUserService };
