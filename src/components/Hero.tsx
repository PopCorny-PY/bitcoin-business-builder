import { Button } from "@/components/ui/button";
import { ArrowRight, Bitcoin, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/bitcoin-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Bitcoin entrepreneurship journey"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 animate-bitcoin-pulse">
              <Bitcoin className="w-22 h-22 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            TransfORME seu
            <span className="gradient-primary bg-clip-text text-transparent"> Negócio </span>
            com Bitcoin
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Uma jornada guiada para implementar Bitcoin em seu negócio local. 
            <strong> Sem custódia, sem intermediários, apenas liberdade financeira.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Iniciar Jornada
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              Ver Demonstração
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Shield className="w-6 h-6 text-primary-glow" />
              <span className="text-white font-medium">Wallets Não-Custodiais</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="w-6 h-6 text-primary-glow" />
              <span className="text-white font-medium">Pagamentos Instantâneos</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Bitcoin className="w-6 h-6 text-primary-glow" />
              <span className="text-white font-medium">Open Source</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 hexagon w-16 h-16 bg-primary/20 animate-bitcoin-pulse"></div>
      <div className="absolute bottom-20 right-10 hexagon w-12 h-12 bg-primary/30 animate-bitcoin-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 hexagon w-8 h-8 bg-primary/40 animate-bitcoin-pulse" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
};