
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Import all images
import philodendronImg from '@/assets/images/philodendron.jpg';
import monsteraImg from '@/assets/images/Monstera.jpg';
import snakePlantImg from '@/assets/images/snakePlant.jpg';
import fiddleLeafImg from '@/assets/images/fiddleLeaf.jpeg';

// Image mapping object to access images by name
const imageMap: Record<string, string> = {
  'philodendron.jpg': philodendronImg,
  'Monstera.jpg': monsteraImg,
  'snakePlant.jpg': snakePlantImg,
  'fiddleLeaf.jpeg': fiddleLeafImg,
};

export interface ModelCardProps {
  id: string;
  title: string;
  description: string;
  image: string; // Now references a local image filename
  className?: string;
}

const ModelCard = ({ id, title, description, image, className }: ModelCardProps) => {
  // Get the image source from our mapping
  const imageSrc = imageMap[image] || '';
  
  return (
    <Link 
      to={`/model/${id}`}
      className={cn(
        "block rounded-xl overflow-hidden card-hover nature-card",
        className
      )}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </div>
      
      {/* Subtle hover effect */}
      <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></div>
    </Link>
  );
};

export default ModelCard;
