import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import RevealContent from "@/components/RevealContent";
import InfoCard from "@/components/InfoCard";
import UnblockForm from "@/components/UnblockForm";
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  BadgeCheck, 
  AlarmClock, 
  AlertTriangle,
  HelpCircle,
  Banknote,
  FileQuestion,
  ShieldAlert
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
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
      
      {/* Interactive Info Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <RevealContent>
            <h2 className="text-3xl font-bold text-center mb-12">Всё, что нужно знать о разблокировке</h2>
          </RevealContent>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealContent>
              <InfoCard 
                title="Какие аккаунты подойдут для разблокировки?" 
                icon={<HelpCircle className="text-primary" />}
              >
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Аккаунты, заблокированные за нарушение правил публикации объявлений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Блокировка из-за подозрительной активности и взлома</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Временные блокировки из-за жалоб пользователей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                    <span>К сожалению, с аккаунтами, заблокированными за мошенничество, мы не работаем</span>
                  </li>
                </ul>
              </InfoCard>
            </RevealContent>
            
            <RevealContent>
              <InfoCard 
                title="Сколько стоит разблокировка?" 
                icon={<Banknote className="text-primary" />}
              >
                <div className="space-y-4">
                  <p>Стоимость разблокировки зависит от сложности случая:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-accent">
                      <CardContent className="p-4">
                        <h4 className="font-bold">Стандартный случай</h4>
                        <p className="text-2xl font-bold mt-2 mb-1">2 000 ₽</p>
                        <p className="text-sm text-muted-foreground">Срок: 1-2 дня</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-accent">
                      <CardContent className="p-4">
                        <h4 className="font-bold">Сложный случай</h4>
                        <p className="text-2xl font-bold mt-2 mb-1">3 000 ₽</p>
                        <p className="text-sm text-muted-foreground">Срок: 2-5 дней</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground">Оплата только после успешной разблокировки! В случае неудачи — мы вернем 100% средств.</p>
                </div>
              </InfoCard>
            </RevealContent>
            
            <RevealContent>
              <InfoCard 
                title="Как происходит разблокировка?" 
                icon={<FileQuestion className="text-primary" />}
              >
                <ol className="space-y-4 relative border-l border-primary/30 pl-6 ml-2">
                  <li className="relative">
                    <div className="absolute -left-[25px] bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">1</div>
                    <h4 className="font-bold">Анализ причины блокировки</h4>
                    <p className="text-muted-foreground">Наши специалисты выясняют точную причину блокировки вашего аккаунта</p>
                  </li>
                  <li className="relative">
                    <div className="absolute -left-[25px] bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">2</div>
                    <h4 className="font-bold">Составление апелляции</h4>
                    <p className="text-muted-foreground">Готовим грамотную апелляцию с учетом всех нюансов вашего случая</p>
                  </li>
                  <li className="relative">
                    <div className="absolute -left-[25px] bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">3</div>
                    <h4 className="font-bold">Подача апелляции</h4>
                    <p className="text-muted-foreground">Отправляем апелляцию и контролируем весь процесс рассмотрения</p>
                  </li>
                  <li className="relative">
                    <div className="absolute -left-[25px] bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">4</div>
                    <h4 className="font-bold">Разблокировка аккаунта</h4>
                    <p className="text-muted-foreground">После положительного решения вы получаете доступ к аккаунту</p>
                  </li>
                </ol>
              </InfoCard>
            </RevealContent>
            
            <RevealContent>
              <InfoCard 
                title="Почему блокируют аккаунты?" 
                icon={<ShieldAlert className="text-primary" />}
              >
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Нарушение правил площадки</h4>
                      <p className="text-sm text-muted-foreground">Размещение запрещенных товаров, услуг или контента</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Подозрительная активность</h4>
                      <p className="text-sm text-muted-foreground">Слишком частое размещение объявлений или использование скриптов</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Жалобы пользователей</h4>
                      <p className="text-sm text-muted-foreground">Множественные жалобы на ваши объявления или поведение</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Подозрение в мошенничестве</h4>
                      <p className="text-sm text-muted-foreground">Алгоритмы Авито заподозрили мошеннические действия</p>
                    </div>
                  </li>
                </ul>
              </InfoCard>
            </RevealContent>
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
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
      
      {/* Steps Section */}
      <section id="steps" className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <RevealContent>
            <h2 className="text-3xl font-bold text-center mb-12">Этапы разблокировки</h2>
          </RevealContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealContent>
              <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mx-auto mb-4 group-hover:scale-110 transition-transform">1</div>
                <h3 className="text-xl font-bold mb-2">Подача заявки</h3>
                <p className="text-muted-foreground">
                  Заполните форму с указанием данных вашего аккаунта и причины блокировки
                </p>
              </div>
            </RevealContent>
            <RevealContent>
              <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mx-auto mb-4 group-hover:scale-110 transition-transform">2</div>
                <h3 className="text-xl font-bold mb-2">Анализ ситуации</h3>
                <p className="text-muted-foreground">
                  Наши специалисты изучат причину блокировки и разработают стратегию разблокировки
                </p>
              </div>
            </RevealContent>
            <RevealContent>
              <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mx-auto mb-4 group-hover:scale-110 transition-transform">3</div>
                <h3 className="text-xl font-bold mb-2">Разблокировка</h3>
                <p className="text-muted-foreground">
                  Проведем все необходимые действия для восстановления доступа к вашему аккаунту
                </p>
              </div>
            </RevealContent>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
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
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <RevealContent>
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          </RevealContent>
          <RevealContent>
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
              <AccordionItem value="item-4">
                <AccordionTrigger>Какая информация нужна для начала работы?</AccordionTrigger>
                <AccordionContent>
                  Для начала работы нам потребуется email и номер телефона, привязанные к аккаунту, а также подробное описание ситуации блокировки. Дополнительные документы могут понадобиться в процессе работы.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Действительно ли оплата только после разблокировки?</AccordionTrigger>
                <AccordionContent>
                  Да, вы оплачиваете услугу только после успешной разблокировки аккаунта. Мы работаем по принципу "нет результата - нет оплаты".
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </RevealContent>
        </div>
      </section>
      
      {/* Call To Action */}
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
