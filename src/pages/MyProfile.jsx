
import { FaBackward, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const MyProfile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    return (
        <div className="mt-16 py-10 md:py-20 px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
            <title>{user.displayName}</title>
            <Link
                className="mb-6 flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors"
                onClick={() => navigate(-1)}
            >
                <FaBackward/> Back
            </Link>
            <div className=" py-10 px-4 md:px-6 bg-secondary/5 rounded-md shadow-md border border-secondary/20">
                <div className="flex flex-col items-center gap-4">
                    {user?.photoURL ? (
                        <img
                            src={user?.photoURL}
                            alt={user?.displayName || user?.email}
                            className="w-30 h-30 p-2 rounded-full border-4 border-secondary object-cover shadow"
                            onError={e => { e.target.onerror = null; e.target.style.display = 'none'; e.target.parentNode.querySelector('.fallback-avatar').style.display = 'flex'; }}
                        />
                    ) : null}
                    {/* Fallback Avatar */}
                    <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-secondary text-secondary shadow fallback-avatar" style={{display: user?.photoURL ? 'none' : 'flex'}}>
                        <FaUser className="w-16 h-16" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">{user?.displayName || 'Anonymous User'}</h2>
                    <p className="text-secondary text-sm">{user?.email}</p>
                </div>
                <div className="mt-8 space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-primary">Name:</span>
                        <span>{user?.displayName || 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-primary">Email:</span>
                        <button
                            type="button"
                            className="text-secondary underline hover:text-primary focus:outline-none"
                            title="Copy email to clipboard"
                            onClick={() => {
                                if (user?.email) {
                                    navigator.clipboard.writeText(user.email);
                                }
                            }}
                        >
                            {user?.email || 'N/A'}
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-primary">Email Verified:</span>
                        <span>{user?.emailVerified ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-primary">Last Sign-in:</span>
                        <span>{user?.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true, year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-primary">Profile Created:</span>
                        <span>{user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleString(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true, year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;