import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../src/hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const { createUser, googleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [profilePic, setProfilePic] = useState("");

  const onSubmit = (data) => {
    createUser(data.email, data.password).then(async (result) => {
      const user = result.user;

      const userInfo = {
        email: user.email,
        role: "user",
        profilePic: profilePic,
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      await axiosSecure.post("/users", userInfo);

      // Firebase updateProfile
      updateProfile(user, {
        displayName: data.name,
        photoURL: profilePic,
      })
        .then(() => {
          toast.success("User Registration Successful!");
          navigate(location.state || "/");
        })
        .catch((err) => console.error(err));
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host_key
      }`,
      formData
    );
    setProfilePic(res.data.data.url);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Google sign in successful!");
        navigate(location.state || "/");
        console.log(result);
      })
      .catch(console.log);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-secondary"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">Name is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Photo Upload</label>
            <input
              type="file"
              className="input w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-secondary"
              onChange={handleImageUpload}
              accept="image/*"
            />
            {errors.photo && (
              <p className="text-sm text-red-500 mt-1">Photo is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-secondary"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">Email is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-secondary"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password?.type === "required" && (
              <p className="text-sm text-red-500 mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-sm text-red-500 mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 cursor-pointer"
          >
            Register
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-black border border-gray-300 py-2 rounded flex items-center justify-center mt-2"
        >
          Continue with Google
        </button>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-yellow-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
