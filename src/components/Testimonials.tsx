import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    business: "Café da Esquina",
    location: "São Paulo, SP",
    content: "Implementar Bitcoin no meu café foi mais simples do que imaginava. Agora recebo pagamentos instantâneos e sem taxas bancárias. Meus clientes adoram a praticidade!",
    rating: 5
  },
  {
    name: "João Santos",
    business: "Loja de Informática",
    location: "Rio de Janeiro, RJ",
    content: "A plataforma me guiou passo a passo. Em uma semana já estava recebendo em Bitcoin. O melhor é que não preciso depender de bancos para nada.",
    rating: 5
  },
  {
    name: "Ana Costa",
    business: "Consultoria Contábil",
    location: "Belo Horizonte, MG",
    content: "Como contadora, sempre fui cética sobre Bitcoin. Mas a educação aqui é excelente. Agora ajudo meus clientes a implementarem também.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-card dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground">
            Empresários que já transformaram seus negócios com Bitcoin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-smooth animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-5 h-5 text-primary" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              <p className="text-foreground mb-6 text-body">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.business}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};