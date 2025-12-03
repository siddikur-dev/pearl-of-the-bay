import { Link, useRouteError } from 'react-router';
import Button from '../components/ui/Button';
import notFoundLottie from '../assets/lotties/not-found.json';
import Lottie from 'lottie-react';

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <title>404 Not Found</title>
            <div className=" min-h-[calc(100vh-85px)] flex flex-col items-center justify-center bg-base-100 px-4 py-12">
               <div className='w-100 h-100 mb-8'>
                 <Lottie animationData={notFoundLottie} ></Lottie>
               </div>
                <h2 className="text-2xl font-semibold text-secondasry mb-2">Oops! {error?.error?.message || 'Something went wrong!'}</h2>
                <p className="text-secondary text-center max-w-md mb-6">
                    The page you're looking for doesn't exist or has been moved. Let's get you back to something tasty.
                </p>
                <Link to='/'><Button label={'Back to Home'} /></Link>
            </div>
        </div>
    );

};

export default ErrorPage;