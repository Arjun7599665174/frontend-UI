import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Toast from "../components/common/Toast";
import { registerSchema } from "../validations/authValidation";

const Register = ({ setPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const showToast = (message, type = "error") => {
    setToast(message);
    setToastType(type);
  };

  const onSubmit = (data) => {
    const userData = {
      name: data.name.trim(),
      mobile: data.mobile.trim(),
      email: data.email.trim().toLowerCase(),
      password: data.password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(userData));

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showToast("Registration successful", "success");

      setTimeout(() => {
        setPage("login");
      }, 800);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <Toast message={toast} type={toastType} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-5">Register</h1>

        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Enter name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">
            {errors.name.message}
          </p>
        )}

        <Input
          label="Mobile"
          name="mobile"
          type="text"
          placeholder="Enter mobile number"
          {...register("mobile")}
        />
        {errors.mobile && (
          <p className="text-red-500 text-sm mb-2">
            {errors.mobile.message}
          </p>
        )}

        <Input
          label="Email"
          name="email"
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
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Example: Arjun@123"
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
          Register
        </Button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => setPage("login")}
            className="text-blue-600 cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;