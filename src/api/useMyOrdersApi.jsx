import useAxiosSecure from '../hooks/useAxiosSecure';

const useMyOrdersApi = () => {
    const axiosSecure = useAxiosSecure();

    const myOrdersPromise = email => {
        return axiosSecure.get(`${import.meta.env.VITE_API_URL}/my-orders?email=${email}`)
            .then(res => res.data)
            
    }

    return {
        myOrdersPromise
    };
};

export default useMyOrdersApi;