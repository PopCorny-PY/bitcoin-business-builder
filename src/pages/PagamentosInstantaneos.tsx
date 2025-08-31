import { ArrowLeft, Zap, Clock, Globe, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import illustration1 from "@/assets/illustration-1.png";

const PagamentosInstantaneos = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="w-5 h-5" />
          Voltar para início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Pagamentos Instantâneos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolucione seu negócio com transações Bitcoin rápidas, seguras e sem intermediários.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={illustration1} 
              alt="Pagamentos digitais modernos"
              className="w-full h-auto rounded-xl shadow-elegant"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Velocidade Lightning</h3>
                <p className="text-muted-foreground">
                  Transações confirmadas em segundos através da Lightning Network, 
                  ideal para o varejo e e-commerce.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Alcance Global</h3>
                <p className="text-muted-foreground">
                  Aceite pagamentos de qualquer lugar do mundo, 24/7, 
                  sem fronteiras ou limitações geográficas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Taxas Mínimas</h3>
                <p className="text-muted-foreground">
                  Reduza custos operacionais com taxas muito menores que 
                  processadores tradicionais de cartão.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-elegant mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Como Funcionam os Pagamentos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Cliente Escaneia</h3>
              <p className="text-muted-foreground">
                QR code gerado automaticamente com valor da compra
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Pagamento Enviado</h3>
              <p className="text-muted-foreground">
                Transação processada instantaneamente na rede
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Confirmação</h3>
              <p className="text-muted-foreground">
                Você recebe confirmação imediata do pagamento
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Vantagens para seu Negócio</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• <strong>Irreversibilidade:</strong> Elimina chargebacks fraudulentos</li>
              <li>• <strong>Liquidez imediata:</strong> Acesso instantâneo aos fundos</li>
              <li>• <strong>Privacidade:</strong> Não compartilha dados do cliente</li>
              <li>• <strong>Disponibilidade:</strong> Funciona 24/7, inclusive feriados</li>
              <li>• <strong>Escalabilidade:</strong> Suporta alto volume de transações</li>
            </ul>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Soluções Recomendadas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">QuickPay Bitcoin</h3>
                <p className="text-sm text-muted-foreground">API completa para e-commerce</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">LightningPOS</h3>
                <p className="text-sm text-muted-foreground">Sistema de PDV para lojas físicas</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-secondary">OrangePayments</h3>
                <p className="text-sm text-muted-foreground">Gateway de pagamentos integrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagamentosInstantaneos;