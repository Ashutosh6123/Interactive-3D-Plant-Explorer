
import { useEffect } from 'react';
import ModelCard from '@/components/ModelCard';
import ContactSection from '@/components/ContactSection';
import { Leaf } from 'lucide-react';

// Placeholder data for the models
const MODELS_DATA = [
  {
    id: "1",
    title: "Philodendron",
    description: "Detailed 3D model of Philodendron Plant.",
    imageUrl: "https://images.app.goo.gl/JYgWxiLtkRuaux5B7"
  },
  {
    id: "2",
    title: "Venus Flytrap",
    description: "Interactive model of Dionaea muscipula demonstrating its unique trap mechanism and digestive process.",
    imageUrl: "https://plantzone.in/product/monstera-deliciosa-plant/"
  },
  {
    id: "3",
    title: "Flowering Cherry",
    description: "Complete 3D model of Prunus serrulata with detailed blossom structures and growing patterns.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "4",
    title: "Giant Sequoia",
    description: "Scaled model of Sequoiadendron giganteum showing its massive trunk and characteristic canopy formation.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: "5",
    title: "Water Lily",
    description: "Aquatic plant model of Nymphaea showing both underwater structures and floating leaf patterns.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: "6",
    title: "Orchid Collection",
    description: "Various orchid species with detailed flower structures and root systems fully modeled in 3D.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
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
                imageUrl={model.imageUrl}
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
