"use client";

import { LoginFormValues, loginSchema } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    const result = await signIn("credentials", {
      username: data.username,
      password: data.password,
      callbackUrl: "/dashboard",
      redirect: true,
    });
    // console.log(result);
  };

  return (
    <section className="relative z-10 overflow-hidden">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-md mx-auto max-w-[500px] rounded bg-white px-6 py-8 sm:p-[60px]">
              <h3 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl">
                Sign in to your account
              </h3>
              <div className="mb-8 flex items-center justify-center">
                <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                <p className="w-full px-5 text-center text-base font-medium text-body-color">
                  Or, sign in with your username
                </p>
                <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-8">
                  <label
                    htmlFor="username"
                    className="mb-3 block text-sm font-medium text-dark"
                  >
                    Your Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
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
                    htmlFor="password"
                    className="mb-3 block text-sm font-medium text-dark"
                  >
                    Your Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="border-stroke focus:border-primary shadow-one w-full rounded-md border bg-transparent py-3 px-4 text-base text-body-color placeholder-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="mb-8 flex items-center justify-between">
                  <Link
                    href=""
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary py-3 px-5 text-base text-white transition duration-300 ease-in-out hover:bg-opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>

                  {errorMessage && (
                    <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
