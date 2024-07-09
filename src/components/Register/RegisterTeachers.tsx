"use client";

import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterTeacherFormValues,
  registerTeacherSchema,
} from "@/types/register";

const RegisterTeachers: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterTeacherFormValues>({
    resolver: zodResolver(registerTeacherSchema),
  });

  const onSubmit: SubmitHandler<RegisterTeacherFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl pb-8 text-black">Register Teachers</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <label
            htmlFor="username"
            className="mb-3 block text-sm font-medium text-dark"
          >
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
            {...register("username")}
          />
          {errors.username && (
            <p className="mt-2 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label
            htmlFor="aadhar_no"
            className="mb-3 block text-sm font-medium text-dark"
          >
            Aadhar Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="aadhar_no"
            placeholder="Enter Aadhar number"
            className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
            {...register("aadhar_no")}
          />
          {errors.aadhar_no && (
            <p className="mt-2 text-sm text-red-600">
              {errors.aadhar_no.message}
            </p>
          )}
        </div>
        <div className="flex flex-col xsm:flex-row xsm:gap-5">
          <div className="mb-8 flex-1">
            <label
              htmlFor="first_name"
              className="mb-3 block text-sm font-medium text-dark"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter first name"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("first_name")}
            />
            {errors.first_name && (
              <p className="mt-2 text-sm text-red-600">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div className="mb-8 flex-1">
            <label
              htmlFor="last_name"
              className="mb-3 block text-sm font-medium text-dark"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter last name"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("last_name")}
            />
            {errors.last_name && (
              <p className="mt-2 text-sm text-red-600">
                {errors.last_name.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col xsm:flex-row xsm:gap-5">
          <div className="mb-8 flex-1">
            <label
              htmlFor="dob"
              className="mb-3 block text-sm font-medium text-dark"
            >
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="dob"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("dob")}
            />
            {errors.dob && (
              <p className="mt-2 text-sm text-red-600">{errors.dob.message}</p>
            )}
          </div>
          <div className="mb-8 flex-1">
            <label
              htmlFor="gender"
              className="mb-3 block text-sm font-medium text-dark"
            >
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              id="gender"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-4 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("gender")}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="mt-2 text-sm text-red-600">
                {errors.gender.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-8">
          <label
            htmlFor="address"
            className="mb-3 block text-sm font-medium text-dark"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
            {...register("address")}
          />
          {errors.address && (
            <p className="mt-2 text-sm text-red-600">
              {errors.address.message}
            </p>
          )}
        </div>
        <div className="flex flex-col xsm:flex-row xsm:gap-5">
          <div className="mb-8 flex-1">
            <label
              htmlFor="city"
              className="mb-3 block text-sm font-medium text-dark"
            >
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter city"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("city")}
            />
            {errors.city && (
              <p className="mt-2 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>
          <div className="mb-8 flex-1">
            <label
              htmlFor="state"
              className="mb-3 block text-sm font-medium text-dark"
            >
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="state"
              placeholder="Enter state"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("state")}
            />
            {errors.state && (
              <p className="mt-2 text-sm text-red-600">
                {errors.state.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-8">
          <label
            htmlFor="pincode"
            className="mb-3 block text-sm font-medium text-dark"
          >
            Pincode <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="pincode"
            placeholder="Enter pincode"
            className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
            {...register("pincode")}
          />
          {errors.pincode && (
            <p className="mt-2 text-sm text-red-600">
              {errors.pincode.message}
            </p>
          )}
        </div>
        <div className="flex flex-col xsm:flex-row xsm:gap-5">
          <div className="mb-8 flex-1">
            <label
              htmlFor="phone_no"
              className="mb-3 block text-sm font-medium text-dark"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone_no"
              placeholder="Enter phone number"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("phone_no")}
            />
            {errors.phone_no && (
              <p className="mt-2 text-sm text-red-600">
                {errors.phone_no.message}
              </p>
            )}
          </div>
          <div className="mb-8 flex-1">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full rounded-md bg-primary py-3 px-5 text-base text-white transition duration-300 ease-in-out hover:bg-opacity-90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterTeachers;
