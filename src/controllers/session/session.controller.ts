import { Request, Response } from "express";
import { loginUserService } from "../../services/session/loginUser.service";

const userLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { token } = await loginUserService({ email, password });
  return res.json({ token });
};

export { userLoginController };
