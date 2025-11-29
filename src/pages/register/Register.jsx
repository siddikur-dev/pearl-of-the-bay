import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router";
import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, signInGoogle, updateUser } = useAuth();
  const [profilePic, setProfilePic] = useState("");
  const axiosInstance = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then(async (result) => {
        const user = result.user;

        const userInfo = {
          email: user.email,
          role: "user",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        await axiosInstance.post("/users", userInfo);

        // Firebase updateProfile
        updateProfile(user, {
          displayName: data.name,
          photoURL: profilePic,
        })
          .then(() => {
            toast.success("User Registration Successful!");
            navigate(from || "/");
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          role: "user",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        axiosInstance.post("/users", userInfo).then(() => {
          navigate(location.state || "/");
          toast.success("Sign In With Google Successfully");
        });
      })
      .catch((error) => console.log(error));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=da562d0595e152d255b05d52a0cf967d`,
      formData
    );

    setProfilePic(res.data.data.url);
  };
  console.log(handleRegister);

  return (
    <div className="card mt-6 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="text-center font-semibold text-xl md:text-2xl">
          Create Your Account
        </h3>

        <form onSubmit={handleSubmit(handleRegister)} className="fieldset mt-2">
          {/* Name */}
          <label className="label font-semibold text-sm">Full Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input focus:outline-none focus:shadow-outline focus:border-2"
            placeholder="Enter Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">Name is required</p>
          )}

          {/* Image Upload */}
          <label className="label font-semibold text-sm mt-3">
            Profile Picture
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="input focus:outline-none focus:shadow-outline focus:border-2"
            accept="image/*"
          />

          {/* Email */}
          <label className="label font-semibold text-sm mt-3">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="input focus:outline-none focus:shadow-outline focus:border-2"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="label font-semibold text-sm mt-3">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input focus:outline-none focus:shadow-outline focus:border-2"
            placeholder="Enter Your Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-1">
              Minimum 6 characters required
            </p>
          )}

          <button className="btn btn-neutral mt-4 w-full">Register</button>

          <p className="text-center mt-4 text-sm">
            Already have an account?
            <Link to="/login" className="text-yellow-400 ml-1">
              Login
            </Link>
          </p>

          <div className="divider">Or</div>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="btn bg-white text-black border-2 border-[#e5e5e5] w-full"
          >
            <FcGoogle size={20} /> Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
