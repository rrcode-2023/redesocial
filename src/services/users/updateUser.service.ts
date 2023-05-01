import { IUser, UserModel } from "../../models/user.model";

const updateUserService = async (id: string, userData: IUser) => {
  const updatedUser = await UserModel.findByIdAndUpdate(id, userData, {
    new: true,
  });
  return updatedUser;
};
export { updateUserService };
