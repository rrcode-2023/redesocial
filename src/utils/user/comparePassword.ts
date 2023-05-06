import bcryptjs from "bcryptjs";

const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isPasswordValid = await bcryptjs.compare(password, hashedPassword);
  return isPasswordValid;
};
export { comparePassword };
