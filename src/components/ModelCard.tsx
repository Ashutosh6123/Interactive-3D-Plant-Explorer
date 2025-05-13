
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface ModelCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const ModelCard = ({ id, title, description, imageUrl, className }: ModelCardProps) => {
  return (
    <Link 
      to={`/model/${id}`}
      className={cn(
        "block rounded-xl overflow-hidden card-hover bg-card border border-border",
        className
      )}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
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
