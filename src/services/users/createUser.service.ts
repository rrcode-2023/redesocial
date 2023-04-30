import { UserModel } from "../../models/user.model";
const createUserService = async (userData: any) => {
  try {
    const user = new UserModel(userData);
    return await user.save();
  } catch (error) {
    console.error(error);
  }
};

export { createUserService };
