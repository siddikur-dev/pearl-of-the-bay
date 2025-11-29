import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [error, setError] = useState("");
  const { setUser, signInWithMailPass, createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target; //just for reuseable
    const email = form.email.value;
    const password = form.password.value;
    signInWithMailPass(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        alert(currentUser);
        // when user come from another pages that time after complete login redirect this pages
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  const handleGoogleLogin = () => {
    createUser()
      .then((result) => {
        setUser(result);
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card mt-6 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="text-center font-semibold text-xl md:text-2xl">
          Login Your Account
        </h3>
        <form onSubmit={handleLogin} className="fieldset mt-2">
          {/* email  */}
          <label className="label font-semibold text-sm">Email</label>
          <input
            name="email"
            type="email"
            className="input focus:outline-none focus:shadow-outline focus:border-2"
            placeholder="Enter Your Email"
            required
          />
          {/* password  */}
          <label className="label font-semibold text-sm">Password</label>
          <input
            name="password"
            type="password"
            className="input focus:outline-none focus:shadow-outline focus:border-2"
            placeholder="Enter Your Password"
            required
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-2 border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="text-center mt-4">
            Don't have an Account?
            <Link to="/register" className="link link-hover text-yellow-400">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
