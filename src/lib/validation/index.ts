import * as z from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 character long." }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 character long." }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 character long." }),
});
