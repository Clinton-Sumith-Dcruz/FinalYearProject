import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-[400px] space-y-6"
      >
        <h2 className="text-3xl font-display text-sage text-center">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-sage text-white py-3 rounded-lg">
          Register
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-sage font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
