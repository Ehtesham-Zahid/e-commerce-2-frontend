import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@/shadcn-components/ui/button";
import { forgotPassword } from "@/store/features/auth/authSlice";
import toast from "react-hot-toast";

const ForgotPasswordForm = () => {
  // --------VARIABLE DECLARATIONS---------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // --------USE STATES--------------
  const [email, setEmail] = useState("");

  // -----------HANDLERS---------
  const forgotPasswordHandler = () => {
    dispatch(forgotPassword(email)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Email Sent!");
      }
    });
  };

  return (
    <form className="w-80 sm:w-96 bg-white shadow-lg rounded-lg flex flex-col  p-5">
      <p className="text-center font-bold text-xl my-2">FORGOT PASSWORD</p>
      <p className="mt-3">Email</p>
      <div className="mb-3">
        <label className="input input-bordered flex items-center gap-2  ">
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
            type="text"
            className="grow"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && (
          <p className="text-red-500 font-semibold">Enter the email</p>
        )}
        {Object.entries(errors).length === 0 && auth.error ? (
          <p className="text-red-500 font-semibold text-sm sm:text-base">
            {auth.error}
          </p>
        ) : null}
      </div>
      <div className="flex justify-end mt-5">
        <Button
          className="me-2 text-base px-4 hover:bg-red-600"
          variant="destructive"
          size="lg"
          type="button"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button
          className="me-2 text-base px-4 bg-green-600 hover:bg-green-700"
          size="lg"
          type="submit"
          onClick={handleSubmit(forgotPasswordHandler)}
        >
          Send Email
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
