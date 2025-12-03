import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleSignIn } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        toast.success("Logged In Successfully!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error("Login Failed!");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success('Google sign in successful!')
        navigate(location.state || "/");
      })
      .catch(console.log);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Login Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-secondary"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">Email is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-secondary"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password?.type === "required" && <p className="text-sm text-red-500 mt-1">Password is required</p>}
            {errors.password?.type === "minLength" && <p className="text-sm text-red-500 mt-1">Password must be at least 6 characters</p>}
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Login</button>
        </form>
        <button type="button" onClick={handleGoogleSignIn} className="w-full bg-white text-black border border-gray-300 py-2 rounded flex items-center justify-center mt-2">
          Continue with Google
        </button>
        <p className="text-center mt-4 text-sm">
          Don't have an account? <Link to="/auth/signup" className="text-yellow-400">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
