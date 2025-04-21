import RevealContent from "@/components/RevealContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;
