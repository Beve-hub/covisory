import { useState } from "react";
import { MdLockOpen, MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center w-screen h-screen p-4 bg-[var(--primary-color)]">
      <div>
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Logo</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h3 className="text-2xl text-center text-[var(--text-black)] font-bold mb-2">Login</h3>
        <p className="text-md text-center text-[var(--gray-color)] mb-6">Enter your Username and password to access the dashboard.</p>

        <form className="w-full space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[var(--text-black)] bg-[var(--text-white)] placeholder-gray-400  focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[var(--text-black)] bg-[var(--text-white)] placeholder-gray-400  focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <MdLockOpen size={20} /> : <MdLockOutline size={20} />}
              </button>
            </div>
            <p className="text-sm text-indigo-600 text-end mt-2 cursor-pointer hover:underline">Forgot Password?</p>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[var(--secondary-color)] focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            Login
          </button>

          <p className="text-[var(--text-black)] text-center">New on our platform? <span className="text-[var(--secondary-color)] font-semibold cursor-pointer" onClick={() => navigate('/register')}>Create an account</span></p>
        </form>
      </div>
      </div>
    </section>
  );
};

export default LoginUser;
