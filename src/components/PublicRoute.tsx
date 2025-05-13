
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isLoaded, userId } = useAuth();
  const [hasKey, setHasKey] = useState(true);
  
  useEffect(() => {
    // Check if the Clerk key exists
    const key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
    setHasKey(!!key);
  }, []);
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  // If we're in development and missing the API key, just render children
  if (!hasKey && import.meta.env.DEV) {
    return <>{children}</>;
  }

  if (userId) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
