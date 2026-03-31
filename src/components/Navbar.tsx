import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'hsl(20,10%,5%,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid hsl(43,20%,15%)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center text-sm font-bold"
              style={{
                background: 'linear-gradient(135deg, hsl(43,74%,49%), hsl(43,80%,62%))',
                color: 'hsl(20,10%,6%)',
                fontFamily: 'Playfair Display, serif',
              }}
            >
              В
            </div>
            <div>
              <div className="text-white font-semibold text-sm tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                ВОЛКОВ И ПАРТНЁРЫ
              </div>
              <div className="text-xs tracking-[0.2em] uppercase" style={{ color: 'hsl(43,74%,49%)', fontSize: '9px' }}>
                Адвокатское бюро
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'О бюро', href: '#about' },
              { label: 'Услуги', href: '#services' },
              { label: 'Контакты', href: '#contacts' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-wider text-[hsl(45,10%,65%)] hover:text-white transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, hsl(43,74%,49%), hsl(43,80%,62%))',
                color: 'hsl(20,10%,6%)',
              }}
            >
              Консультация
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
