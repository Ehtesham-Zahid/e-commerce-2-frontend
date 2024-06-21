import { Button } from "@/shadcn-components/ui/button";
import { resetError, signup } from "@/store/features/auth/authSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
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

  const auth = useSelector((state) => state.auth);
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

  console.log("HEMLOG: ", errors);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-[500px]:w-[500px] m-2 shadow-xl rounded-md p-5 py-10 px-6 flex flex-col  bg-stone-50  justify-center"
    >
      <div className=" flex flex-col mb-3">
        <label className="text-black font-medium">Username</label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            {...register("username", { required: true })}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="grow"
            placeholder="Username"
          />
        </label>
        {errors.username && (
          <p className="text-red-500 font-semibold">Enter the username</p>
        )}
        {Object.entries(errors).length === 0 &&
        auth.error.includes("username") ? (
          <p className="text-red-500 font-semibold">{auth.error}</p>
        ) : null}
      </div>
      <div className=" flex flex-col mb-3">
        <label className="text-black font-medium">Email Address</label>
        <label className="input input-bordered flex items-center gap-2">
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
            {...register("email", { required: true })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        {errors.email && (
          <p className="text-red-500 font-semibold">Enter the email</p>
        )}
        {Object.entries(errors).length === 0 && auth.error.includes("email") ? (
          <p className="text-red-500 font-semibold">{auth.error}</p>
        ) : null}
      </div>
      <div className=" flex flex-col mb-3">
        <label className="text-black font-medium">Password</label>
        {/* <input
          {...register("password", { required: true, minLength: 8 })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-black rounded-md p-2 "
        /> */}
        <label className="input input-bordered flex items-center gap-2">
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
            {...register("password", { required: true, minLength: 8 })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
            className="grow"
          />
        </label>
        {errors.password?.type === "required" && (
          <p className="text-red-500 font-semibold">Enter the password</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 font-semibold">
            Password must be 8 characters long
          </p>
        )}
      </div>
      <div className=" flex flex-col mb-3">
        <label className="text-black font-medium">Password Confirm</label>

        <label className="input input-bordered flex items-center gap-2">
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
            {...register("passwordConfirm", { required: true })}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Password Confirm"
            type="text"
            className="grow"
          />
        </label>
        {errors.passwordConfirm && (
          <p className="text-red-500 font-semibold">Confirm the Password</p>
        )}
        {Object.entries(errors).length === 0 && auth.error.includes("match") ? (
          <p className="text-red-500 font-semibold">{auth.error}</p>
        ) : null}
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
          onClick={() => dispatch(resetError())}
        >
          Signin
        </Link>
      </p>
    </form>
  );
};

export default SigninForm;
