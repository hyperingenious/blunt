import * as z from "zod";

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 character long" }),
});

export const SignupValidation = z.object({
  username: z
    .string()
    .min(4, { message: "At least contain 4 characters" })
    .max(10, { message: "too long must be less than 10 character" }),
  name: z
    .string()
    .min(4, { message: "At least 4 character long" })
    .max(20, { message: "Cannot be more than 20 charaters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 character long" }),
});
