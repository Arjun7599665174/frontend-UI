import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import Input from "../components/Input";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { registerValidation } from "../validations/authValidation";

const Register = ({ setPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
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

  const handleRegister = (e) => {
    e.preventDefault();

    const errors = registerValidation(formData);

    if (Object.keys(errors).length > 0) {
      showToast(Object.values(errors)[0], "error");
      return;
    }

    const userData = {
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
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
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-5">Register</h1>

        <Input
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />

        <Input
          label="Mobile"
          name="mobile"
          type="text"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter mobile number"
        />

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
            placeholder="Example: Arjun@123"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 cursor-pointer text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <Button text="Register" type="submit" loading={loading} />

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