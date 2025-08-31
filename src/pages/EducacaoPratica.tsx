import { ArrowLeft, BookOpen, Video, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import illustration1 from "@/assets/illustration-1.png";

const EducacaoPratica = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="w-5 h-5" />
          Voltar para início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Educação Prática</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprenda Bitcoin através de exercícios práticos e exemplos reais do mundo dos negócios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={illustration1} 
              alt="Educação prática e aprendizado"
              className="w-full h-auto rounded-xl shadow-elegant"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Conteúdo Estruturado</h3>
                <p className="text-muted-foreground">
                  Módulos organizados do básico ao avançado, com exercícios práticos 
                  e casos de uso reais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Tutoriais em Vídeo</h3>
                <p className="text-muted-foreground">
                  Demonstrações passo a passo de como implementar Bitcoin 
                  em diferentes tipos de negócio.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Certificação</h3>
                <p className="text-muted-foreground">
                  Comprove seus conhecimentos com certificados reconhecidos 
                  pela comunidade Bitcoin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-elegant mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Módulos de Aprendizado</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">Módulo 1: Fundamentos</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• O que é Bitcoin e blockchain</li>
                  <li>• História e princípios básicos</li>
                  <li>• Diferenças de moedas tradicionais</li>
                  <li>• Exercício: primeira transação</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">Módulo 2: Carteiras</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Tipos de carteiras digitais</li>
                  <li>• Configuração segura</li>
                  <li>• Backup e recuperação</li>
                  <li>• Exercício: configurar carteira de teste</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">Módulo 3: Pagamentos</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Processar pagamentos Bitcoin</li>
                  <li>• Lightning Network</li>
                  <li>• Integração com sistemas existentes</li>
                  <li>• Exercício: simular venda com Bitcoin</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">Módulo 4: Segurança</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Boas práticas de segurança</li>
                  <li>• Proteção contra fraudes</li>
                  <li>• Gestão de riscos</li>
                  <li>• Exercício: auditoria de segurança</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">Módulo 5: Crescimento</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Estratégias de marketing Bitcoin</li>
                  <li>• Educação de clientes</li>
                  <li>• Análise de performance</li>
                  <li>• Exercício: plano de expansão</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">Módulo 6: Avançado</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Multi-sig e segurança empresarial</li>
                  <li>• Contabilidade e impostos</li>
                  <li>• Compliance e regulamentações</li>
                  <li>• Projeto final: implementação completa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <div className="flex items-start gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-secondary">Comunidade de Aprendizado</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• <strong>Fórum exclusivo:</strong> Tire dúvidas com especialistas</li>
              <li>• <strong>Grupos de estudo:</strong> Aprenda junto com outros empreendedores</li>
              <li>• <strong>Mentoria:</strong> Acompanhamento personalizado</li>
              <li>• <strong>Networking:</strong> Conecte-se com outros bitcoiners</li>
              <li>• <strong>Atualizações:</strong> Novidades do ecossistema Bitcoin</li>
            </ul>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Ferramentas de Prática</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">BitSim Simulator</h3>
                <p className="text-sm text-muted-foreground">Ambiente seguro para praticar transações</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">PaymentLab</h3>
                <p className="text-sm text-muted-foreground">Laboratório de integração de pagamentos</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">SecurityChecker</h3>
                <p className="text-sm text-muted-foreground">Ferramenta de auditoria de segurança</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">BusinessCalculator</h3>
                <p className="text-sm text-muted-foreground">Calculadora de ROI e análise financeira</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducacaoPratica;