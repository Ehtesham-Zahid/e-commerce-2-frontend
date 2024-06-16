import { Button } from "@/shadcn-components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@/shadcn-components/ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/features/auth/authSlice";

const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginData = {
    email,
    password,
  };
  const onSubmit = (data) => {
    dispatch(login(loginData))
      .then((result) => {
        result.meta.requestStatus === "fulfilled" ? navigate(-1) : null;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-[500px]:w-[500px] m-2 shadow-xl rounded-md p-5 py-10 px-6 flex flex-col  bg-stone-50  justify-center"
    >
      <p className="text-xl mb-5 ">Hi, Welcome Back!</p>

      <div className="my-4 flex flex-col">
        <input
          // {...register("email", { required: true })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="border border-black rounded-md p-2  "
        />
        {/* {errors.email && (
          <p className="text-red-500 font-semibold">Enter the email</p>
        )} */}
      </div>

      <div className="mt-2 flex flex-col">
        <input
          // {...register("password", { required: true })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-black rounded-md p-2  "
        />
        {/* {errors.password && (
          <p className="text-red-500 font-semibold  ">Enter the password</p>
        )} */}
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

        <p className="text-neutral-500 text-end     hover:text-black  cursor-pointer  ">
          Forgot?
        </p>
      </div>

      <Button className="w-full bg-black text-md">Signin</Button>
      <p className="text-black text-center  mt-4">
        Don't have an account?{" "}
        <Link
          to="/account/signup"
          className="cursor-pointer underline-offset-4 hover:underline font-bold "
        >
          Signup
        </Link>
      </p>
    </form>
  );
};

export default SigninForm;
