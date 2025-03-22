import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import { MdLockOpen, MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "react-country-state-city/dist/react-country-state-city.css";

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  userName?: string;
  password?: string;
  confirmPassword?: string;
  country?: string;
  address?: string;
}


const Register = () => {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      userName: '',
      password: '',
      confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleCountrySelect = (countryCode: string) => {
    setFormData({ ...formData, country: countryCode });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const handleSubmit = () => {
  navigate('/dashboard')
}
  return (
    <section className="flex items-center justify-center w-screen h-screen p-4 bg-[var(--primary-color)]">
      <div>
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Logo</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h3 className="text-2xl text-center text-[var(--text-black)] font-bold mb-2">Register</h3>
        <p className="text-md text-center text-[var(--gray-color)] mb-6">Create an account to gain access to panel.</p>

        <form className="w-full space-y-6">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              First Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="lastName"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[var(--text-black)] bg-[var(--text-white)] placeholder-gray-400  focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              placeholder="Enter your last name"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Last Name
            </label>
            <input
              id="firstName"
              name="lastName"
              type="lastName"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[var(--text-black)] bg-[var(--text-white)] placeholder-gray-400  focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              placeholder="Enter your first name"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              UserName
            </label>
            <input
              id="userName"
              name="userName"
              type="userName"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[var(--text-black)] bg-[var(--text-white)] placeholder-gray-400  focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              placeholder="Enter your user name"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[var(--text-black)] bg-[var(--text-white)] placeholder-gray-400  focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              placeholder="Enter your email"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Home Address
            </label>
            <input
              id="address"
              name="address"
              type="address"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[var(--text-black)] bg-[var(--text-white)] placeholder-gray-400  focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              placeholder="Enter your address"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Country
            </label>
           

          </div>

       
          <div className="sm:col-span-3">
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
          
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
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
          
          </div>

          </div>

          <div className="">
            
           
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[var(--secondary-color)] focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            onClick={handleSubmit}
          >
            Register
          </button>
          <div className="flex items-center gap-2">
              <input
                type='checkbox'
               
              />
             <p className="text-[var(--text-black)] text-sm">I agree with <span className="text-[var(--logo-color)]">Privacy & Policy, Terms & Condition</span></p>
            </div>
          
          <p className="text-[var(--text-black)] text-center">Already have an account? <span className="text-[var(--secondary-color)] font-semibold cursor-pointer" onClick={() => navigate('/login')}>Register</span></p>
        </form>
      </div>
      </div>
    </section>
  )
}

export default Register