import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const UnblockForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setLoading(false);
      alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Заявка на разблокировку</CardTitle>
        <CardDescription>
          Заполните форму, и мы поможем вернуть доступ к вашему аккаунту Авито
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email аккаунта
            </label>
            <Input id="email" type="email" placeholder="email@example.com" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Номер телефона
            </label>
            <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="reason" className="text-sm font-medium">
              Причина блокировки
            </label>
            <Textarea id="reason" placeholder="Опишите, что произошло с вашим аккаунтом" required />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Отправка..." : "Отправить заявку"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-muted-foreground">
        Обычно мы отвечаем в течение 24 часов
      </CardFooter>
    </Card>
  );
};

export default UnblockForm;
