import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

interface JourneyStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  current?: boolean;
}

interface BitcoinJourneyCardProps {
  step: JourneyStep;
  onClick: () => void;
}

export const BitcoinJourneyCard = ({ step, onClick }: BitcoinJourneyCardProps) => {
  return (
    <div 
      className={`
        group relative p-6 rounded-xl border transition-smooth cursor-pointer
        ${step.current 
          ? 'border-primary shadow-bitcoin bg-gradient-to-br from-card to-card-accent' 
          : 'border-border hover:border-primary/50 bg-card'
        }
        ${step.completed ? 'bg-success/5 border-success/20' : ''}
      `}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          {step.completed ? (
            <CheckCircle className="w-6 h-6 text-success" />
          ) : (
            <Circle className={`w-6 h-6 ${step.current ? 'text-primary' : 'text-muted-foreground'}`} />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-semibold mb-2 ${step.current ? 'text-primary' : 'text-foreground'}`}>
            {step.title}
          </h3>
          <p className="text-muted-foreground text-body mb-4">
            {step.description}
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <span className={step.current ? 'text-primary font-medium' : 'text-muted-foreground'}>
              {step.completed ? 'Concluído' : step.current ? 'Atual' : 'Pendente'}
            </span>
            <ArrowRight className={`w-4 h-4 transition-smooth group-hover:translate-x-1 ${
              step.current ? 'text-primary' : 'text-muted-foreground'
            }`} />
          </div>
        </div>
      </div>
      
      {step.current && (
        <div className="absolute -top-2 -right-2">
          <div className="hexagon w-6 h-6 bg-primary animate-bitcoin-pulse"></div>
        </div>
      )}
    </div>
  );
};