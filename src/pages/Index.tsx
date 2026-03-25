export default function Index() {
  const menuItems = [
    {
      tag: "Суп дня",
      tagBg: "#8b1a1a",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Борщ домашний",
      price: "180 ₽",
      desc: "Наваристый бульон, свекла, капуста, сметана и ароматный чёрный хлеб.",
    },
    {
      tag: "Хит обеда",
      tagBg: "#8b1a1a",
      img: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Котлета с пюре",
      price: "320 ₽",
      desc: "Домашние котлеты из фермерской свинины, сливочное пюре, соус по-деревенски.",
    },
    {
      tag: "Популярное",
      tagBg: "#555",
      img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Паста с курицей",
      price: "290 ₽",
      desc: "Спагетти с нежной куриной грудкой в сливочном соусе и пармезаном.",
    },
    {
      tag: "Из пекарни",
      tagBg: "#a0522d",
      img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Круассан",
      price: "180 ₽",
      desc: "Слоёное тесто, хрустящая корочка. Свежий из печи — ветчина, сыр или джем.",
    },
    {
      tag: "Пекарня",
      tagBg: "#a0522d",
      img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Булочка с корицей",
      price: "150 ₽",
      desc: "Мягкое дрожжевое тесто, корица, глазурь. Тает во рту.",
    },
    {
      tag: "Напитки",
      tagBg: "#4a4a4a",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Кофе с собой",
      price: "190 ₽",
      desc: "Зерновая арабика, обученные бариста. Сиропы, корица, растительное молоко.",
    },
  ];

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">НАБЕРЕЖНАЯ ДОБРА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">Стажёрам</a>
          <a href="#">Вакансии</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
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
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white", borderColor: "var(--primary)" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                О нас
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ overflow: "hidden", padding: 0 }}>
            <img
              src="https://cdn.poehali.dev/projects/61f11d1b-729d-444c-aa93-74962c1ea83e/files/7651426c-1991-47d0-a349-70f0d69b22a3.jpg"
              alt="Выпечка в кафе"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div className="sticker" style={{ background: "#4a9fd5", color: "white", border: "none", boxShadow: "none" }}>
              ОБЕД
              <br />
              ОТ 850 ₽
            </div>
            <div style={{
              position: "absolute",
              top: "20%",
              left: "8%",
              background: "white",
              color: "#1a1a1a",
              padding: "8px 18px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "14px",
              border: "2px solid #1a1a1a",
              letterSpacing: "0.5px"
            }}>
              #ДОБРОЕДЕЛО
            </div>
            <div style={{
              position: "absolute",
              bottom: "32%",
              right: "8%",
              background: "white",
              color: "#1a1a1a",
              padding: "8px 18px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "14px",
              border: "2px solid #1a1a1a",
              letterSpacing: "0.5px"
            }}>
              ТЕПЛО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ДОМАШНИЙ БОРЩ * КРУАССАНЫ ИЗ ПЕЧИ * КОФЕ ИЗ ЗЕРНА * ОБЕД ЗА 5 МИНУТ * ВЛАДИВОСТОК * ДОМАШНИЙ БОРЩ * КРУАССАНЫ ИЗ ПЕЧИ * КОФЕ ИЗ ЗЕРНА * ОБЕД ЗА 5 МИНУТ * ВЛАДИВОСТОК
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {menuItems.map((item) => (
              <div className="menu-card" key={item.name}>
                <span className="menu-tag" style={{ background: item.tagBg, color: "white" }}>{item.tag}</span>
                <img src={item.img} alt={item.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding">
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
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Стажёрам</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Вакансии</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 08:00 – 20:00</li>
            <li>Суб: 09:00 – 18:00</li>
            <li>Вс: 10:00 – 17:00</li>
            <li>Обед: 12:00–15:00</li>
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
