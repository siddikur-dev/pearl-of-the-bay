import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import {
  FaEye,
  FaTrash,
  FaFilter,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaCreditCard,
  FaUserFriends,
} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const AllBookings = () => {
  const axiosInstance = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const { user } = useAuth();

  const { data: allBookings = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/bookings/${user.email}`);
      return res.data;
    },
  });

  const filteredBookings = allBookings.filter((booking) => {
    const matchesSearch =
      booking.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.from?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.to?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const getPaymentStatusBadge = (status) => {
    const classes =
      status === "paid"
        ? "bg-green-100 text-green-700 border border-green-300"
        : "bg-red-100 text-red-700 border border-red-300";

    return (
      <span className={`px-3 py-1 text-xs rounded-full font-medium ${classes}`}>
        {status === "paid" ? (
          <FaCheckCircle className="inline mr-1" />
        ) : (
          <FaTimesCircle className="inline mr-1" />
        )}
        {status}
      </span>
    );
  };

  const handlePayment = (booking) => {
    const paymentInfo = {
      email: booking.email,
      _id: booking._id,
      displayName: booking.displayName,
      totalPrice: booking.totalPrice,
    };

    axiosInstance
      .post("/create-checkout-session", paymentInfo)
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch(() => toast.error("Payment initiation failed"));
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this booking?")) {
      axiosInstance
        .delete(`/bookings/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            toast.success("Booking deleted");
            refetch();
          }
        })
        .catch(() => toast.error("Failed to delete booking"));
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All Bookings</h2>
        <p className="text-gray-500">Total {filteredBookings.length} bookings found</p>
      </div>

      {/* Search Bar */}
      <div className="mb-5">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full px-10 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary/50 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
              <th className="p-3 text-center">Payment</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-500">
                  <FaFilter className="mx-auto text-4xl text-gray-300 mb-2" />
                  No bookings found
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {booking.displayName?.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <p className="font-semibold">{booking.displayName}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <FaUserFriends />
                        {booking.passengers} passenger
                      </p>
                    </div>
                  </td>

                  <td className="p-3 font-semibold">{booking.totalPrice}</td>

                  <td className="p-3">{getPaymentStatusBadge(booking.paymentStatus)}</td>

                  <td className="p-3 text-center">
                    <button
                      onClick={() => console.log("View", booking)}
                      className="px-3 py-1 text-blue-600 hover:bg-blue-100 rounded-lg"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="px-3 py-1 text-red-600 hover:bg-red-100 rounded-lg"
                    >
                      <FaTrash />
                    </button>
                  </td>

                  <td className="p-3 text-center">
                    {booking.paymentStatus === "unpaid" && (
                      <button
                        onClick={() => handlePayment(booking)}
                        className="px-3 py-1 bg-primary hover:bg-primary/80 rounded-lg flex items-center justify-center gap-2"
                      >
                        <FaCreditCard /> Pay
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookings;
