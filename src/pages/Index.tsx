export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">НАБЕРЕЖНАЯ<br className="block md:hidden" /> ДОБРА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Миссия</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Бизнес-ланч</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЕДА КАК
              <br />
              ДОМА, <span>с душой</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Социальное кафе во Владивостоке. Домашние обеды, свежая выпечка из собственной пекарни и настоящий кофе. Средний чек — 850 ₽.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Наша миссия
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ОБЕД
              <br />
              за 5 минут
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ДОМАШНЯЯЕДА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              СВЕЖАК
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ДОМАШНИЙ БОРЩ * КРУАССАНЫ ИЗ ПЕЧИ * КОФЕ ИЗ ЗЕРНА * БИЗНЕС-ЛАНЧ ЗА 5 МИНУТ * ВЛАДИВОСТОК * ДОМАШНИЙ БОРЩ * КРУАССАНЫ ИЗ ПЕЧИ * КОФЕ ИЗ ЗЕРНА * БИЗНЕС-ЛАНЧ ЗА 5 МИНУТ * ВЛАДИВОСТОК
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">МЕНЮ ДНЯ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит обеда</span>
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Котлета с пюре"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Котлета с пюре</h3>
                  <span className="price">320 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Домашние котлеты из фермерской свинины, сливочное пюре и соус по-деревенски.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Из пекарни
              </span>
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Круассан"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Круассан с начинкой</h3>
                  <span className="price">180 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Слоёное тесто, хрустящая корочка. Свежий из печи каждое утро — ветчина, сыр или джем.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Кофе"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Кофе с собой</h3>
                  <span className="price">190 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Зерновая арабика, обученные бариста. Добавки — сиропы, корица, растительное молоко.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЕДА С СМЫСЛОМ.</h2>
            <p className="vibe-text">
              «Набережная добра» — это не просто кафе. Каждый ваш обед даёт работу и шанс стажёрам: подросткам, выпускникам детских домов и людям с ОВЗ. На наших стенах — их истории. Вы видите, кому помогаете. Приходите с аппетитом, уходите с хорошим настроением.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Истории стажёров
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @NABEREZHNAYA.DOBRA
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Домашняя еда"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Кофе"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Выпечка"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера кафе"
              />
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
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Миссия
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 08:00 – 20:00</li>
            <li>Суб: 09:00 – 18:00</li>
            <li>Вс: 10:00 – 17:00</li>
            <li>Бизнес-ланч: 12:00–15:00</li>
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
