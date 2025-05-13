
import { ClerkProvider } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";

// Get the publishable key from environment variable
// In a real app, this would be in an .env file
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [showedWarning, setShowedWarning] = useState(false);
  
  useEffect(() => {
    // Show a warning toast if the key is missing
    if (!PUBLISHABLE_KEY && !showedWarning) {
      toast.warning(
        "Missing Clerk API key. Please set VITE_CLERK_PUBLISHABLE_KEY environment variable.",
        {
          description: "Authentication features will not work properly.",
          duration: 6000,
        }
      );
      setShowedWarning(true);
    }
  }, [showedWarning]);

  // Use a mock key if none is provided (this won't authenticate with Clerk but prevents the app from crashing)
  const safeKey = PUBLISHABLE_KEY || "pk_test_mock_key_for_demo_purposes";

  return (
    <ClerkProvider publishableKey={safeKey}>
      {children}
    </ClerkProvider>
  );
};
