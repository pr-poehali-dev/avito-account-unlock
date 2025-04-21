import RevealContent from "@/components/RevealContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, BadgeCheck, AlarmClock, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-accent">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <RevealContent>
            <h2 className="text-3xl font-bold mb-6">Почему стоит обратиться к нам</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">Рассматриваем каждый случай отдельно и находим оптимальное решение</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Прозрачность процесса</h3>
                  <p className="text-muted-foreground">Держим вас в курсе всех действий по разблокировке</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Успешный опыт</h3>
                  <p className="text-muted-foreground">Более 95% успешно разблокированных аккаунтов</p>
                </div>
              </li>
            </ul>
            <Button className="mt-6 gap-2">
              Оставить заявку <ArrowRight size={16} />
            </Button>
          </RevealContent>
          <RevealContent>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-accent hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <BadgeCheck className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-muted-foreground">Успешных разблокировок</p>
                </CardContent>
              </Card>
              <Card className="bg-accent hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <AlarmClock className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold">24ч</p>
                  <p className="text-sm text-muted-foreground">Среднее время рассмотрения</p>
                </CardContent>
              </Card>
              <Card className="bg-accent col-span-2 hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold">1000+</p>
                  <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                </CardContent>
              </Card>
            </div>
          </RevealContent>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
