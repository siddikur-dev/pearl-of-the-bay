import axios from "axios";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_server_api,
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user?.accessToken}`;

    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      toast.error("mama logout kore dibo kintu")
      // if (error.status === 401 || error.status === 403) {
      //   logOut()
      //     .then(() => {
      //       Swal.fire({
      //         icon: "success",
      //         title: "sign out user for 401 status code",
      //         timer: 1500,
      //         showConfirmButton: false,
      //       });
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
