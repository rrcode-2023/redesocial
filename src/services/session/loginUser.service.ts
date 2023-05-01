import { AppError } from "../../errors/appError";
import { UserModel } from "../../models/user.model";
import bcryptjs from "bcryptjs";
import { generateAuthToken } from "../../utils/session/generateAuthToken";

interface LoginUserData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const loginUserService = async ({
  email,
  password,
}: LoginUserData): Promise<LoginResponse> => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new AppError("Account not found", 404);
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 400);
  }

  const token = generateAuthToken(user);

  return { token };
};

export { loginUserService };
