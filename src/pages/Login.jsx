import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Toast from "../components/Toast";
import Loader from "../components/Loader";

const Login = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setToast("Please fill all fields");
      setToastType("error");
      return;
    }

    if (password.length < 6) {
      setToast("Password must be at least 6 characters");
      setToastType("error");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setToast("Login successful");
      setToastType("success");

      setTimeout(() => {
        setPage("dashboard");
      }, 700);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <Toast message={toast} type={toastType} />

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-5">Login</h1>

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <Button text="Login" type="submit" loading={loading} />

        <p className="text-center mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => setPage("register")}
            className="text-blue-600 cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;