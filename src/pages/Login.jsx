import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Form from "../components/common/Form";
import Toast from "../components/common/Toast";
import Loader from "../components/common/Loader";
import { loginSchema } from "../validations/authValidation";

const Login = ({ setPage }) => {
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

  const loginFields = [
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
      placeholder: "Enter password",
      error: errors.password?.message,
      ...register("password"),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <Toast message={toast} type={toastType} />

      {loading && <Loader />}

      <div className="w-full max-w-sm">
        <Form
          title="Login"
          fields={loginFields}
          onSubmit={handleSubmit(onSubmit)}
          buttonText="Login"
          loading={loading}
          columns="grid-cols-1"
        >
          <p className="text-center text-sm md:col-span-1">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => setPage("register")}
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;