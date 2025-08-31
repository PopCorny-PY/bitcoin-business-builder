import { Button } from "@/components/ui/button";
import { Bitcoin, Github, Heart } from "lucide-react";
import BitcoinLogo from '../assets/images/bitcoin-logo-bag-amarelo.png'; // Ajuste o caminho conforme a localização da imagem

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <img src={BitcoinLogo} alt="Bitcoin Logo" className="w-12 h-12" />
              </div>
              <span className="text-xl font-bold">ShopCenter Bitcoin</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Transformando negócios locais com a liberdade financeira do Bitcoin. 
              Uma plataforma open-source para o futuro da economia.
            </p>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
              <Github className="w-4 h-4" />
              Ver no GitHub
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <div className="space-y-3">
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                Guia de Implementação
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                Segurança em Bitcoin
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                Lightning Network
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                Casos de Uso
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                Documentação
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Comunidade</h3>
            <div className="space-y-3">
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                Telegram
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                Discord
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                Twitter
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                LinkedIn
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-smooth">
                Blog
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 ShopCenter Bitcoin. Feito com{" "}
            <Heart className="w-4 h-4 inline text-primary" />{" "}
            para a comunidade Bitcoin brasileira.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-smooth">
              Privacidade
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-smooth">
              Termos
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-smooth">
              Licença MIT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};