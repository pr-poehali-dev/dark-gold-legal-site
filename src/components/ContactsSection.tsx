import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 px-6 lg:px-12" style={{ backgroundColor: 'hsl(20,10%,6%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'hsl(43,74%,49%)' }}>
              Контакты
            </span>
            <div className="section-divider" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Запись на консультацию</h2>
          <p className="text-[hsl(45,10%,55%)] max-w-lg mx-auto font-light">
            Первичная консультация бесплатна. Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              {
                icon: 'Phone',
                label: 'Телефон',
                value: '+7 (495) 000-00-00',
                sub: 'Пн–Пт: 9:00 – 20:00',
              },
              {
                icon: 'Mail',
                label: 'Email',
                value: 'info@lawbureau.ru',
                sub: 'Отвечаем в течение 2 часов',
              },
              {
                icon: 'MapPin',
                label: 'Адрес',
                value: 'Москва, ул. Тверская, д. 10',
                sub: 'Офис 510, 5 этаж',
              },
              {
                icon: 'Clock',
                label: 'Режим работы',
                value: 'Понедельник – Пятница',
                sub: '9:00 – 20:00 (по записи)',
              },
            ].map((contact) => (
              <div
                key={contact.label}
                className="flex items-start gap-5 p-6 border"
                style={{
                  backgroundColor: 'hsl(20,8%,9%)',
                  borderColor: 'hsl(43,20%,18%)',
                }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'hsl(43,74%,49%,0.1)' }}
                >
                  <Icon name={contact.icon} size={20} style={{ color: 'hsl(43,74%,49%)' }} />
                </div>
                <div>
                  <div className="text-xs tracking-wider uppercase mb-1" style={{ color: 'hsl(43,74%,49%)' }}>
                    {contact.label}
                  </div>
                  <div className="text-white font-medium">{contact.value}</div>
                  <div className="text-xs text-[hsl(45,10%,50%)] mt-0.5 font-light">{contact.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="p-8 border"
            style={{
              backgroundColor: 'hsl(20,8%,9%)',
              borderColor: 'hsl(43,20%,18%)',
            }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Оставить заявку</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-[hsl(45,10%,40%)]"
                  style={{
                    backgroundColor: 'hsl(20,8%,12%)',
                    border: '1px solid hsl(43,20%,18%)',
                    color: 'hsl(45,20%,88%)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(43,74%,49%)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(43,20%,18%)';
                  }}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-[hsl(45,10%,40%)]"
                  style={{
                    backgroundColor: 'hsl(20,8%,12%)',
                    border: '1px solid hsl(43,20%,18%)',
                    color: 'hsl(45,20%,88%)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(43,74%,49%)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(43,20%,18%)';
                  }}
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Опишите вашу ситуацию кратко"
                  className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 resize-none placeholder:text-[hsl(45,10%,40%)]"
                  style={{
                    backgroundColor: 'hsl(20,8%,12%)',
                    border: '1px solid hsl(43,20%,18%)',
                    color: 'hsl(45,20%,88%)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(43,74%,49%)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(43,20%,18%)';
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, hsl(43,74%,49%), hsl(43,80%,62%))',
                  color: 'hsl(20,10%,6%)',
                }}
              >
                Отправить заявку
              </button>
              <p className="text-xs text-center text-[hsl(45,10%,40%)] font-light">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
