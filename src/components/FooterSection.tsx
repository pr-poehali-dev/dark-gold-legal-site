const FooterSection = () => {
  return (
    <footer
      className="py-10 px-6 lg:px-12 border-t"
      style={{
        backgroundColor: 'hsl(20,10%,5%)',
        borderColor: 'hsl(43,20%,14%)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, hsl(43,74%,49%), hsl(43,80%,62%))',
              color: 'hsl(20,10%,6%)',
              fontFamily: 'Playfair Display, serif',
            }}
          >
            В
          </div>
          <span className="text-sm text-[hsl(45,10%,45%)]">
            © 2024 Адвокатское бюро «Волков и партнёры». Все права защищены.
          </span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-[hsl(45,10%,40%)] hover:text-[hsl(43,74%,49%)] transition-colors duration-300 tracking-wider uppercase">
            Политика конфиденциальности
          </a>
          <a href="#" className="text-xs text-[hsl(45,10%,40%)] hover:text-[hsl(43,74%,49%)] transition-colors duration-300 tracking-wider uppercase">
            Соглашение
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
