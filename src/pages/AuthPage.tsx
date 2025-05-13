
import { useEffect } from "react";
import { SignIn } from "@clerk/clerk-react";

const AuthPage = () => {
  useEffect(() => {
    document.title = "Sign In | 3D Model Explorer";
  }, []);

  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md hover:shadow-lg hover:brightness-110",
              footerActionLink: "text-primary hover:text-primary",
            },
          }}
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
};

export default AuthPage;
