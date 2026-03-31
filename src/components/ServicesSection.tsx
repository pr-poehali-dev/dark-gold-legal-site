import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Shield',
    title: 'Уголовная защита',
    description: 'Профессиональная защита на всех стадиях уголовного производства. Представление интересов в суде любой инстанции.',
  },
  {
    icon: 'Briefcase',
    title: 'Арбитражные споры',
    description: 'Ведение арбитражных дел, защита в коммерческих спорах, взыскание задолженностей и представление интересов бизнеса.',
  },
  {
    icon: 'Building2',
    title: 'Корпоративное право',
    description: 'Сопровождение бизнеса, регистрация компаний, подготовка договоров, юридическая экспертиза сделок.',
  },
  {
    icon: 'Home',
    title: 'Имущественные споры',
    description: 'Разрешение споров о собственности, наследстве, разделе имущества. Представление интересов в судах.',
  },
  {
    icon: 'FileText',
    title: 'Семейное право',
    description: 'Развод и раздел имущества, вопросы опеки и алиментов, брачные договоры и соглашения.',
  },
  {
    icon: 'Scale',
    title: 'Гражданские дела',
    description: 'Защита прав потребителей, трудовые споры, возмещение ущерба, исполнительное производство.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-12" style={{ backgroundColor: 'hsl(20,10%,6%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'hsl(43,74%,49%)' }}>
              Практика
            </span>
            <div className="section-divider" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Области права</h2>
          <p className="text-[hsl(45,10%,55%)] max-w-xl mx-auto font-light">
            Комплексная юридическая помощь по широкому спектру правовых вопросов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'hsl(43,20%,18%)' }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 transition-all duration-300 hover:cursor-default"
              style={{ backgroundColor: 'hsl(20,8%,9%)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'hsl(20,8%,11%)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'hsl(20,8%,9%)';
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-5"
                style={{ backgroundColor: 'hsl(43,74%,49%,0.1)' }}
              >
                <Icon name={service.icon} size={22} style={{ color: 'hsl(43,74%,49%)' }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-[hsl(45,10%,50%)] leading-relaxed font-light">{service.description}</p>
              <div
                className="mt-5 flex items-center gap-2 text-xs tracking-wider uppercase transition-all duration-300 group-hover:gap-3"
                style={{ color: 'hsl(43,74%,49%)' }}
              >
                <span>Подробнее</span>
                <Icon name="ArrowRight" size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
