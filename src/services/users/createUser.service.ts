import { IUser, UserModel } from "../../models/user.model";
import bcryptjs from "bcryptjs";
const createUserService = async (userData: IUser): Promise<IUser> => {
  const { password, ...rest } = userData;
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const user = new UserModel({
    ...rest,
    password: hashedPassword,
  });

  return await user.save();
};

export { createUserService };
