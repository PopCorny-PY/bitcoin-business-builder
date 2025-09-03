import { ArrowLeft, Shield, Lock, Eye, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import illustration2 from "@/assets/illustration-2.png";

const SegurancaPrimeiro = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-secondary">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="w-5 h-5" />
          Voltar para início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Segurança em Primeiro Lugar</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proteja seu negócio com as melhores práticas de segurança Bitcoin, desde o básico até o avançado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Proteção Multicamada</h3>
                <p className="text-muted-foreground">
                  Implemente múltiplas camadas de segurança para proteger seus bitcoins 
                  contra diferentes tipos de ameaças.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Criptografia Avançada</h3>
                <p className="text-muted-foreground">
                  Utilize os mais altos padrões de criptografia para manter 
                  suas chaves privadas seguras.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Monitoramento Contínuo</h3>
                <p className="text-muted-foreground">
                  Monitore transações e atividades suspeitas em tempo real 
                  para detectar ameaças rapidamente.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={illustration2} 
              alt="Segurança e proteção digital"
              className="w-full h-auto rounded-xl shadow-elegant"
            />
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-elegant mb-12">
          <div className="flex items-start gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-warning" />
            <h2 className="text-2xl font-semibold text-secondary">Principais Ameaças e Proteções</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="text-lg font-semibold text-destructive mb-2">Phishing e Golpes</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Sites falsos que imitam carteiras legítimas para roubar suas chaves.
                </p>
                <div className="bg-success/10 p-3 rounded-lg">
                  <p className="text-success text-sm font-medium">
                    ✓ Sempre verifique URLs e certificados SSL
                  </p>
                  <p className="text-success text-sm font-medium">
                    ✓ Use marcadores para sites importantes
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-destructive pl-6">
                <h3 className="text-lg font-semibold text-destructive mb-2">Malware e Keyloggers</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Software malicioso que captura senhas e chaves privadas.
                </p>
                <div className="bg-success/10 p-3 rounded-lg">
                  <p className="text-success text-sm font-medium">
                    ✓ Mantenha antivírus atualizado
                  </p>
                  <p className="text-success text-sm font-medium">
                    ✓ Use dispositivos dedicados para Bitcoin
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-destructive pl-6">
                <h3 className="text-lg font-semibold text-destructive mb-2">SIM Swapping</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Transferência do seu número para outro chip para burlar 2FA.
                </p>
                <div className="bg-success/10 p-3 rounded-lg">
                  <p className="text-success text-sm font-medium">
                    ✓ Use autenticadores ao invés de SMS
                  </p>
                  <p className="text-success text-sm font-medium">
                    ✓ Configure PIN com operadora
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-destructive pl-6">
                <h3 className="text-lg font-semibold text-destructive mb-2">Ataques de Força Bruta</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Tentativas automatizadas de quebrar senhas fracas.
                </p>
                <div className="bg-success/10 p-3 rounded-lg">
                  <p className="text-success text-sm font-medium">
                    ✓ Use senhas longas e complexas
                  </p>
                  <p className="text-success text-sm font-medium">
                    ✓ Habilite bloqueio por tentativas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Checklist de Segurança</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">Backup da seed phrase em múltiplos locais</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">Autenticação de dois fatores habilitada</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">Software sempre atualizado</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">Rede Wi-Fi segura e criptografada</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">Teste regular de recuperação</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Ferramentas Recomendadas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">SecureVault Pro</h3>
                <p className="text-sm text-muted-foreground">Hardware wallet com tela e botões físicos</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">CryptoAuthenticator</h3>
                <p className="text-sm text-muted-foreground">App de autenticação de dois fatores</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">BitDefender Plus</h3>
                <p className="text-sm text-muted-foreground">Antivírus especializado em crypto</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">VPN Shield</h3>
                <p className="text-sm text-muted-foreground">Rede privada virtual para transações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegurancaPrimeiro;