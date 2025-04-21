import { Button } from "@/components/ui/button";
import RevealContent from "@/components/RevealContent";
import UnblockForm from "@/components/UnblockForm";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <RevealContent className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Быстрая и надежная разблокировка аккаунта Авито
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Вернем доступ к вашему аккаунту в кратчайшие сроки с гарантией результата и полной поддержкой на всех этапах
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="gap-2">
              Разблокировать сейчас <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline">
              Узнать подробнее
            </Button>
          </div>
        </RevealContent>
        <RevealContent className="flex-1">
          <UnblockForm />
        </RevealContent>
      </div>
    </section>
  );
};

export default HeroSection;
