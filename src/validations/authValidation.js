import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().min(1, "Email is required").email("Invalid email"),

  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain uppercase letter")
    .regex(/[a-z]/, "Must contain lowercase letter")
    .regex(/[0-9]/, "Must contain number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Must contain special character")
    .refine((value) => !/\s/.test(value), {
      message: "Password must not contain spaces",
    }),
});