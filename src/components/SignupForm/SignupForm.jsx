import { Button } from "@/shadcn-components/ui/button";
import { signup } from "@/store/features/auth/authSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const signupData = {
    username,
    email,
    password,
    passwordConfirm,
  };
  const onSubmit = (data) => {
    dispatch(signup(signupData))
      .then((result) => {
        console.log(result);
        result.meta.requestStatus === "fulfilled"
          ? navigate("/account/")
          : null;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it
  console.log(errors.password);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-[500px]:w-[500px] m-2 shadow-xl rounded-md p-5 py-10 px-6 flex flex-col  bg-stone-50  justify-center"
    >
      <div className=" flex flex-col mb-5">
        <label className="text-black font-medium">Username</label>
        <input
          {...register("username", { required: true })}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border border-black rounded-md p-2 "
        />
        {errors.username && (
          <p className="text-red-500 font-semibold">Enter the email</p>
        )}
      </div>
      <div className=" flex flex-col mb-5">
        <label className="text-black font-medium">Email Address</label>
        <input
          {...register("email", { required: true, pattern: "/^S+@S+.S+$/" })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="border border-black rounded-md p-2 "
        />
        {errors.email && (
          <p className="text-red-500 font-semibold">Enter the email</p>
        )}
      </div>
      <div className=" flex flex-col mb-5">
        <label className="text-black font-medium">Password</label>
        <input
          {...register("password", { required: true, minLength: 8 })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-black rounded-md p-2 "
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500 font-semibold">Enter the password</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 font-semibold">
            Password must be 8 characters long
          </p>
        )}
      </div>
      <div className=" flex flex-col mb-5">
        <label className="text-black font-medium">Password Confirm</label>
        <input
          {...register("passwordConfirm", { required: true })}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Password Confirm"
          className="border border-black rounded-md p-2"
        />
        {errors.passwordConfirm && (
          <p className="text-red-500 font-semibold">Confirm the Password</p>
        )}
      </div>
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
