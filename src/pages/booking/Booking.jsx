import React from "react";
import { useForm } from "react-hook-form";
import { MapPin, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import bgImg from "../../assets/assets/bg-img.png";

const Booking = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const axiosInstance = useAxiosSecure();
  const { user } = useAuth();
  const passengers = watch("passengers", 1);
  const ticketPrice = 5000;
  const totalPrice = passengers * ticketPrice;

  const onSubmit = async (data) => {
    const photoURL = user?.photoURL;
    const email = user?.email;
    const displayName = user?.displayName;
    const userInfo = {
      totalPrice,
      photoURL,
      email,
      displayName,
      ...data,
      paymentStatus: "unpaid",
    };
    axiosInstance.post("/bookings", userInfo);
    toast.success("Successfully Added");
    // navigate AFTER success
    navigate("/dashboard/all-bookings");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="h-screen bg-center bg-cover bg-no-repeat  pt-4 md:pt-12 min-h-screen flex items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-11/12 mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-6/12 text-white space-y-6 text-center md:text-justify mb-8 md:mb-0">
          <h3 className="text-3xl md:text-6xl font-semibold">COX'S BAZAR</h3>
          <p className="md:w-10/12 text-lg">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach...
          </p>
        </div>

        <div className="w-full md:max-w-md bg-white rounded-xl shadow-lg">
          <div className="p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Origin & Destination Row */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                {/* Origin */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs font-medium">Origin</span>
                  </div>
                  <select
                    {...register("from", { required: "Please select origin" })}
                    className="w-full text-lg font-semibold text-gray-900 border-b border-gray-300 focus:outline-none focus:border-green-500 py-1 bg-transparent"
                  >
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                  </select>
                  {errors.from && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.from.message}
                    </p>
                  )}
                </div>

                {/* Destination */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs font-medium">Destination</span>
                  </div>
                  <select
                    {...register("to", {
                      required: "Please select destination",
                    })}
                    className="w-full text-lg font-semibold text-gray-900 border-b border-gray-300 focus:outline-none focus:border-green-500 py-1 bg-transparent"
                  >
                    <option value="Cox's Bazar">Cox's Bazar</option>
                    <option value="Saint Martin">Saint Martin</option>
                    <option value="Bandarban">Bandarban</option>
                    <option value="Rangamati">Rangamati</option>
                    <option value="Sundarban">Sundarban</option>
                  </select>
                  {errors.to && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.to.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Dates Row */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                {/* Departure Date */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-xs font-medium">From</span>
                  </div>
                  <input
                    type="date"
                    {...register("departureDate", {
                      required: "Departure date is required",
                      min: {
                        value: today,
                        message: "Cannot select past dates",
                      },
                    })}
                    min={today}
                    className="w-full text-sm font-medium text-gray-900 border-b border-gray-300 focus:outline-none focus:border-green-500 py-1"
                  />
                  {errors.departureDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.departureDate.message}
                    </p>
                  )}
                </div>

                {/* Return Date */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-xs font-medium">To</span>
                  </div>
                  <input
                    type="date"
                    {...register("returnDate")}
                    min={today}
                    className="w-full text-sm font-medium text-gray-900 border-b border-gray-300 focus:outline-none focus:border-green-500 py-1"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Passengers & Button Row */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                {/* Passengers */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span className="text-xs font-medium">Passengers</span>
                  </div>
                  <select
                    {...register("passengers", {
                      required: "Please select passengers",
                      min: {
                        value: 1,
                        message: "Minimum 1 passenger required",
                      },
                      max: {
                        value: 8,
                        message: "Maximum 8 passengers allowed",
                      },
                    })}
                    className="w-full text-lg font-semibold text-gray-900 border-b border-gray-300 focus:outline-none focus:border-green-500 py-1 bg-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                  {errors.passengers && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.passengers.message}
                    </p>
                  )}
                </div>

                {/* Price Display */}
                <div className="flex-1">
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Total Amount</div>
                    <div className="text-lg font-bold text-green-600">
                      ৳{totalPrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200 shadow-md"
                >
                  Start Booking - ৳{totalPrice.toLocaleString()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
