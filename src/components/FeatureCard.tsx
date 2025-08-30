import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

export const FeatureCard = ({ icon: Icon, title, description, gradient = false }: FeatureCardProps) => {
  return (
    <div className={`
      p-6 rounded-xl border transition-smooth hover:shadow-elegant group
      ${gradient 
        ? 'gradient-subtle border-primary/20' 
        : 'bg-card border-border hover:border-primary/30'
      }
    `}>
      <div className="flex items-start gap-4">
        <div className={`
          p-3 rounded-lg transition-smooth
          ${gradient 
            ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
            : 'bg-accent text-accent-foreground group-hover:bg-primary/10 group-hover:text-primary'
          }
        `}>
          <Icon className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-body">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};