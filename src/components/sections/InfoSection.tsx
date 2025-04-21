import RevealContent from "@/components/RevealContent";
import InfoCard from "@/components/InfoCard";
import { 
  HelpCircle, 
  Banknote, 
  FileQuestion, 
  ShieldAlert,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InfoSection = () => {
  return (
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
  );
};

export default InfoSection;
