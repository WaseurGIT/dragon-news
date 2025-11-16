import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { use } from "react";

export default function Login() {
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    await loginUser(email, password).then(async (res) => {
      const user = res.user;
      console.log(user);
    });
    form.reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg cursor-pointer">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?
          <Link
            to="/register"
            className="text-indigo-600 font-semibold ml-1 cursor-pointer"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
