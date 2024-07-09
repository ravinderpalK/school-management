import { z } from 'zod';

//Register School
export const registerSchoolSchema = z.object({
    name: z.string()
        .min(1, 'School Name is required')
        .trim(),
    address_1: z.string()
        .min(1, 'Address is required')
        .trim(),
    address_2: z.string()
        .min(1, 'Address is required')
        .trim(),
    city: z.string()
        .min(1, 'City is required')
        .trim(),
    state: z.string()
        .min(1, 'State is required')
        .trim(),
    pin: z.string()
        .length(6, 'Pincode must be exactly 6 characters long')
        .trim(),
    udias_number: z.string()
        .length(11, "UDIAS must be exactly 11 characters long")
        .trim(),
});

export type RegisterSchoolFormValues = z.infer<typeof registerSchoolSchema>;


// Register Student
export const registerStudentSchema = z.object({
    username: z.string()
        .min(1, 'Username is required')
        .trim(),
    aadhar_no: z.string()
        .length(12, 'Aadhar number must be exactly 12 digits')
        .trim(),
    first_name: z.string()
        .min(1, 'First name is required')
        .trim(),
    last_name: z.string()
        .min(1, 'Last name is required')
        .trim(),
    dob: z.string({
        required_error: 'Date of birth is required',
    }).refine((date) => !isNaN(Date.parse(date)), {
        message: 'Date of birth must be a valid date',
    }),
    gender: z.string()
        .min(1, 'Gender is required')
        .trim(),
    address: z.string()
        .min(1, 'Address is required')
        .trim(),
    city: z.string()
        .min(1, 'City is required')
        .trim(),
    state: z.string()
        .min(1, 'State is required')
        .trim(),
    pincode: z.string()
        .length(6, 'Pincode must be exactly 6 characters long')
        .trim(),
    phone_no: z.string()
        .length(10, 'Phone number must be exactly 10 digits')
        .trim(),
    parents_phone_no: z.string()
        .length(10, 'Parents phone number must be exactly 10 digits')
        .trim(),
});

export type RegisterStudentFormValues = z.infer<typeof registerStudentSchema>;

// Register Teacher
export const registerTeacherSchema = z.object({
    username: z.string()
        .min(1, 'Username is required')
        .trim(),
    aadhar_no: z.string()
        .length(12, 'Aadhar number must be exactly 12 digits')
        .trim(),
    first_name: z.string()
        .min(1, 'First name is required')
        .trim(),
    last_name: z.string()
        .min(1, 'Last name is required')
        .trim(),
    dob: z.string({
        required_error: 'Date of birth is required',
    }).refine((date) => !isNaN(Date.parse(date)), {
        message: 'Date of birth must be a valid date',
    }),
    gender: z.string()
        .min(1, 'Gender is required')
        .trim(),
    address: z.string()
        .min(1, 'Address is required')
        .trim(),
    city: z.string()
        .min(1, 'City is required')
        .trim(),
    state: z.string()
        .min(1, 'State is required')
        .trim(),
    pincode: z.string()
        .length(6, 'Pincode must be exactly 6 characters long')
        .trim(),
    phone_no: z.string()
        .length(10, 'Phone number must be exactly 10 digits')
        .trim(),
    email: z.string()
        .email("Email is not valid."),
});

export type RegisterTeacherFormValues = z.infer<typeof registerTeacherSchema>;