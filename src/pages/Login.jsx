import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Toast from "../components/common/Toast";
import Loader from "../components/common/Loader";
import { loginSchema } from "../validations/authValidation";

const Login = ({ setPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const showToast = (message, type = "error") => {
    setToast(message);
    setToastType(type);
  };

  const onSubmit = (data) => {
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      showToast("Please register first", "error");

      setTimeout(() => {
        setPage("register");
      }, 1000);

      return;
    }

    const enteredEmail = data.email.trim().toLowerCase();
    const enteredPassword = data.password;

    if (
      enteredEmail === registeredUser.email &&
      enteredPassword === registeredUser.password
    ) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("isLoggedIn", "true");
        showToast("Login successful", "success");

        setTimeout(() => {
          setPage("dashboard");
        }, 800);
      }, 1000);
    } else {
      showToast("Invalid email or password", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <Toast message={toast} type={toastType} />

      {loading && <Loader />}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-5">Login</h1>

        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">
            {errors.email.message}
          </p>
        )}

        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            {...register("password")}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 cursor-pointer text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {errors.password && (
          <p className="text-red-500 text-sm mb-2">
            {errors.password.message}
          </p>
        )}

        <Button type="submit" loading={loading} fullWidth>
          Login
        </Button>

        <p className="text-center mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => setPage("register")}
            className="text-blue-600 cursor-pointer font-medium"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;