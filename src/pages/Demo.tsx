import { Button } from "@/components/ui/button";
import { ArrowLeft, Bitcoin } from "lucide-react";
import { Link } from "react-router-dom";
import BitcoinLogo from '../assets/images/bitcoin-logo-shop-brand.png'; // Ajuste o caminho conforme a localização da imagem
import Cavalete from '../assets/images/cavalete.png'; // Ajuste o caminho conforme a localização da imagem


const Demo = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0A2540] text-white p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
          <h1 className="text-2xl font-bold">Demonstração: Pizzaria Bitcoin</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
              Jornada Bitcoin na Pizzaria
            </h2>
            <p className="text-lg text-gray-600">
              Veja como implementar Bitcoin em um negócio real
            </p>
          </div>

          {/* Pizzeria Scene */}
          <div className="relative bg-gradient-to-b from-blue-100 to-blue-50 rounded-3xl p-8 mb-12 overflow-hidden">
            {/* Sky and Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-100"></div>
            
            {/* Pizzeria Building */}
            <div className="relative z-10 flex justify-center items-end h-96">
              {/* Building */}
              <div className="bg-white border-4 border-[#0A2540] rounded-t-lg p-6 w-80 h-64 relative">
                {/* Striped Awning */}
                <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-r from-[#F7931A] via-[#0A2540] to-[#F7931A] bg-[length:40px_100%] opacity-90"></div>
                <div className="absolute -top-8 left-0 right-0 h-8 bg-repeating-linear-gradient bg-[linear-gradient(90deg,_#F7931A_20px,_#0A2540_20px,_#0A2540_40px,_#F7931A_40px)]"></div>
                
                {/* Bitcoin Sign */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white border-2 border-[#0A2540] rounded-lg p-1 shadow-lg">
                  <div className="flex items-center">
                    <div className="p-4 rounded-full bg-white animate-bitcoin-pulse-pizza">
                     <img src={BitcoinLogo} alt="Bitcoin Logo" className="w-13 h-12" />
                    </div>
                  </div>
                </div>

                {/* Store Front */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Pizzaria Bitcoin</h3>
                  <div className="bg-[#F7931A] text-white p-4 rounded-lg">
                    <p className="font-semibold">Aceitamos Bitcoin!</p>
                    <p className="text-sm">Pagamentos instantâneos</p>
                  </div>
                </div>

                {/* Door */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-[#8B4513] border-2 border-[#654321] rounded-t-lg">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-12 ml-2"></div>
                </div>
              </div>
            </div>

            {/* Street */}
            <div className="relative z-5 h-20 bg-gray-400 mt-8">
              {/* Brick pattern connecting to street */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-[#D2691E] to-[#CD853F] opacity-80"></div>
              
              {/* Street lines */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-300 transform -translate-y-1/2"></div>
            </div>

            {/* Cavalete */}
            <div className="absolute bottom-24 right-45 z-18">
                {/* Street Cavalete */}
                <div className="p-3 animate-bitcoin-cavalete">
                     <img src={Cavalete} alt="Cavalete" className="w-14 h-15" />
                </div>
            </div>

            
            {/* Customer Scene */}
            <div className="absolute bottom-24 right-20 z-20">
              {/* Lady with purse */}
              <div className="relative">
                {/* Thought bubble */}
                <div className="absolute -top-16 -left-8 bg-white border-2 border-[#0A2540] rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Bitcoin className="w-6 h-6 text-[#F7931A]" />
                    <span className="font-bold italic text-[#F7931A]" style={{fontFamily: 'Ubuntu'}}>₿</span>
                  </div>
                  {/* Bubble tail */}
                  <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r-2 border-b-2 border-[#0A2540] transform rotate-45"></div>
                </div>
              
                {/* Lady figure */}
                <div className="w-12 h-20 bg-black rounded-t-full relative">
                  {/* Head */}
                  <div className="w-8 h-8 bg-pink-200 rounded-full mx-auto mb-2"></div>
                  {/* Body */}
                  <div className="w-10 h-12 bg-blue-200 rounded-lg mx-auto"></div>
                  {/* Purse */}
                  <div className="absolute right-0 top-8 w-4 h-6 bg-[#DC143C] rounded opacity-80"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7931A] text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">1. Configuração</h3>
              <p>Configure sua wallet Bitcoin não-custodial e comece a aceitar pagamentos instantâneos.</p>
            </div>
            
            <div className="bg-[#0A2540] text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">2. Integração</h3>
              <p>Integre o sistema de pagamento Bitcoin ao seu ponto de venda existente.</p>
            </div>
            
            <div className="bg-white border-2 border-[#F7931A] text-[#0A2540] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">3. Vendas</h3>
              <p>Comece a receber pagamentos em Bitcoin e expanda sua base de clientes.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link to="/">
              <Button className="bg-[#F7931A] hover:bg-[#E8851A] text-white px-8 py-4 text-lg">
                Começar Minha Jornada Bitcoin
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Demo;