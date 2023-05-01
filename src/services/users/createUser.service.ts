import { IUser, UserModel } from "../../models/user.model";
import { hashPassword } from "../../utils/session/hashPassword";

const createUserService = async (userData: IUser): Promise<IUser> => {
  const { password, ...rest } = userData;
  const hashedPassword = await hashPassword(password);

  const user = new UserModel({
    ...rest,
    password: hashedPassword,
  });

  return await user.save();
};

export { createUserService };
