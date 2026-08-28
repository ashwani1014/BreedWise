import { z } from "zod";

export const signupValidation = (req, res, next) => {

  const signupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.issues,
    });
  }

  next();
};

//Login Validation 

export const LoginValidation = (req, res, next) => {
  const loginSchema = z.object({

    email: z.string().email(),
    password: z.string().min(6),
  });
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.issues,
    });
  }

  next();
};


