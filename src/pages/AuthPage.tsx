
import { useEffect } from "react";
import { SignIn } from "@clerk/clerk-react";
import { Leaf } from "lucide-react";

const AuthPage = () => {
  useEffect(() => {
    document.title = "Sign In | Plant Explorer";
  }, []);

  return (
    <div className="bg-background nature-gradient min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Leaf className="w-6 h-6 text-primary" />
          </span>
        </div>
        <h1 className="text-2xl font-bold">Plant Explorer</h1>
        <p className="text-muted-foreground">Sign in to access interactive 3D plant models</p>
      </div>
      <div className="w-full max-w-md nature-card organic-shadow p-1">
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
