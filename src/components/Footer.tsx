const Footer = () => {
  return (
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
  );
};

export default Footer;
