import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Form from "../components/common/Form";
import Toast from "../components/common/Toast";
import { registerSchema } from "../validations/authValidation";

const Register = ({ setPage }) => {
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

  const registerFields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter name",
      error: errors.name?.message,
      ...register("name"),
    },
    {
      label: "Mobile",
      name: "mobile",
      type: "text",
      placeholder: "Enter mobile number",
      error: errors.mobile?.message,
      ...register("mobile"),
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      error: errors.email?.message,
      ...register("email"),
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Example: Arjun@123",
      error: errors.password?.message,
      ...register("password"),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <Toast message={toast} type={toastType} />

      <div className="w-full max-w-sm">
        <Form
          title="Register"
          fields={registerFields}
          onSubmit={handleSubmit(onSubmit)}
          buttonText="Register"
          loading={loading}
          columns="grid-cols-1"
        >
          <p className="text-center text-sm md:col-span-1">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setPage("login")}
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;