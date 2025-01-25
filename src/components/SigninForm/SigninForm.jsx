import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/shadcn-components/ui/button";
import { Checkbox } from "@/shadcn-components/ui/checkbox";

import { login, resetError } from "@/store/features/auth/authSlice";

const SigninForm = () => {
  // --------VARIABLE DECALARATIONS-----------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { handleSubmit } = useForm();
  // ---------USE STATES------------

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginData = {
    email,
    password,
  };

  // -----------HANDLERS--------------
  const onSubmit = () => {
    dispatch(login(loginData))
      .then((result) => {
        result.meta.requestStatus === "fulfilled" ? navigate(-1) : null;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-[500px]:w-[500px] m-2 shadow-xl rounded-md p-5 py-10 px-6 flex flex-col  bg-stone-50  justify-center"
    >
      <p className="text-xl mb-5 ">Hi, Welcome Back!</p>

      <div className="my-4 flex flex-col">
        <label className="input input-bordered w-full flex items-center gap-2 bg-white border-black text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full  "
          />
        </label>
      </div>

      <div className="mt-2 flex flex-col">
        <label className="input input-bordered flex items-center gap-2  bg-white border-black text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full"
          />
        </label>
      </div>
      {auth.error ? (
        <p className="text-red-500 font-semibold  text-center mt-0.5  ">
          {auth.error}
        </p>
      ) : null}
      <div className="flex  justify-between items-center my-8">
        <div className="flex items-center">
          <Checkbox />
          <p className="ms-2 font-medium">Keep me signed in</p>
        </div>

        <Link
          to="/account/forgot-password"
          className="text-neutral-500 text-end     hover:text-black  cursor-pointer  "
        >
          Forgot?
        </Link>
      </div>

      <Button className="w-full bg-black text-md">Signin</Button>
      <p className="text-black text-center  mt-4">
        Don't have an account?{" "}
        <Link
          to="/account/signup"
          className="cursor-pointer underline-offset-4 hover:underline font-bold "
          onClick={() => dispatch(resetError())}
        >
          Signup
        </Link>
      </p>
    </form>
  );
};

export default SigninForm;
