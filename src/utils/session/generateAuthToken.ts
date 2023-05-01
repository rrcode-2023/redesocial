import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUser } from "../../models/user.model";

interface AuthPayload {
  _id: string;
  email: string;
}

const generateAuthToken = (user: IUser) => {
  const payload: AuthPayload = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY!, {
    expiresIn: "1h",
  });

  return token;
};

export { generateAuthToken };
