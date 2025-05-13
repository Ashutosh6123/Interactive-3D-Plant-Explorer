
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { Leaf } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background nature-gradient flex flex-col items-center justify-center text-center p-4">
      <div className="animate-fade-in space-y-6 max-w-md">
        <div className="mx-auto flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
          <Leaf className="w-12 h-12 text-primary/60" />
        </div>
        <h1 className="text-4xl font-bold">404: Page Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8">
          The page you're looking for has either been moved or doesn't exist in our garden.
        </p>
        <Button variant="gradient" size="lg" to="/">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
