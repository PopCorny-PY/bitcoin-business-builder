import { Hero } from "@/components/Hero";
import { JourneyOverview } from "@/components/JourneyOverview";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background dark:bg-background">
      <Hero />
      <JourneyOverview />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
