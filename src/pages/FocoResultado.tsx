import { ArrowLeft, Target, TrendingUp, BarChart3, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import illustration2 from "@/assets/illustration-2.png";

const FocoResultado = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-secondary">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="w-5 h-5" />
          Voltar para início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Foco no Resultado</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Maximize o retorno do seu investimento em Bitcoin com estratégias comprovadas e métricas claras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Objetivos Mensuráveis</h3>
                <p className="text-muted-foreground">
                  Defina metas claras e acompanhe o progresso com KPIs específicos 
                  para sua implementação Bitcoin.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Crescimento Sustentável</h3>
                <p className="text-muted-foreground">
                  Estratégias de crescimento baseadas em dados reais e 
                  feedback contínuo dos clientes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Analytics Avançado</h3>
                <p className="text-muted-foreground">
                  Dashboards detalhados para análise de performance, 
                  conversões e rentabilidade.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={illustration2} 
              alt="Análise de resultados e crescimento"
              className="w-full h-auto rounded-xl shadow-elegant"
            />
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-elegant mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Principais Métricas de Sucesso</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-accent rounded-lg">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-secondary mb-2">Receita Bitcoin</h3>
              <p className="text-2xl font-bold text-primary mb-1">R$ 15.400</p>
              <p className="text-sm text-muted-foreground">+35% vs mês anterior</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-secondary mb-2">Conversão</h3>
              <p className="text-2xl font-bold text-primary mb-1">8.7%</p>
              <p className="text-sm text-muted-foreground">de visitantes únicos</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-secondary mb-2">Ticket Médio</h3>
              <p className="text-2xl font-bold text-primary mb-1">R$ 285</p>
              <p className="text-sm text-muted-foreground">+12% com Bitcoin</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-secondary mb-2">Economia</h3>
              <p className="text-2xl font-bold text-primary mb-1">3.2%</p>
              <p className="text-sm text-muted-foreground">em taxas de pagamento</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Estratégias de Otimização</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary mb-1">A/B Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Teste diferentes abordagens de pagamento para maximizar conversões
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary mb-1">Educação do Cliente</h3>
                <p className="text-sm text-muted-foreground">
                  Materiais educativos aumentam a adoção de pagamentos Bitcoin
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary mb-1">Incentivos</h3>
                <p className="text-sm text-muted-foreground">
                  Descontos para pagamentos Bitcoin aumentam a preferência
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary mb-1">Timing Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Optimize o momento de conversão para melhor taxa de câmbio
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Ferramentas de Análise</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">Analytics Pro</h3>
                <p className="text-sm text-muted-foreground">Dashboard completo de métricas Bitcoin</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">ROI Calculator</h3>
                <p className="text-sm text-muted-foreground">Calculadora de retorno sobre investimento</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">Performance Monitor</h3>
                <p className="text-sm text-muted-foreground">Monitoramento em tempo real</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">Conversion Tracker</h3>
                <p className="text-sm text-muted-foreground">Rastreamento detalhado de conversões</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-elegant">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Casos de Sucesso</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🍕</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Pizzaria do João</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Implementou Bitcoin em 2 semanas
              </p>
              <p className="text-lg font-bold text-primary">+28% receita</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">☕</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Café Central</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Cliente frequente com Bitcoin
              </p>
              <p className="text-lg font-bold text-primary">+45% fidelização</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🛒</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Loja Tech</h3>
              <p className="text-sm text-muted-foreground mb-2">
                E-commerce com pagamentos globais
              </p>
              <p className="text-lg font-bold text-primary">+67% vendas internacionais</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocoResultado;