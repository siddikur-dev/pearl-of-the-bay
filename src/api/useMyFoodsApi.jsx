import useAxiosSecure from "../hooks/useAxiosSecure";


const useMytravel sApi = () => {
    const axiosSecure = useAxiosSecure();

    const mytravel sPromise = email => {
        return axiosSecure.get(`${import.meta.env.VITE_API_URL}/my-travel s?email=${email}`)
            .then(res => res.data)
            
    }

    return {
        mytravel sPromise
    };
};

export default useMytravel sApi;