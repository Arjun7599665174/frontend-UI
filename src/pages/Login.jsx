import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import Input from "../components/Input";
import Button from "../components/Button";
import Toast from "../components/Toast";
import Loader from "../components/Loader";
import { loginValidation } from "../validations/authValidation";

const Login = ({ setPage }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showToast = (message, type = "error") => {
    setToast(message);
    setToastType(type);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const errors = loginValidation(formData);

    if (Object.keys(errors).length > 0) {
      showToast(Object.values(errors)[0], "error");
      return;
    }

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      showToast("Please register first", "error");

      setTimeout(() => {
        setPage("register");
      }, 1000);

      return;
    }

    const enteredEmail = formData.email.trim().toLowerCase();
    const enteredPassword = formData.password;

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
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-5">Login</h1>

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <div className="relative">
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 cursor-pointer text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <Button text="Login" type="submit" loading={loading} />

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