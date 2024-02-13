import * as z from "zod";


// Schema for login form
export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    /* 
    Do not apply the minimum password length on login field beacause if 
    we change the validation in future then old user cannot be able to login.
    Instead of using it in login use it in register form. 
    */
    password: z.string().min(1, {
        message: "Password is required"
    })
});

// Schema for register form
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 character required"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })
});