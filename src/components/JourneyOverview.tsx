import { useState } from "react";
import { BitcoinJourneyCard } from "./BitcoinJourneyCard";
import { FeatureCard } from "./FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wallet, 
  Settings, 
  CreditCard, 
  Users, 
  BarChart3, 
  Shield,
  BookOpen,
  Lightbulb,
  Target
} from "lucide-react";

const journeySteps = [
  {
    id: "understanding",
    title: "Entendendo o Bitcoin",
    description: "Aprenda os fundamentos do Bitcoin, carteiras não-custodiais e princípios de descentralização para seu negócio.",
    completed: false,
    current: true
  },
  {
    id: "wallet-setup",
    title: "Configuração de Carteira",
    description: "Configure uma carteira Bitcoin segura para seu negócio, priorizando soluções não-custodiais.",
    completed: false,
    current: false
  },
  {
    id: "payment-integration",
    title: "Integração de Pagamentos",
    description: "Implemente soluções de pagamento Bitcoin em seu negócio usando Lightning Network para transações rápidas.",
    completed: false,
    current: false
  },
  {
    id: "customer-education",
    title: "Educação do Cliente",
    description: "Crie estratégias para educar seus clientes sobre Bitcoin e facilitar a adoção em seu negócio.",
    completed: false,
    current: false
  },
  {
    id: "analytics",
    title: "Análise e Crescimento",
    description: "Monitore o desempenho dos pagamentos Bitcoin e otimize sua estratégia para aumentar a adoção.",
    completed: false,
    current: false
  }
];

const features = [
  {
    icon: BookOpen,
    title: "Educação Prática",
    description: "Conteúdo educativo com foco em aplicação real para negócios locais brasileiros."
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description: "Wallets não-custodiais e melhores práticas de segurança para proteger seu Bitcoin."
  },
  {
    icon: Lightbulb,
    title: "Implementação Simples",
    description: "Ferramentas e tutoriais para implementar Bitcoin sem conhecimento técnico avançado."
  },
  {
    icon: Target,
    title: "Foco no Resultado",
    description: "Check-lists práticos para garantir que cada etapa seja concluída com sucesso."
  }
];

export const JourneyOverview = () => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sua Jornada Bitcoin em 5 Passos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um guia completo e prático para transformar seu negócio local em uma 
            <strong className="text-primary"> empresa preparada para o futuro</strong> com Bitcoin.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="space-y-6 mb-20">
          {journeySteps.map((step, index) => (
            <div key={step.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <a 
                href="https://www.areabitcoin.co" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setSelectedStep(step.id)}
              >
                <BitcoinJourneyCard
                  step={step}
                  onClick={() => {}}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-20">
          <Button variant="hero" size="lg" className="text-lg px-12 py-4">
            Começar Agora - É Gratuito
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            ✨ Plataforma 100% open-source • Sem taxas ocultas • Seus Bitcoin, suas regras
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/educacao-pratica">
            <FeatureCard icon={BookOpen} title="Educação Prática" description="Conteúdo educativo com foco em aplicação real para negócios locais brasileiros." gradient={true} />
          </Link>
          <Link to="/seguranca-primeiro">
            <FeatureCard icon={Shield} title="Segurança em Primeiro Lugar" description="Wallets não-custodiais e melhores práticas de segurança para proteger seu Bitcoin." gradient={false} />
          </Link>
          <Link to="/implementacao-simples">
            <FeatureCard icon={Lightbulb} title="Implementação Simples" description="Ferramentas e tutoriais para implementar Bitcoin sem conhecimento técnico avançado." gradient={true} />
          </Link>
          <Link to="/foco-resultado">
            <FeatureCard icon={Target} title="Foco no Resultado" description="Check-lists práticos para garantir que cada etapa seja concluída com sucesso." gradient={false} />
          </Link>
        </div>
      </div>
    </section>
  );
};