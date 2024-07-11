"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchoolFormValues,
  registerSchoolSchema,
} from "@/types/register";
import SuccessAlert from "../Alert/Sucess";
import ErrorAlert from "../Alert/Error";
import { addSchool } from "@/db/queries/schools";

const RegisterSchoolsForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<boolean | null>(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterSchoolFormValues>({
    resolver: zodResolver(registerSchoolSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchoolFormValues> = async (data) => {
    const result = await addSchool(data);
    if (result) {
      setFormStatus(true);
      setTimeout(() => setFormStatus(null), 2000);
      reset();
    } else {
      setFormStatus(false);
      setTimeout(() => setFormStatus(null), 2000);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* {formStatus == true ? (
        <SuccessAlert message={"Successfully Registered"} />
      ) : formStatus == false ? (
        <ErrorAlert message={"Submission Error"} />
      ) : null} */}
      <form id="register-schools-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                School Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="Enter your first name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors?.name && (
                <div className="text-danger text-sm">{errors.name.message}</div>
              )}
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                UDISE Number
              </label>
              <input
                type="text"
                id="udise"
                {...register("udise")}
                placeholder="Enter your last name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors?.udise && (
                <div className="text-danger text-sm">
                  {errors.udise.message}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-col">
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Address line 1
              </label>
              <input
                type="text"
                id="address_1"
                {...register("address_1")}
                placeholder="Address line 1"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors?.address_1 && (
                <div className="text-danger text-sm">
                  {errors.address_1.message}
                </div>
              )}
            </div>
          </div>
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-col">
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Address line 2
              </label>
              <input
                type="text"
                id="address_2"
                {...register("address_2")}
                placeholder="Address lin 2"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors?.address_2 && (
                <div className="text-danger text-sm">
                  {errors.address_2.message}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                City
              </label>
              <input
                type="text"
                id="city"
                {...register("city")}
                placeholder="Enter your City"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors?.city && (
                <div className="text-danger text-sm">{errors.city.message}</div>
              )}
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                State
              </label>
              <input
                type="text"
                id="state"
                {...register("state")}
                placeholder="Enter your State"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors?.state && (
                <div className="text-danger text-sm">
                  {errors.state.message}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-col">
            <div className="w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Pin Code
              </label>
              <input
                type="text"
                id="pincode"
                {...register("pincode")}
                placeholder="Enter pin code"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors?.pincode && (
                <div className="text-danger text-sm">
                  {errors.pincode.message}
                </div>
              )}
            </div>
          </div>

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

export default RegisterSchoolsForm;
