
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { ArrowLeft, Info } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';

// Refactored models data with structured description objects
const MODELS_DATA = [
  {
    id: "1",
    title: "Philodendron",
    description: {
      botanical_name: "Philodendron sp.",
      common_name: "Philodendron",
      family: "Araceae (Arum family)",
      origin: "Tropical regions of Central and South America",
      growth_habit: "Can be climbing/trailing vines or self-heading (non-climbing) bushy plants depending on the species",
      foliage: "Highly variable in size, shape, and color; often heart-shaped, sometimes with dramatic splits or holes",
      light: "Thrives in bright, indirect light but can tolerate lower light conditions",
      water: "Prefers well-draining soil that's kept moderately moist; allow top inch to dry between waterings",
      temperature: "Ideally between 65°F and 85°F (18°C to 29°C); protect from cold drafts",
      humidity: "Appreciates higher humidity but adapts to average home conditions",
      toxicity: "**Poisonous** to humans, cats, and dogs if ingested, containing calcium oxalate crystals",
      uses: "Popular houseplants for their decorative foliage; some varieties can purify indoor air"
    },
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Tropical", "Houseplant", "Foliage"],
    splineUrl: "https://my.spline.design/3philodendrons-kSXrOPVluBO9kiPJrGdaCrUw/"
  },
  {
    id: "2",
    title: "Monstera Deliciosa",
    description: {
      botanical_name: "Monstera deliciosa",
      common_name: "Swiss Cheese Plant, Split-leaf Philodendron",
      family: "Araceae (Arum family)",
      origin: "Southern Mexico to Panama",
      growth_habit: "Climbing evergreen tropical vine that can reach 70 feet in its natural habitat",
      foliage: "Large, glossy, heart-shaped leaves with characteristic splits and holes (fenestrations)",
      light: "Bright, indirect light; can tolerate some direct morning sun but avoid harsh afternoon light",
      water: "Water when the top 1-2 inches of soil are dry; reduce watering in winter",
      temperature: "65°F to 85°F (18°C to 29°C); not cold tolerant below 55°F (13°C)",
      humidity: "Prefers higher humidity but adaptable to average home conditions",
      toxicity: "**Mildly toxic** to pets and humans if ingested, causing oral irritation",
      uses: "Popular statement houseplant; dramatic foliage adds tropical aesthetic to interiors"
    },
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["Tropical", "Statement Plant", "Climbing"],
    splineUrl: "https://my.spline.design/3philodendrons-kSXrOPVluBO9kiPJrGdaCrUw/"
  },
  {
    id: "3",
    title: "Snake Plant",
    description: {
      botanical_name: "Dracaena trifasciata (formerly Sansevieria trifasciata)",
      common_name: "Snake Plant, Mother-in-law's Tongue",
      family: "Asparagaceae",
      origin: "West Africa, from Nigeria to Congo",
      growth_habit: "Upright, sword-like leaves growing from a rhizomatous base",
      foliage: "Stiff, erect, sword-shaped leaves with dark green bands and yellow margins in some varieties",
      light: "Adaptable to various light conditions from bright indirect light to low light",
      water: "Drought tolerant; water only when soil is completely dry, about every 2-8 weeks",
      temperature: "60°F to 85°F (15°C to 29°C); can survive brief periods down to 50°F (10°C)",
      humidity: "Very adaptable to dry environments, perfect for low humidity homes",
      toxicity: "**Mildly toxic** to pets if ingested, causing nausea and diarrhea",
      uses: "Excellent air purifier, removing toxins like formaldehyde; perfect for beginners and low-maintenance environments"
    },
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Low Maintenance", "Air Purifying", "Drought Tolerant"],
    splineUrl: "https://my.spline.design/braidatahydroponicsystem-1OwpfrgnAVxSuV97qhUFt5dh/"
  },
  {
    id: "4",
    title: "Fiddle Leaf Fig",
    description: {
      botanical_name: "Ficus lyrata",
      common_name: "Fiddle Leaf Fig",
      family: "Moraceae (Fig family)",
      origin: "Western Africa, from Sierra Leone to Cameroon",
      growth_habit: "Tree-like with a single trunk, can reach 40+ feet in nature but typically 6-10 feet indoors",
      foliage: "Large, violin-shaped glossy leaves with prominent veining, up to 18 inches long",
      light: "Bright, indirect light; morning direct sun is beneficial but avoid harsh afternoon sun",
      water: "Allow top 1-2 inches of soil to dry between waterings; sensitive to overwatering",
      temperature: "60°F to 75°F (15°C to 24°C); avoid drafts and sudden temperature changes",
      humidity: "Moderate to high humidity preferred; benefits from occasional misting",
      toxicity: "**Mildly toxic** to pets and humans due to sap containing ficin",
      uses: "Popular statement houseplant in interior design; creates dramatic vertical accent"
    },
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Statement Plant", "Indoor Tree", "Tropical"],
    splineUrl: "https://my.spline.design/clonergrasscopygrass-1Xqmx3OhcSeh0dG3aYpZIXSm/"
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
        document.title = `${foundModel.title} | Plant Explorer`;
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
        <Button variant="default" to="/dashboard">
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
          <Button variant="ghost" to="/dashboard" className="group">
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Model Viewer */}
          <div className="bg-card border border-border rounded-xl overflow-hidden aspect-square lg:aspect-auto lg:min-h-[600px] animate-fade-in">
            <iframe 
              src={model.splineUrl} 
              title={`${model.title} 3D Model`}
              frameBorder="0" 
              width="100%" 
              height="100%" 
              allowFullScreen
              className="w-full h-full min-h-[600px]"
            />
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
            
            {/* Structured plant information */}
            <div className="prose max-w-none">
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Plant Information
              </h2>
              
              <div className="nature-card p-5 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4">
                  {Object.entries(model.description).map(([key, value]) => {
                    // Format the key label for display (capitalize, replace underscores with spaces)
                    const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                    
                    // Check if this is the toxicity field to apply special styling
                    const isToxicity = key === 'toxicity';
                    
                    return (
                      <div key={key} className={`contents ${isToxicity ? 'text-red-600' : ''}`}>
                        <div className="font-medium">{label}</div>
                        <div className={`${isToxicity ? 'text-red-600 font-medium' : ''}`}>
                          {value.toString().replace(/\*\*(.*?)\*\*/g, '$1')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Additional details - specification section can stay */}
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
