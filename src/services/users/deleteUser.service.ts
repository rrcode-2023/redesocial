import { UserModel } from "../../models/user.model";
const deleteUserService = async (id: string): Promise<void> => {
  await UserModel.findByIdAndDelete(id);
};
export { deleteUserService };
