import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Toast from "../components/Toast";

const Register = ({ setPage }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (name === "" || mobile === "" || email === "" || password === "") {
      setToast("Please fill all fields");
      setToastType("error");
      return;
    }

    if (mobile.length !== 10) {
      setToast("Mobile number must be 10 digits");
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
      setToast("Registration successful");
      setToastType("success");

      setTimeout(() => {
        setPage("login");
      }, 700);
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
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />

        <Input
          label="Mobile"
          type="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter mobile number"
        />

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