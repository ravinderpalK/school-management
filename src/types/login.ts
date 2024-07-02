import { z } from 'zod';

export const loginSchema = z.object({
    username: z.string()
        .min(1, 'Username is required')
        .trim(),
    password: z.string()
        .min(5, 'Password must be at least 5 characters long')
        // .regex(/[a-zA-Z]/, 'Password must contain at least 1 letter')
        // .regex(/\d/, 'Password must contain at least 1 number')
        // .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least 1 special character')
        .trim(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const changePasswordSchema = z.object({
    currentPassword: z.string()
        .min(5, 'Current password must be at least 5 characters long')
        .trim(),
    newPassword: z.string()
        .min(5, 'New password must be at least 5 characters long')
        .trim(),
    confirmPassword: z.string()
        .min(5, 'Confirm password must be at least 5 characters long')
        .trim()
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;