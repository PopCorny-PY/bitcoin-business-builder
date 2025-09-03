import { Button } from "@/components/ui/button";
import { ArrowRight, Bitcoin, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/bitcoin-hero.jpg";
import BitcoinLogo from '../assets/images/bitcoin-logo-shop-brand.png';
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";


export const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20 dark:from-gray-900 dark:to-gray-800">
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Bitcoin entrepreneurship journey"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 gradient-hero opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white animate-bitcoin-pulse">
              <img src={BitcoinLogo} alt="Bitcoin Logo" className="w-13 h-12" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-gray-100 mb-6">
            {t('hero.title1')}
            <span className="gradient-primary bg-clip-text text-transparent"> {t('hero.title2')} </span>
            {t('hero.title3')}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')} 
            <strong> {t('hero.subtitle2')}</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/iniciar-jornada">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                {t('hero.startJourney')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-gradient-to-l hover:from-[#0A2540]/80 hover:to-[#0A2540]/20 transition-all duration-500">
                {t('hero.viewDemo')}
              </Button>
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Link to="/wallets-nao-custodiais">
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-[#0A2540]/20 cursor-pointer">
                <Shield className="w-6 h-6 text-primary-glow transition-colors duration-300 hover:text-[#0A2540]" />
                <span className="text-white font-medium">Wallets Não-Custodiais</span>
              </div>
            </Link>
            <Link to="/pagamentos-instantaneos">
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-[#0A2540]/20 cursor-pointer">
                <Zap className="w-6 h-6 text-primary-glow transition-colors duration-300 hover:text-[#0A2540]" />
                <span className="text-white font-medium">Pagamentos Instantâneos</span>
              </div>
            </Link>
            <Link to="/open-source">
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-[#0A2540]/20 cursor-pointer">
                <Bitcoin className="w-6 h-6 text-primary-glow transition-colors duration-300 hover:text-[#0A2540]" />
                <span className="text-white font-medium">Open Source</span>
              </div>
            </Link>
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