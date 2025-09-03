import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";
import IniciarJornada from "./pages/IniciarJornada";
import WalletsNaoCustodiais from "./pages/WalletsNaoCustodiais";
import PagamentosInstantaneos from "./pages/PagamentosInstantaneos";
import OpenSource from "./pages/OpenSource";
import EducacaoPratica from "./pages/EducacaoPratica";
import SegurancaPrimeiro from "./pages/SegurancaPrimeiro";
import ImplementacaoSimples from "./pages/ImplementacaoSimples";
import FocoResultado from "./pages/FocoResultado";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/iniciar-jornada" element={<IniciarJornada />} />
              <Route path="/wallets-nao-custodiais" element={<WalletsNaoCustodiais />} />
              <Route path="/pagamentos-instantaneos" element={<PagamentosInstantaneos />} />
              <Route path="/open-source" element={<OpenSource />} />
              <Route path="/educacao-pratica" element={<EducacaoPratica />} />
              <Route path="/seguranca-primeiro" element={<SegurancaPrimeiro />} />
              <Route path="/implementacao-simples" element={<ImplementacaoSimples />} />
              <Route path="/foco-resultado" element={<FocoResultado />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
