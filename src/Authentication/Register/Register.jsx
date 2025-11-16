import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export default function Register() {
  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    await signUpUser(email, password);
    form.reset();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-pink-400 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-pink-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-pink-400 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3 rounded-lg cursor-pointer">
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="text-pink-600 font-semibold ml-1 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
