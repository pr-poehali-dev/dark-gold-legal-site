const AboutSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12" style={{ backgroundColor: 'hsl(20,8%,8%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'hsl(43,74%,49%)' }}>
                О бюро
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Доверие, выстроенное{' '}
              <span className="gold-text">годами практики</span>
            </h2>
            <p className="text-[hsl(45,10%,55%)] leading-relaxed mb-6 font-light">
              Наше адвокатское бюро объединяет опытных юристов с глубокими знаниями российского и международного права. Мы не просто защищаем — мы становимся надёжным партнёром в решении правовых задач любой сложности.
            </p>
            <p className="text-[hsl(45,10%,55%)] leading-relaxed mb-10 font-light">
              Каждое дело — это уникальная ситуация, требующая индивидуального подхода. Мы разрабатываем стратегию защиты, ориентированную на максимальный результат для клиента.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Конфиденциальность', desc: 'Полная тайна всех сведений' },
                { label: 'Опыт', desc: 'Более 20 лет в профессии' },
                { label: 'Результат', desc: 'Ориентация на победу' },
                { label: 'Доступность', desc: 'На связи 24/7' },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div
                    className="w-1 flex-shrink-0 mt-1"
                    style={{ backgroundColor: 'hsl(43,74%,49%)' }}
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-[hsl(45,10%,50%)] text-xs font-light mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 opacity-20"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(43,74%,49%) 0%, transparent 70%)',
              }}
            />
            <div
              className="relative p-10 border"
              style={{
                backgroundColor: 'hsl(20,8%,10%)',
                borderColor: 'hsl(43,20%,20%)',
              }}
            >
              <div
                className="text-6xl font-bold mb-2 gold-text"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                «
              </div>
              <blockquote className="text-xl text-white font-light leading-relaxed mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Справедливость не приходит сама — её нужно отстаивать. Мы делаем это каждый день.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="section-divider flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Александр Волков</div>
                  <div className="text-xs text-[hsl(45,10%,50%)] tracking-wider uppercase mt-0.5">Управляющий партнёр</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
