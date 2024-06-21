import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/shadcn-components/ui/button";

import { resetPassword } from "@/store/features/auth/authSlice";

const ResetPasswordForm = () => {
  // ------VARIABLE DECLARATIONS------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const { resetToken } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // --------USE STATES------------
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const resetPasswordData = {
    password,
    passwordConfirm,
  };

  // ------HANDLERS---------

  const resetPasswordHandler = () => {
    dispatch(resetPassword({ resetToken, resetPasswordData })).then(
      (result) => {
        if (result.meta.requestStatus === "fulfilled") {
          navigate("/account");
        }
      }
    );
  };
  return (
    <form className="w-80 sm:w-96 bg-white shadow-lg rounded-lg flex flex-col  p-5">
      <p className="text-center font-bold text-xl my-2 mb-5">RESET PASSWORD</p>
      <div className="mb-3">
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
            type="text"
            className="grow"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      <div className="mb-3">
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
            type="text"
            className="grow"
            placeholder="Password Confirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </label>
        {errors.passwordConfirm && (
          <p className="text-red-500 font-semibold">Confirm the password</p>
        )}
        {Object.entries(errors).length === 0 && auth.error ? (
          <p className="text-red-500 font-semibold">{auth.error}</p>
        ) : null}
      </div>

      <Button
        className="me-2 text-lg px-4   bg-green-600 hover:bg-green-700 mt-5 w-full"
        size="lg"
        type="submit"
        onClick={handleSubmit(resetPasswordHandler)}
      >
        Submit
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
