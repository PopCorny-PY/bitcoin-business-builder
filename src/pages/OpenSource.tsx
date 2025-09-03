import { ArrowLeft, Code, Users, Heart, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import illustration2 from "@/assets/illustration-2.png";

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-secondary">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="w-5 h-5" />
          Voltar para início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Open Source</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparência, colaboração e inovação impulsionam o ecossistema Bitcoin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Código Aberto</h3>
                <p className="text-muted-foreground">
                  Todo o código Bitcoin é público e auditável, garantindo transparência 
                  total e confiança na tecnologia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Comunidade Global</h3>
                <p className="text-muted-foreground">
                  Milhares de desenvolvedores ao redor do mundo contribuem 
                  para melhorar constantemente o protocolo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Sem Dono</h3>
                <p className="text-muted-foreground">
                  Nenhuma empresa ou governo controla o Bitcoin, 
                  mantendo-o verdadeiramente descentralizado.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={illustration2} 
              alt="Comunidade colaborativa"
              className="w-full h-auto rounded-xl shadow-elegant"
            />
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-elegant mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Projetos Open Source Essenciais</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Bitcoin Core</h3>
                  <p className="text-sm text-muted-foreground">
                    Implementação de referência do protocolo Bitcoin
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Lightning Network</h3>
                  <p className="text-sm text-muted-foreground">
                    Solução de segunda camada para pagamentos instantâneos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">BTCPay Server</h3>
                  <p className="text-sm text-muted-foreground">
                    Processador de pagamentos auto-hospedado
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Electrum</h3>
                  <p className="text-sm text-muted-foreground">
                    Carteira Bitcoin leve e eficiente
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Bisq</h3>
                  <p className="text-sm text-muted-foreground">
                    Exchange descentralizada peer-to-peer
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Specter Desktop</h3>
                  <p className="text-sm text-muted-foreground">
                    Interface para carteiras de hardware
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Benefícios do Open Source</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• <strong>Auditabilidade:</strong> Qualquer pessoa pode verificar o código</li>
              <li>• <strong>Segurança:</strong> Bugs são encontrados e corrigidos rapidamente</li>
              <li>• <strong>Inovação:</strong> Desenvolvimento colaborativo acelera melhorias</li>
              <li>• <strong>Liberdade:</strong> Uso sem licenças proprietárias restritivas</li>
              <li>• <strong>Confiança:</strong> Não há código oculto ou backdoors</li>
            </ul>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Como Contribuir</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• <strong>Teste:</strong> Use e reporte bugs encontrados</li>
              <li>• <strong>Documente:</strong> Melhore tutoriais e guias</li>
              <li>• <strong>Traduza:</strong> Ajude a tornar o Bitcoin mais acessível</li>
              <li>• <strong>Desenvolva:</strong> Contribua com código e melhorias</li>
              <li>• <strong>Eduque:</strong> Compartilhe conhecimento com outros</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;