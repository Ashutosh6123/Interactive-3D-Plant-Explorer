
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { ArrowLeft } from 'lucide-react';

// Placeholder data for the models - in a real app this would come from an API
const MODELS_DATA = [
  {
    id: "1",
    title: "Architectural Building",
    description: "Modern architectural design with detailed interior elements and structural components. This model showcases contemporary design principles with an emphasis on sustainable materials and natural lighting. The structure features multiple floors with open plan spaces and advanced HVAC systems.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Architecture", "Modern", "Commercial"]
  },
  {
    id: "2",
    title: "Robotic Arm Assembly",
    description: "Detailed industrial robot arm with articulated joints and precise mechanical components. This model demonstrates a 6-axis robotic manipulator designed for manufacturing applications. Each joint is fully articulated with accurate range of motion constraints and detailed actuators.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["Robotics", "Engineering", "Industrial"]
  },
  {
    id: "3",
    title: "Human Anatomy Model",
    description: "Complete anatomical human model with detailed organ systems and skeletal structure. This educational model includes fully textured anatomical structures with labeled components. All major systems are represented with medical accuracy suitable for professional education.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Medical", "Anatomy", "Educational"]
  },
  {
    id: "4",
    title: "Aerospace Craft",
    description: "Advanced spacecraft design with detailed propulsion systems and navigational components. This conceptual model features realistic propulsion systems, life support modules, and external sensor arrays. The interior compartments are fully modeled with functional layouts.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Aerospace", "Engineering", "Concept"]
  },
  {
    id: "5",
    title: "Molecular Structure",
    description: "Complex molecular compound with accurate atomic structure and bonding visualization. This scientific model accurately represents atomic distances, bond angles, and electron density distributions. The structure can be viewed at multiple scales from individual atoms to complete protein complexes.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["Science", "Chemistry", "Molecular"]
  },
  {
    id: "6",
    title: "Classic Sports Car",
    description: "Vintage sports car with detailed interior and mechanical parts fully modeled. This automotive model includes a fully detailed engine compartment, working suspension system, and accurate interior with functional controls. The model is textured with historically accurate materials and finishes.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["Automotive", "Vintage", "Engineering"]
  }
];

const ModelPage = () => {
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState<typeof MODELS_DATA[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API fetch
    setIsLoading(true);
    setTimeout(() => {
      const foundModel = MODELS_DATA.find(m => m.id === id);
      setModel(foundModel || null);
      setIsLoading(false);
      if (foundModel) {
        document.title = `${foundModel.title} | 3D Model Explorer`;
      }
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!model) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Model Not Found</h2>
        <p className="text-muted-foreground mb-8">The model you're looking for doesn't exist or has been removed.</p>
        <Button variant="default" as={Link} to="/dashboard">
          Return to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-24">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" as={Link} to="/dashboard" className="group">
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Model Viewer (Placeholder) */}
          <div className="bg-card border border-border rounded-xl overflow-hidden aspect-square lg:aspect-auto lg:min-h-[600px] animate-fade-in">
            <img 
              src={model.imageUrl} 
              alt={model.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
              <div className="text-center p-8">
                <h3 className="text-xl font-medium mb-4">3D Viewer Placeholder</h3>
                <p className="text-muted-foreground mb-6">
                  This is where your 3D model viewer will be integrated.
                </p>
              </div>
            </div>
          </div>
          
          {/* Model Information */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h1 className="text-3xl font-bold mb-4">{model.title}</h1>
            
            <div className="mb-6">
              {model.tags.map(tag => (
                <span 
                  key={tag}
                  className="inline-block bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-xl font-medium mb-3">Description</h2>
              <p className="text-muted-foreground mb-6">{model.description}</p>
            </div>
            
            {/* Additional details */}
            <div className="mt-8">
              <h2 className="text-xl font-medium mb-3">Specifications</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="p-4 bg-card border border-border rounded-lg">
                  <span className="block text-sm text-muted-foreground">File Format</span>
                  <span className="font-medium">GLB/GLTF</span>
                </li>
                <li className="p-4 bg-card border border-border rounded-lg">
                  <span className="block text-sm text-muted-foreground">Polygon Count</span>
                  <span className="font-medium">128,450</span>
                </li>
                <li className="p-4 bg-card border border-border rounded-lg">
                  <span className="block text-sm text-muted-foreground">Texture Resolution</span>
                  <span className="font-medium">4K (4096×4096)</span>
                </li>
                <li className="p-4 bg-card border border-border rounded-lg">
                  <span className="block text-sm text-muted-foreground">Rigged</span>
                  <span className="font-medium">Yes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
