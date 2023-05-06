import { ReturnDocument } from "mongodb";
import { AppError } from "../../errors/appError";
import { UserModel } from "../../models/user.model";
import { hashPassword } from "../../utils/session/hashPassword";
import { comparePassword } from "../../utils/user/comparePassword";

const changePasswordService = async (
  id: string,
  oldPassword: string,
  newPassword: string
) => {
  const user = await UserModel.findById(id);

  if (!user) {
    throw new AppError("User not found", 400);
  }

  const isOldPasswordValid = await comparePassword(oldPassword, user.password);

  if (!isOldPasswordValid) {
    throw new AppError("Invalid password", 400);
  }

  const hashedNewPassword = await hashPassword(newPassword);

  user.password = hashedNewPassword;

  return await user.save();
};
export { changePasswordService };
