import RevealContent from "@/components/RevealContent";

const StepsSection = () => {
  return (
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
  );
};

export default StepsSection;
