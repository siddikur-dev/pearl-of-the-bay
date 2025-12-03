import { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaShieldAlt,
  FaCamera,
} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editForm, setEditForm] = useState({
    displayName: "",
    phone: "",
    address: "",
  });
  const axiosSecure = useAxiosSecure();

  // Fetch user data from database
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/users/${user.email}`)
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          // Set default values if user data not found
          setUserData({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role: "user",
            created_at: user.metadata?.creationTime,
          });
          setEditForm({
            displayName: user.displayName || "",
            phone: "",
            address: "",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user, axiosSecure]);

  console.log(user);
  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-secondary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-600">
            Manage your account information and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                {/* Profile Image */}
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary">
                    {userData?.photoURL || user?.photoURL ? (
                      <img
                        src={userData?.photoURL || user?.photoURL}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <FaUser className="text-4xl text-gray-400" />
                      </div>
                    )}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full hover:bg-secondary/80 transition-colors">
                    <FaCamera size={16} />
                  </button>
                </div>

                {/* User Name */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {userData?.displayName || user?.displayName || "User"}
                </h2>

                {/* Role Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${userData?.role}`}
                  >
                    <FaShieldAlt className="mr-2" />
                    {userData?.role?.charAt(0).toUpperCase() +
                      userData?.role?.slice(1) || "User"}
                  </span>
                </div>

                {/* Member Since */}
                <div className="text-sm text-gray-500 mb-4">
                  <FaCalendarAlt className="inline mr-1" />
                  Member since {formatDate(userData?.created_at)}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Profile Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <FaEnvelope className="text-secondary text-xl mr-4" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium text-gray-800">
                      {userData?.email || user?.email}
                    </p>
                  </div>
                </div>

                {/* Display Name */}
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <FaUser className="text-secondary text-xl mr-4" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-800">
                      {userData?.displayName || user?.displayName || "Not set"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
