import { Button } from "@/shadcn-components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
      className="w-80 min-[500px]:w-96 border border-black rounded-md p-5 flex flex-col   justify-center"
    >
      <p className="text-center text-2xl font-semibold ">SIGNIN</p>
      <p className="text-gray-500 text-center mb-2 text-sm">
        Enter your email and password to Signin:
      </p>
      {/* <div className="flex flex-col justify-center w-full "> */}
      <label className="text-black font-semibold">Email</label>
      <input
        {...register("email", { required: true })}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email..."
        className="border border-black rounded-md p-2 mb-2 "
      />
      <label className="text-black font-semibold">Password</label>
      <input
        {...register("password", { required: true })}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password..."
        className="border border-black rounded-md p-2 "
      />
      {/* </div> */}
      {/* <div className="flex justify-end w-"> */}
      <p className="text-black text-end  text-sm mt-1 cursor-pointer underline-offset-4 hover:underline mb-5">
        Forgot your Password?
      </p>
      {/* </div> */}

      {/* <input type="submit" /> */}
      <Button className="w-full bg-black">Submit</Button>
      <p className="text-black text-center text-sm mt-2">
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
