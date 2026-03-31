const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/3f58351d-a9ff-48e1-b963-709375e4d703/files/609120b5-3df4-4c9c-b7ae-447e76a84006.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,10%,4%)] via-[hsl(20,10%,5%,0.85)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,10%,4%)] via-transparent to-[hsl(20,10%,4%,0.3)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'hsl(43,74%,49%)' }}>
              Адвокатское бюро
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            Ваша защита —{' '}
            <span className="gold-text">наш приоритет</span>
          </h1>

          <p className="text-lg text-[hsl(45,10%,65%)] leading-relaxed mb-10 font-light max-w-xl">
            Профессиональная юридическая помощь с многолетним опытом. Защищаем права и интересы клиентов в любых правовых ситуациях.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, hsl(43,74%,49%), hsl(43,80%,62%))',
                color: 'hsl(20,10%,6%)',
              }}
            >
              Получить консультацию
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wider uppercase border transition-all duration-300 hover:bg-white/5"
              style={{
                borderColor: 'hsl(43,74%,49%)',
                color: 'hsl(43,74%,49%)',
              }}
            >
              Наши услуги
            </a>
          </div>

          <div className="mt-16 flex gap-12">
            {[
              { number: '20+', label: 'Лет практики' },
              { number: '500+', label: 'Выигранных дел' },
              { number: '98%', label: 'Довольных клиентов' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gold-text">{stat.number}</div>
                <div className="text-xs text-[hsl(45,10%,50%)] tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
