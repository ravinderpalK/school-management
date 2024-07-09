"use client";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchoolFormValues,
  registerSchoolSchema,
} from "@/types/register";
import axios from "axios";
import SuccessAlert from "../Alert/Sucess";
import ErrorAlert from "../Alert/Error";

const RegisterSchools: FC = () => {
  const [formStatus, setFormStatus] = useState<boolean | null>(null);

  const API_URL = process.env.API_URL as string;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterSchoolFormValues>({
    resolver: zodResolver(registerSchoolSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchoolFormValues> = async (data) => {
    axios
      .post(`${API_URL}/school`, data)
      .then((res) => {
        console.log(res);
        setFormStatus(true);
        setTimeout(() => setFormStatus(null), 2000);
        reset();
      })
      .catch((err) => {
        setFormStatus(false);
        setTimeout(() => setFormStatus(null), 2000);
      });
  };

  return (
    <>
      <div className="">
        {formStatus == true ? (
          <SuccessAlert message={"Successfully Registered"} />
        ) : formStatus == false ? (
          <ErrorAlert message={"Submission Error"} />
        ) : null}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark"
            >
              School Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter school name"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-8">
            <label
              htmlFor="address_1"
              className="mb-3 block text-sm font-medium text-dark"
            >
              Address
            </label>
            <input
              type="text"
              id="address_1"
              placeholder="Enter address 1"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("address_1")}
            />
            {errors.address_1 && (
              <p className="mt-2 text-sm text-red-600">
                {errors.address_1.message}
              </p>
            )}
          </div>
          <div className="mb-8">
            <label
              htmlFor="address_2"
              className="mb-3 block text-sm font-medium text-dark"
            >
              Address 2
            </label>
            <input
              type="text"
              id="address_2"
              placeholder="Enter address 2"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("address_2")}
            />
            {errors.address_2 && (
              <p className="mt-2 text-sm text-red-600">
                {errors.address_2.message}
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
                <p className="mt-2 text-sm text-red-600">
                  {errors.city.message}
                </p>
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
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              placeholder="Enter pincode"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("pin")}
            />
            {errors.pin && (
              <p className="mt-2 text-sm text-red-600">{errors.pin.message}</p>
            )}
          </div>
          <div className="mb-8">
            <label
              htmlFor="udias_number"
              className="mb-3 block text-sm font-medium text-dark"
            >
              UDIAS
            </label>
            <input
              type="text"
              id="udias_number"
              placeholder="Enter UDIAS number"
              className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
              {...register("udias_number")}
            />
            {errors.udias_number && (
              <p className="mt-2 text-sm text-red-600">
                {errors.udias_number.message}
              </p>
            )}
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
    </>
  );
};

export default RegisterSchools;
