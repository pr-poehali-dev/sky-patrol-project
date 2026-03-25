import { useState } from "react";

const menuData = {
  "🍲 СУПЫ": [
    { name: "Суп куриный с лапшой (домашний)", weight: "320 г", price: "250 ₽" },
    { name: "Борщ с говядиной и сметаной", weight: "350 г", price: "320 ₽" },
    { name: "Суп рыбный с лососем и укропом", weight: "320 г", price: "290 ₽" },
    { name: "Суп-пюре из тыквы с семечками", weight: "300 г", price: "220 ₽" },
  ],
  "🍽 ВТОРОЕ": [
    { name: "Картофельное пюре с котлетой по-домашнему", weight: "300 г", price: "350 ₽" },
    { name: "Гречка с печенью по-строгановски", weight: "280 г", price: "380 ₽" },
    { name: "Паста с курицей в сливочном соусе", weight: "320 г", price: "420 ₽" },
    { name: "Рис с запечённым лососем и овощами", weight: "280 г", price: "550 ₽" },
    { name: "Треска, запечённая с лимонником и сливочным маслом", weight: "270 г", price: "530 ₽" },
  ],
  "🥗 САЛАТЫ": [
    { name: "Цезарь с курицей и сухариками", weight: "180 г", price: "380 ₽" },
    { name: "Салат с тунцом, яйцом и свежими огурцами", weight: "170 г", price: "420 ₽" },
    { name: "Греческий с фетой и оливками", weight: "200 г", price: "350 ₽" },
    { name: "Салат из сезонных овощей с домашней заправкой", weight: "150 г", price: "250 ₽" },
    { name: "Салат с кальмаром и авокадо", weight: "180 г", price: "450 ₽" },
  ],
  "🥐 ВЫПЕЧКА": [
    { name: "Круассан классический", weight: "70 г", price: "150 ₽" },
    { name: "Круассан с шоколадом", weight: "80 г", price: "180 ₽" },
    { name: "Пирожок с картошкой и грибами", weight: "100 г", price: "120 ₽" },
    { name: "Пирожок с капустой", weight: "100 г", price: "100 ₽" },
    { name: "Булочка с корицей (синабон)", weight: "90 г", price: "180 ₽" },
    { name: "Блины с творогом и сметаной", weight: "120 г", price: "220 ₽" },
    { name: "Блины с мёдом", weight: "110 г", price: "200 ₽" },
    { name: "Бриошь с камчатским крабом и авокадо", weight: "110 г", price: "380 ₽" },
  ],
  "☕ НАПИТКИ": [
    { name: "Американо", weight: "200 мл", price: "150 ₽" },
    { name: "Капучино", weight: "200 мл", price: "180 ₽" },
    { name: "Латте", weight: "250 мл", price: "190 ₽" },
    { name: "Раф", weight: "220 мл", price: "210 ₽" },
    { name: "Кофе с корицей или сиропом (добавка)", weight: "—", price: "+30 ₽" },
    { name: "Чай чёрный / зелёный", weight: "300 мл", price: "100 ₽" },
    { name: "Какао", weight: "200 мл", price: "160 ₽" },
    { name: "Авторский лимонад (домашний)", weight: "300 мл", price: "220 ₽" },
    { name: "Морс клюквенный", weight: "250 мл", price: "180 ₽" },
  ],
  "🍰 ДЕСЕРТЫ": [
    { name: "Медовик (домашний)", weight: "120 г", price: "280 ₽" },
    { name: "Чизкейк классический", weight: "130 г", price: "290 ₽" },
    { name: "Наполеон", weight: "130 г", price: "300 ₽" },
    { name: "Панкейки с фруктами и мёдом", weight: "150 г", price: "350 ₽" },
    { name: "Жареное мороженое", weight: "120 г", price: "290 ₽" },
    { name: "Десерт дня (от пекаря)", weight: "100–120 г", price: "200–250 ₽" },
  ],
  "⭐ КОМБО": [
    { name: "Бизнес-ланч", desc: "Суп + второе + салат + компот/чай", weight: "900–1100 г", price: "550–650 ₽" },
    { name: "Обед + кофе", desc: "Бизнес-ланч + капучино/латте", weight: "1100–1350 г + 200–250 мл", price: "750–850 ₽" },
    { name: "Кофе + десерт", desc: "Любой кофе + десерт на выбор", weight: "200–250 мл + 90–130 г", price: "350–450 ₽" },
    { name: "Семейный завтрак", desc: "Блины + круассан + 2 кофе + морс", weight: "830–900 г + напитки", price: "890 ₽" },
  ],
};

const vacancies = [
  {
    icon: "🥐",
    title: "ПЕКАРЬ",
    spots: 2,
    salary: "55 000",
    desc: "Замес теста, формовка, выпечка круассанов, булочек, пирожков. Работа с наставником.",
    schedule: "5 дней в неделю, утренняя смена",
    requirements: "Опыт не обязателен — обучаем с нуля",
  },
  {
    icon: "🍳",
    title: "ПОВАР",
    spots: 2,
    salary: "60 000",
    desc: "Приготовление блюд домашней кухни по рецептурам. Работа в дружном коллективе.",
    schedule: "5 дней в неделю, сменный график",
    requirements: "Опыт от 1 года, санитарная книжка",
  },
  {
    icon: "🍴",
    title: "ОФИЦИАНТ",
    spots: 2,
    salary: "40 000",
    desc: "Обслуживание гостей, приём заказов, поддержание уюта в зале. Чаевые сверху.",
    schedule: "Гибкий график, сменная работа",
    requirements: "Доброжелательность и желание работать",
  },
  {
    icon: "📋",
    title: "АДМИНИСТРАТОР",
    spots: 1,
    salary: "60 000",
    desc: "Координация работы кафе, встреча гостей, работа с кассой и бронированием.",
    schedule: "5 дней в неделю",
    requirements: "Опыт в сфере обслуживания от 1 года",
  },
  {
    icon: "🌱",
    title: "СТАЖЁР (ОПЛАЧИВАЕМАЯ СТАЖИРОВКА)",
    spots: 4,
    salary: "20 000",
    desc: "Помощь на кухне и в зале. Для подростков, выпускников детских домов и людей с ОВЗ. Наставник всегда рядом.",
    schedule: "Сокращённый день до 4 часов, гибкий график",
    requirements: "Желание учиться. Опыт не нужен",
  },
  {
    icon: "🧹",
    title: "УБОРЩИК",
    spots: 1,
    salary: "35 000",
    desc: "Поддержание чистоты в зале, на кухне и в подсобных помещениях.",
    schedule: "Утренняя смена, 5 дней в неделю",
    requirements: "Ответственность и аккуратность",
  },
];

export default function Index() {
  const tabs = Object.keys(menuData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openVacancy, setOpenVacancy] = useState<string | null>(null);
  const isCombo = activeTab === "⭐ КОМБО";

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">НАБЕРЕЖНАЯ ДОБРА</div>
        <nav>
          <a href="#menu">Меню</a>
          <a href="#stazheram">Стажёрам</a>
          <a href="#vacancies">Вакансии</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              НАБЕРЕЖНАЯ
              <br />
              <span style={{ color: "var(--primary)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>ДОБРА —</span>
              <br />
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "var(--dark)", fontSize: "0.75em" }}>там, где сердцу тепло</span>
            </h1>
            <p className="text-base md:text-lg mb-8 md:mb-10 leading-relaxed text-[#555]">
              Домашняя кухня и своя пекарня во Владивостоке. Каждый обед здесь — это чей-то первый рабочий опыт. Средний чек 850 ₽.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#menu" className="btn-cta" style={{ background: "var(--primary)", color: "white", borderColor: "var(--primary)", textDecoration: "none" }}>
                Смотреть меню
              </a>
              <button className="btn-cta" style={{ background: "white" }}>О нас</button>
            </div>
          </div>
          <div className="hero-img" style={{ overflow: "hidden", padding: 0 }}>
            <img
              src="https://cdn.poehali.dev/projects/61f11d1b-729d-444c-aa93-74962c1ea83e/files/7651426c-1991-47d0-a349-70f0d69b22a3.jpg"
              alt="Выпечка в кафе"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div className="sticker" style={{ background: "#4a9fd5", color: "white", border: "none", boxShadow: "none" }}>
              ОБЕД<br />ОТ 850 ₽
            </div>
            <div style={{ position: "absolute", top: "20%", left: "8%", background: "white", color: "#1a1a1a", padding: "8px 18px", borderRadius: "999px", fontWeight: 700, fontSize: "14px", border: "2px solid #1a1a1a" }}>
              #ДОБРОЕДЕЛО
            </div>
            <div style={{ position: "absolute", bottom: "32%", right: "8%", background: "white", color: "#1a1a1a", padding: "8px 18px", borderRadius: "999px", fontWeight: 700, fontSize: "14px", border: "2px solid #1a1a1a" }}>
              ТЕПЛО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ДОМАШНИЙ БОРЩ * КРУАССАНЫ ИЗ ПЕЧИ * КОФЕ ИЗ ЗЕРНА * ОБЕД ЗА 5 МИНУТ * ВЛАДИВОСТОК * ДОМАШНИЙ БОРЩ * КРУАССАНЫ ИЗ ПЕЧИ * КОФЕ ИЗ ЗЕРНА * ОБЕД ЗА 5 МИНУТ * ВЛАДИВОСТОК
          </div>
        </div>

        {/* МЕНЮ */}
        <section className="section-padding" id="menu">
          <h2 className="section-title" style={{ marginBottom: "32px" }}>МЕНЮ</h2>

          {/* Табы */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              const isComboTab = tab === "⭐ КОМБО";
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "10px 18px",
                    border: "3px solid #1a1a1a",
                    fontWeight: 800,
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                    background: isActive ? (isComboTab ? "#8b1a1a" : "#1a1a1a") : "white",
                    color: isActive ? "white" : "#1a1a1a",
                    boxShadow: isActive ? "4px 4px 0 #8b1a1a" : "none",
                    transition: "all 0.15s",
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Таблица */}
          <div style={{ border: "3px solid #1a1a1a", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#1a1a1a", color: "white" }}>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>Блюдо</th>
                  {!isCombo && <th style={{ padding: "14px 16px", textAlign: "center", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", whiteSpace: "nowrap" }}>Вес / объём</th>}
                  <th style={{ padding: "14px 20px", textAlign: "right", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", whiteSpace: "nowrap" }}>Цена</th>
                </tr>
              </thead>
              <tbody>
                {(menuData[activeTab as keyof typeof menuData] as Array<{ name: string; desc?: string; weight: string; price: string }>).map((item, i) => (
                  <tr key={item.name} style={{ borderBottom: "1px solid #e0d8cc", background: i % 2 === 0 ? "white" : "#fdf9f0" }}>
                    <td style={{ padding: "16px 20px" }}>
                      <div style={{ fontWeight: 600, fontSize: "15px" }}>{item.name}</div>
                      {item.desc && <div style={{ fontSize: "13px", color: "#888", marginTop: "2px" }}>{item.desc}</div>}
                    </td>
                    {!isCombo && <td style={{ padding: "16px", textAlign: "center", fontSize: "14px", color: "#666", whiteSpace: "nowrap" }}>{item.weight}</td>}
                    <td style={{ padding: "16px 20px", textAlign: "right", fontSize: "16px", fontWeight: 800, color: "#8b1a1a", whiteSpace: "nowrap" }}>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {isCombo && (
            <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "8px", color: "#555", fontSize: "14px", fontWeight: 600 }}>
              <span>⭐</span>
              <span>БИЗНЕС-ЛАНЧ ДОСТУПЕН С 11:00 ДО 15:00</span>
            </div>
          )}
        </section>

        {/* ВАКАНСИИ */}
        <section className="section-padding" id="vacancies" style={{ borderTop: "3px solid #1a1a1a" }}>
          <h2 className="section-title" style={{ marginBottom: "40px" }}>ВАКАНСИИ</h2>

          <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {vacancies.map((v) => {
              const isOpen = openVacancy === v.title;
              return (
                <div key={v.title} style={{ border: "3px solid #1a1a1a", background: "white", padding: "24px", boxShadow: "6px 6px 0 #1a1a1a" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <span style={{ fontSize: "32px" }}>{v.icon}</span>
                    <span style={{ background: "#1a1a1a", color: "white", padding: "4px 10px", fontSize: "12px", fontWeight: 700 }}>
                      {v.spots} {v.spots === 1 ? "место" : "места"}
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "15px", fontWeight: 800, marginBottom: "6px", textTransform: "uppercase" }}>{v.title}</div>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#8b1a1a", marginBottom: "12px" }}>
                    {v.salary} ₽ <span style={{ fontSize: "14px", fontWeight: 600, color: "#888" }}>/мес</span>
                  </div>

                  {isOpen ? (
                    <div>
                      <p style={{ fontSize: "14px", color: "#444", lineHeight: 1.6, marginBottom: "10px" }}>{v.desc}</p>
                      <p style={{ fontSize: "13px", color: "#555", marginBottom: "4px" }}>
                        <span style={{ fontWeight: 700 }}>📅 График:</span> {v.schedule}
                      </p>
                      <p style={{ fontSize: "13px", color: "#555", marginBottom: "16px" }}>
                        <span style={{ fontWeight: 700 }}>✅ Требования:</span> {v.requirements}
                      </p>
                      <button
                        onClick={() => setOpenVacancy(null)}
                        style={{ background: "none", border: "none", color: "#8b1a1a", fontWeight: 800, fontSize: "13px", textTransform: "uppercase", cursor: "pointer", letterSpacing: "0.5px", padding: 0 }}
                      >
                        СКРЫТЬ ↑
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setOpenVacancy(v.title)}
                      style={{ background: "none", border: "none", color: "#8b1a1a", fontWeight: 800, fontSize: "13px", textTransform: "uppercase", cursor: "pointer", letterSpacing: "0.5px", padding: 0 }}
                    >
                      ПОДРОБНЕЕ ↓
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ИНСТАГРАМ */}
        <section className="section-padding" style={{ borderTop: "3px solid #1a1a1a" }}>
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @NABEREZHNAYA.DOBRA
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Домашняя еда" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Кофе" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Выпечка" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Атмосфера кафе" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">НАБЕРЕЖНАЯ ДОБРА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Социальное кафе с домашней кухней и собственной пекарней. Владивосток, ул. Светланская. Каждый обед — это вклад в чью-то судьбу.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#vacancies" style={{ color: "inherit", textDecoration: "none" }}>Вакансии</a></li>
            <li><a href="#stazheram" style={{ color: "inherit", textDecoration: "none" }}>Стажёрам</a></li>
            <li><a href="#contacts" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 08:00 – 20:00</li>
            <li>Суб: 09:00 – 18:00</li>
            <li>Вс: 10:00 – 17:00</li>
            <li>Обед: 11:00–15:00</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2026 НАБЕРЕЖНАЯ ДОБРА</span>
          <span>ЕДА С ДУШОЙ</span>
          <span>VK / TG / IG</span>
        </div>
      </footer>
    </>
  );
}
