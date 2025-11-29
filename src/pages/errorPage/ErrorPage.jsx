import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/Navbar';

const ErrorPage = () => {

    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <div className='mt-4 px-4 md:px-6 lg:px-8 '>

                <div className="min-h-screen bg-gray-100 rounded-2xl flex flex-col justify-center items-center p-4 ">
                    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center duration-700 transform hover:-translate-y-2">
                        <div className="mb-6">
                            <svg
                                className="w-32 h-32 mx-auto"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Animated triangle */}
                                <path
                                    d="M50 10 L90 90 L10 90 Z"
                                    fill="none"
                                    stroke="#EF4444"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    className="animate-pulse"
                                />
                                {/* Animated exclamation mark */}
                                <path
                                    d="M50 35 V65"
                                    stroke="#EF4444"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                >
                                    <animate
                                        attributeName="d"
                                        values="M50 35 V65; M50 30 V70; M50 35 V65"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </path>
                                <circle
                                    cx="50"
                                    cy="75"
                                    r="3"
                                    fill="#EF4444"
                                    className="animate-bounce"
                                />
                            </svg>
                        </div>

                        <h1 className="text-3xl font-bold text-red-500 mb-2">404 - Page Not Found </h1>
                        <h2 className="text-xl text-gray-600 mb-6">Oops! Something went wrong</h2>
                        <p className="text-gray-500 mb-6">
                            We're sorry, but an unexpected error has occurred. Please try again
                            later.
                        </p>
                        <Link to='/' className='btn bg-red-500 text-white'> Back to Home </Link>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;