import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from 'lucide-react';
import { apiSignUp } from "../../services/auth";
import Loader from "../../components/Loader";

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        let payload = {
            username: data.username,
            password: data.password,
            email: data.email
        };

        try {
            const res = await apiSignUp(payload);
            console.log(res.data);
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
        <div className="flex flex-col items-center justify-center h-screen bg-[#12095D]">
            <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-lg">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            {...register("username", { required: "Username is required" })}
                        />
                        {errors.username && <p className="text-red-500 mt-1">{errors.username.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            {...register("password", { 
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long'
                                }
                            })}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pt-8 pr-3 flex items-center justify-center text-sm leading-5 focus:outline-none text-gray-500"
                        >
                            {showPassword ? <Eye /> : <EyeOff />}
                        </button>
                        {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg transition duration-300"
                        >
                            {isSubmitting ? <Loader /> : "Sign Up"}
                        </button>
                    </div>
                    <div className="pt-6 text-center">
                        <p className="text-gray-700">Already have an account?</p>
                        <Link to="/login" className="text-blue-600 underline hover:text-blue-800">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
