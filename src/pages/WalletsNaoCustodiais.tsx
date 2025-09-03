import { ArrowLeft, Shield, Key, Smartphone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import illustration2 from "@/assets/illustration-2.png";

const WalletsNaoCustodiais = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-secondary">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="w-5 h-5" />
          Voltar para início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Wallets Não-Custodiais</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantenha o controle total dos seus bitcoins com carteiras seguras e independentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Key className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Suas Chaves, Seus Bitcoins</h3>
                <p className="text-muted-foreground">
                  Com carteiras não-custodiais, você possui as chaves privadas e tem controle 
                  total sobre seus fundos, sem depender de terceiros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Segurança Máxima</h3>
                <p className="text-muted-foreground">
                  Eliminam o risco de counterparty e oferecem maior privacidade nas suas 
                  transações financeiras.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Facilidade de Uso</h3>
                <p className="text-muted-foreground">
                  Interfaces modernas e intuitivas tornam o gerenciamento de bitcoins 
                  acessível para qualquer usuário.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={illustration2} 
              alt="Pessoas colaborando com tecnologia"
              className="w-full h-auto rounded-xl shadow-elegant"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Carteiras Recomendadas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">BitSafe Wallet</h3>
                <p className="text-sm text-muted-foreground">Ideal para iniciantes, interface simples e segura</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">CryptoGuard Pro</h3>
                <p className="text-sm text-muted-foreground">Para usuários avançados, recursos completos</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">SecureBit Mobile</h3>
                <p className="text-sm text-muted-foreground">Carteira móvel com autenticação biométrica</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">OrangePay Wallet</h3>
                <p className="text-sm text-muted-foreground">Focada em pagamentos comerciais rápidos</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-warning mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-secondary">Dicas de Segurança</h2>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• <strong>Backup da seed phrase:</strong> Anote e guarde em local seguro</li>
              <li>• <strong>Múltiplas cópias:</strong> Mantenha backups em locais diferentes</li>
              <li>• <strong>Teste pequeno:</strong> Faça transações pequenas primeiro</li>
              <li>• <strong>Atualizações:</strong> Mantenha o software sempre atualizado</li>
              <li>• <strong>Verificação:</strong> Confirme endereços antes de enviar</li>
              <li>• <strong>Dispositivos limpos:</strong> Use dispositivos livres de malware</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletsNaoCustodiais;