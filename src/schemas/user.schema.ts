import * as z from "zod";

export const userSchema = z.object({
  firstName: z.string().min(3).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email().max(255),
  birthDate: z.string().refine((val) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(val))
      throw new Error("Expected date with format 'YYYY-MM-DD'");
    const date = new Date(val);
    return !isNaN(date.getTime());
  }),
  password: z.string().min(5),
  gender: z.string().min(2).max(15),
  profilePicture: z.string().max(255).nullable().default(null),
  profileCover: z.string().max(255).nullable().default(null),
});
