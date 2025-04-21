import RevealContent from "@/components/RevealContent";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <RevealContent>
      <section className="py-16 px-4 bg-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы вернуть доступ к своему аккаунту?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Заполните форму заявки и мы свяжемся с вами в течение 2 часов для обсуждения деталей разблокировки
          </p>
          <Button size="lg" className="gap-2">
            Оставить заявку на разблокировку <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </RevealContent>
  );
};

export default CTASection;
