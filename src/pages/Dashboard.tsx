
import { useEffect } from 'react';
import ModelCard from '@/components/ModelCard';
import ContactSection from '@/components/ContactSection';
import { Leaf } from 'lucide-react';

// Updated model data with local image filenames
const MODELS_DATA = [
  {
    id: "1",
    title: "Philodendron",
    description: "Detailed 3D model of Philodendron Plant.",
    image: "philodendron.jpg"
  },
  {
    id: "2",
    title: "Monstera Deliciosa",
    description: "Interactive model of Monstera deliciosa demonstrating its unique leaf fenestration patterns.",
    image: "monstera.jpg"
  },
  {
    id: "3",
    title: "Snake Plant",
    description: "Complete 3D model of Dracaena trifasciata with detailed leaf structures and growing patterns.",
    image: "snake-plant.jpg"
  },
  {
    id: "4",
    title: "Fiddle Leaf Fig",
    description: "Scaled model of Ficus lyrata showing its characteristic large leaves and growth patterns.",
    image: "fiddle-leaf.jpg"
  },
  {
    id: "5",
    title: "Water Lily",
    description: "Aquatic plant model of Nymphaea showing both underwater structures and floating leaf patterns.",
    image: "philodendron.jpg" // Reusing philodendron image as placeholder
  },
  {
    id: "6",
    title: "Orchid Collection",
    description: "Various orchid species with detailed flower structures and root systems fully modeled in 3D.",
    image: "monstera.jpg" // Reusing monstera image as placeholder
  }
];

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Plant 3D Explorer";
  }, []);

  return (
    <div className="bg-background min-h-screen nature-gradient">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <Leaf className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Plant Explorer</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Explore our collection of interactive 3D plant models and discover the beauty of botanical structures
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
                image={model.image}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Dashboard;
