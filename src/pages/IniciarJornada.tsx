import { ArrowLeft, Bitcoin, Lightbulb, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import illustration1 from "@/assets/illustration-1.png";

const IniciarJornada = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-secondary">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth mb-8">
          <ArrowLeft className="w-5 h-5" />
          Voltar para início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Iniciar sua Jornada Bitcoin</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece sua transformação digital com Bitcoin. Um guia completo para empreendedores que querem inovar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={illustration1} 
              alt="Pessoa trabalhando com tecnologia"
              className="w-full h-auto rounded-xl shadow-elegant"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Compreenda o Básico</h3>
                <p className="text-muted-foreground">
                  Bitcoin é uma moeda digital descentralizada que permite transações diretas entre pessoas, 
                  sem intermediários bancários.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Defina seus Objetivos</h3>
                <p className="text-muted-foreground">
                  Identifique como o Bitcoin pode beneficiar seu negócio: redução de taxas, 
                  alcance global ou reserva de valor.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Eduque sua Equipe</h3>
                <p className="text-muted-foreground">
                  Prepare sua equipe com conhecimento básico sobre Bitcoin e seus benefícios 
                  para o atendimento ao cliente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-elegant">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Primeiros Passos Recomendados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary">1. Educação Básica</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Entenda o que é blockchain</li>
                <li>• Aprenda sobre carteiras digitais</li>
                <li>• Conheça os tipos de transações</li>
                <li>• Estude a volatilidade do mercado</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary">2. Planejamento Estratégico</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Avalie seu modelo de negócio atual</li>
                <li>• Identifique oportunidades de melhoria</li>
                <li>• Defina metas claras e mensuráveis</li>
                <li>• Crie um cronograma de implementação</li>
              </ul>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-secondary">3. Habilidades Requeridas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Resiliência</li>
                <li>• Mentoria com os colaboradores</li>
                <li>• Busca contínua de networking</li>
                <li>• Entender os princípios de finanças</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-secondary">4. Ferramentas na Mochila</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Calculadora com um visor de boa legibilidade</li>
                <li>• Um caderno de capa dura 96 fls</li>
                <li>• Caneta de tinta de boa qualidade</li>
                <li>• Um PC/notebook/Smartphone com acesso à internet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarJornada;