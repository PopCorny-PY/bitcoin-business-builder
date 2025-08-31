import { ArrowLeft, Puzzle, Zap, Settings, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import illustration1 from "@/assets/illustration-1.png";

const ImplementacaoSimples = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="w-5 h-5" />
          Voltar para início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Implementação Simples</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integre Bitcoin ao seu negócio de forma rápida e descomplicada, sem conhecimento técnico avançado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={illustration1} 
              alt="Implementação simples e eficiente"
              className="w-full h-auto rounded-xl shadow-elegant"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Puzzle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Plug and Play</h3>
                <p className="text-muted-foreground">
                  Soluções prontas que se integram facilmente aos seus 
                  sistemas existentes sem grandes modificações.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Configuração Rápida</h3>
                <p className="text-muted-foreground">
                  Configure pagamentos Bitcoin em minutos, não em dias. 
                  Interface intuitiva guia você em cada passo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Suporte Completo</h3>
                <p className="text-muted-foreground">
                  Documentação clara, tutoriais em vídeo e suporte técnico 
                  para garantir implementação bem-sucedida.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-elegant mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Processo de Implementação</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Cadastro</h3>
              <p className="text-muted-foreground text-sm">
                Registre sua conta em minutos com informações básicas do negócio
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Configuração</h3>
              <p className="text-muted-foreground text-sm">
                Configure preferências de pagamento e conecte sistemas existentes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Teste</h3>
              <p className="text-muted-foreground text-sm">
                Realize transações de teste para validar a integração
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Ativação</h3>
              <p className="text-muted-foreground text-sm">
                Ative o sistema e comece a aceitar pagamentos Bitcoin
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Tipos de Integração</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">E-commerce</h3>
                  <p className="text-sm text-muted-foreground">Plugins para WooCommerce, Shopify, Magento</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Ponto de Venda</h3>
                  <p className="text-sm text-muted-foreground">Apps móveis para vendas presenciais</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">API REST</h3>
                  <p className="text-sm text-muted-foreground">Integração personalizada para desenvolvedores</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">QR Code</h3>
                  <p className="text-sm text-muted-foreground">Pagamentos simples via código QR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Ferramentas Incluídas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">QuickStart Kit</h3>
                <p className="text-sm text-muted-foreground">Pacote completo de instalação automatizada</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">Dashboard Manager</h3>
                <p className="text-sm text-muted-foreground">Painel de controle intuitivo</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">Payment Gateway</h3>
                <p className="text-sm text-muted-foreground">Processador de pagamentos robusto</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">Mobile POS</h3>
                <p className="text-sm text-muted-foreground">Aplicativo para vendas móveis</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-primary rounded-xl p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Comece Hoje Mesmo</h2>
          <p className="text-lg mb-6 opacity-90">
            Não espere mais para modernizar seu negócio. Com nossa solução de implementação simples, 
            você pode aceitar Bitcoin em questão de horas, não semanas.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">15min</div>
              <div className="opacity-90">Tempo de setup</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="opacity-90">Suporte técnico</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">0%</div>
              <div className="opacity-90">Taxa de setup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementacaoSimples;