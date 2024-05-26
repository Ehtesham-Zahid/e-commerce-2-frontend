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
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-[500px]:w-[500px] m-2 shadow-xl rounded-md p-5 py-10 px-6 flex flex-col  bg-stone-50  justify-center"
    >
      {/* <p className="text-center text-2xl font-semibold ">SIGNUP</p>
      <p className="text-gray-500 text-center mb-2 text-sm">
        Please fill in the information below:
      </p> */}
      {/* <div className="flex flex-col justify-center w-full "> */}
      {/* <label className="text-black font-medium">First Name</label>
      <input
        {...register("firstName", { required: true })}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        className="border border-black rounded-md p-2 mb-6"
      />{" "}
      <label className="text-black font-medium">Last Name</label>
      <input
        {...register("lastName", { required: true })}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        className="border border-black rounded-md p-2 mb-6"
      /> */}
      <label className="text-black font-medium">User Name</label>
      <input
        {...register("userName", { required: true })}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
        className="border border-black rounded-md p-2 mb-6"
      />
      <label className="text-black font-medium">Email Address</label>
      <input
        {...register("email", { required: true })}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="border border-black rounded-md p-2 mb-6 "
      />
      <label className="text-black font-medium">Password</label>
      <input
        {...register("password", { required: true })}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border border-black rounded-md p-2 mb-6"
      />
      <label className="text-black font-medium">Password Confirm</label>
      <input
        {...register("passwordConfirm", { required: true })}
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="Password Confirm"
        className="border border-black rounded-md p-2 mb-6"
      />
      {/* </div> */}
      {/* <input type="submit" /> */}
      <Button
        // variant="outline"
        className="w-full border-black mt-4 text-md"
      >
        Signup
      </Button>
      <p className="text-black text-center mt-4">
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
