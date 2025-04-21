import RevealContent from "@/components/RevealContent";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Clock, Users } from "lucide-react";

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-16 px-4 bg-accent">
      <div className="container mx-auto">
        <RevealContent>
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
        </RevealContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealContent>
            <Card className="hover:shadow-md transition-shadow overflow-hidden group">
              <CardHeader className="group-hover:bg-primary/10 transition-colors">
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Гарантия результата</CardTitle>
                <CardDescription>
                  Возвращаем деньги, если не удалось разблокировать аккаунт
                </CardDescription>
              </CardHeader>
            </Card>
          </RevealContent>
          <RevealContent>
            <Card className="hover:shadow-md transition-shadow overflow-hidden group">
              <CardHeader className="group-hover:bg-primary/10 transition-colors">
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Быстрое решение</CardTitle>
                <CardDescription>
                  Большинство случаев решаем в течение 1-3 дней
                </CardDescription>
              </CardHeader>
            </Card>
          </RevealContent>
          <RevealContent>
            <Card className="hover:shadow-md transition-shadow overflow-hidden group">
              <CardHeader className="group-hover:bg-primary/10 transition-colors">
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Опытные специалисты</CardTitle>
                <CardDescription>
                  Команда профессионалов с опытом более 5 лет
                </CardDescription>
              </CardHeader>
            </Card>
          </RevealContent>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
