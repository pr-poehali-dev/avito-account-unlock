import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl text-primary">АвитоАнбан</div>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#advantages" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Преимущества
            </a>
            <a href="#steps" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Этапы
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Вопросы
            </a>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button>Разблокировать аккаунт</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
