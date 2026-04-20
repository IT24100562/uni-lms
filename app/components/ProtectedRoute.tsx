import { useNavigate } from "react-router";
import { useAuth, type UserRole } from "../context/AuthContext";

interface ProtectedRouteProps {
  allowedRoles: UserRole[];
  children: React.ReactNode;
}

export function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
  const { role, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Login Required</h1>
          <p className="text-slate-600 mt-2">Please login through LMS Login in the header to access this module.</p>
          <button onClick={() => navigate("/")} className="mt-5 px-5 py-2.5 rounded-lg bg-teal-500 text-white hover:bg-teal-600">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!role || !allowedRoles.includes(role)) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Access Restricted</h1>
          <p className="text-slate-600 mt-2">Your current role does not have permission for this section. Switch role from LMS Login if you need management access.</p>
          <button onClick={() => navigate("/")} className="mt-5 px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-700">
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
