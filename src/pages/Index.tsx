import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import UnblockForm from "@/components/UnblockForm";
import { Shield, Clock, CheckCircle, ArrowRight, Users, BadgeCheck, AlarmClock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
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
          </div>
          <div className="flex-1">
            <UnblockForm />
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
      <section id="advantages" className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Гарантия результата</CardTitle>
                <CardDescription>
                  Возвращаем деньги, если не удалось разблокировать аккаунт
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Быстрое решение</CardTitle>
                <CardDescription>
                  Большинство случаев решаем в течение 1-3 дней
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Опытные специалисты</CardTitle>
                <CardDescription>
                  Команда профессионалов с опытом более 5 лет
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section id="steps" className="py-16 px-4 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Этапы разблокировки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Подача заявки</h3>
              <p className="text-muted-foreground">
                Заполните форму с указанием данных вашего аккаунта и причины блокировки
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Анализ ситуации</h3>
              <p className="text-muted-foreground">
                Наши специалисты изучат причину блокировки и разработают стратегию разблокировки
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Разблокировка</h3>
              <p className="text-muted-foreground">
                Проведем все необходимые действия для восстановления доступа к вашему аккаунту
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-accent">
                <CardContent className="pt-6 text-center">
                  <BadgeCheck className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-muted-foreground">Успешных разблокировок</p>
                </CardContent>
              </Card>
              <Card className="bg-accent">
                <CardContent className="pt-6 text-center">
                  <AlarmClock className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold">24ч</p>
                  <p className="text-sm text-muted-foreground">Среднее время рассмотрения</p>
                </CardContent>
              </Card>
              <Card className="bg-accent col-span-2">
                <CardContent className="pt-6 text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold">1000+</p>
                  <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg p-6 shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger>Сколько стоит разблокировка аккаунта Авито?</AccordionTrigger>
              <AccordionContent>
                Стоимость услуги зависит от сложности случая и причины блокировки. Базовая стоимость начинается от 2000 рублей. После анализа вашей ситуации мы предложим точную стоимость разблокировки.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Какие гарантии вы предоставляете?</AccordionTrigger>
              <AccordionContent>
                Мы гарантируем возврат средств в случае, если нам не удастся разблокировать ваш аккаунт. Также предоставляем бесплатные консультации по защите аккаунта после разблокировки.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Как долго длится процесс разблокировки?</AccordionTrigger>
              <AccordionContent>
                В среднем процесс занимает от 1 до 3 дней. В сложных случаях может потребоваться до 7 дней. Мы всегда информируем вас о статусе работы и ожидаемых сроках.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 АвитоАнбан. Все права защищены.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Политика конфиденциальности</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Условия использования</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
