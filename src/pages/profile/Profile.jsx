import {
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user, loading } = useAuth();

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

        <div className=" gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                {/* Profile Image */}
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden ">
                    <img
                      src={user?.photoURL || user?.photoURL}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* User Name */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-4">
                  {user?.displayName || user?.displayName || "User"}
                </h2>

                {/* Member Since */}
                <div className="text-sm text-gray-500 mb-4">
                  <p>Member since at</p>
                  <FaCalendarAlt className="inline mr-1" />
                  {new Date(user?.metadata.creationTime).toLocaleDateString(
                    "en-US"
                  ) +
                    " " +
                    new Date(user?.metadata.creationTime).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )}
                </div>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center justify-center gap-2 text-center rounded-lg">
                  <FaEnvelope />
                  <div>
                    <span className="font-medium text-gray-800">
                      {user?.email || user?.email}
                    </span>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
