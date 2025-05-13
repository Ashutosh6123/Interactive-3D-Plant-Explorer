
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-4">
      <div className="animate-fade-in space-y-6 max-w-md">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl opacity-60"></div>
        <h1 className="text-4xl font-bold">404: Page Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="gradient" size="lg" as={Link} to="/">
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
