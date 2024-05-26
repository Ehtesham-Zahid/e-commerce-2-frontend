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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-80 min-[500px]:w-96 border border-black   p-5 flex flex-col    justify-center"
    >
      <p className="text-center text-2xl font-semibold ">SIGNUP</p>
      <p className="text-gray-500 text-center mb-2 text-sm">
        Please fill in the information below:
      </p>
      {/* <div className="flex flex-col justify-center w-full "> */}
      {/* <label className="text-black font-semibold">First Name</label> */}
      <input
        {...register("firstName", { required: true })}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter First Name..."
        className="border-b border-black rounded- p-2 my-2 outline-none"
      />{" "}
      {/* <label className="text-black font-semibold">Last Name</label> */}
      <input
        {...register("lastName", { required: true })}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter Last Name..."
        className="border-b border-black rounded- p-2 my-2 outline-none"
      />
      {/* <label className="text-black font-semibold">Email</label> */}
      <input
        {...register("email", { required: true })}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email..."
        className="border-b border-black rounded- p-2 my-2 outline-none "
      />
      {/* <label className="text-black font-semibold">Password</label> */}
      <input
        {...register("password", { required: true })}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password..."
        className="border-b border-black rounded- p-2 my-2 outline-none"
      />
      {/* </div> */}
      {/* <input type="submit" /> */}
      <Button
        variant="outline"
        className="w-full border-black hover:bg-black hover:text-white mt-4"
      >
        Submit
      </Button>
      <p className="text-black text-center text-sm mt-2">
        Already have an account?{" "}
        <Link
          to="/account/signin"
          className="cursor-pointer underline-offset-4 hover:underline font-bold"
        >
          Signin
        </Link>
      </p>
    </form>
  );
};

export default SigninForm;
