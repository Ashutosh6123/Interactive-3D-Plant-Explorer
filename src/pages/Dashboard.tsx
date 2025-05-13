
import { useEffect } from 'react';
import ModelCard from '@/components/ModelCard';

// Placeholder data for the models
const MODELS_DATA = [
  {
    id: "1",
    title: "Architectural Building",
    description: "Modern architectural design with detailed interior elements and structural components.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: "2",
    title: "Robotic Arm Assembly",
    description: "Detailed industrial robot arm with articulated joints and precise mechanical components.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    id: "3",
    title: "Human Anatomy Model",
    description: "Complete anatomical human model with detailed organ systems and skeletal structure.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "4",
    title: "Aerospace Craft",
    description: "Advanced spacecraft design with detailed propulsion systems and navigational components.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: "5",
    title: "Molecular Structure",
    description: "Complex molecular compound with accurate atomic structure and bonding visualization.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: "6",
    title: "Classic Sports Car",
    description: "Vintage sports car with detailed interior and mechanical parts fully modeled.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  }
];

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | 3D Model Explorer";
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-3">3D Model Dashboard</h1>
          <p className="text-muted-foreground">
            Explore our collection of interactive 3D models
          </p>
        </div>
        
        {/* Models grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODELS_DATA.map((model, index) => (
            <div key={model.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ModelCard
                id={model.id}
                title={model.title}
                description={model.description}
                imageUrl={model.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
