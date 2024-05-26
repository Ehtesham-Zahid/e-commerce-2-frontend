import { Button } from "@/shadcn-components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Checkbox } from "@/shadcn-components/ui/checkbox";

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-[500px]:w-[500px] m-2 shadow-xl rounded-md p-5 py-10 px-6 flex flex-col  bg-stone-50  justify-center"
    >
      <p className="text-xl mb-5 ">Hi, Welcome Back!</p>

      <input
        {...register("email", { required: true })}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="border border-black rounded-md p-2 my-4 "
      />

      <input
        {...register("password", { required: true })}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border border-black rounded-md p-2 mt-2  "
      />

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
