import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from 'lucide-react';
import { apiSignUp } from "../../services/auth";

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    

      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        let payload = {
            // firstName: data.firstName,
            // lastName: data.lastName,
            username: data.username,
            password: data.password,
            email: data.email
        }

        try {
          const res = await apiSignUp(payload);
          console.log(res.data)
          toast.success(res.data.message);

            navigate("/login");
        
        } catch (error) {
          console.log(error);
          toast.error("An error occurred!");
        } finally {
          setIsSubmitting(false);
        }
      };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-10 rounded shadow-md">
      {/* <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="firstname"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
            {...register("firstname", { required: "First Name is required" })}
          />
          {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
        </div> */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="mb-6 relative">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-1 text-lg leading-tight focus:outline-none focus:shadow-outline pr-10"
            {...register("password", { required: "Password is required",
                minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long'
                  }
             })}
          />
          <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 pt-8 text-sm leading-5 focus:outline-none text-gray-500"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
        </div>
        {errors.password && (
                <p className="text-red-500 -mt-3">{errors.password.message}</p>
              )}
        <div className="flex items-center justify-center mt-10">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg"
          >
            Sign Up 
          </button>
        </div>

        <div className="pt-6 text-center justify-center">
        <p>Already have an account?</p>
        <Link to="/login" className="underline">
          Login
        </Link>
      </div>
      </form>
    </div>
  )
}

export default SignUp