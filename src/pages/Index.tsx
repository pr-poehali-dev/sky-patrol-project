export default function Index() {

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

        <section className="section-padding" id="menu">
          <h2 className="section-title" style={{ marginBottom: "48px", textAlign: "center" }}>МЕНЮ</h2>

          {[
            {
              title: "СУПЫ",
              items: [
                { name: "Суп куриный с лапшой (домашний)", weight: "320 г", price: "250 ₽" },
                { name: "Борщ с говядиной и сметаной", weight: "350 г", price: "320 ₽" },
                { name: "Суп рыбный с лососем и укропом", weight: "320 г", price: "290 ₽" },
                { name: "Суп-пюре из тыквы с семечками", weight: "300 г", price: "220 ₽" },
              ],
            },
            {
              title: "ВТОРЫЕ БЛЮДА",
              items: [
                { name: "Картофельное пюре с котлетой по-домашнему", weight: "300 г", price: "350 ₽" },
                { name: "Гречка с печенью по-строгановски", weight: "280 г", price: "380 ₽" },
                { name: "Паста с курицей в сливочном соусе", weight: "320 г", price: "420 ₽" },
                { name: "Рис с запечённым лососем и овощами", weight: "280 г", price: "550 ₽" },
                { name: "Треска, запечённая с лимонником и сливочным маслом", weight: "270 г", price: "530 ₽" },
              ],
            },
            {
              title: "САЛАТЫ",
              items: [
                { name: "Цезарь с курицей и сухариками", weight: "180 г", price: "380 ₽" },
                { name: "Салат с тунцом, яйцом и свежими огурцами", weight: "170 г", price: "420 ₽" },
                { name: "Греческий с фетой и оливками", weight: "200 г", price: "350 ₽" },
                { name: "Салат из сезонных овощей с домашней заправкой", weight: "150 г", price: "250 ₽" },
                { name: "Салат с кальмаром и авокадо", weight: "180 г", price: "450 ₽" },
              ],
            },
            {
              title: "ВЫПЕЧКА",
              items: [
                { name: "Круассан классический", weight: "70 г", price: "150 ₽" },
                { name: "Круассан с шоколадом", weight: "80 г", price: "180 ₽" },
                { name: "Пирожок с картошкой и грибами", weight: "100 г", price: "120 ₽" },
                { name: "Пирожок с капустой", weight: "100 г", price: "100 ₽" },
                { name: "Булочка с корицей (синабон)", weight: "90 г", price: "180 ₽" },
                { name: "Блины с творогом и сметаной", weight: "120 г", price: "220 ₽" },
                { name: "Блины с мёдом", weight: "110 г", price: "200 ₽" },
                { name: "Бриошь с камчатским крабом и авокадо", weight: "110 г", price: "380 ₽" },
              ],
            },
            {
              title: "ДЕСЕРТЫ",
              items: [
                { name: "Медовик (домашний)", weight: "120 г", price: "280 ₽" },
                { name: "Чизкейк классический", weight: "130 г", price: "290 ₽" },
                { name: "Наполеон", weight: "130 г", price: "300 ₽" },
                { name: "Панкейки с фруктами и мёдом", weight: "150 г", price: "350 ₽" },
                { name: "Жареное мороженое", weight: "120 г", price: "290 ₽" },
                { name: "Десерт дня (от пекаря)", weight: "100–120 г", price: "200–250 ₽" },
              ],
            },
            {
              title: "НАПИТКИ",
              items: [
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
            },
          ].map((category) => (
            <div key={category.title} style={{ marginBottom: "48px" }}>
              <h3 style={{
                fontFamily: "'Unbounded', sans-serif",
                fontSize: "20px",
                fontWeight: 800,
                textTransform: "uppercase",
                borderBottom: "3px solid #1a1a1a",
                paddingBottom: "12px",
                marginBottom: "0",
                letterSpacing: "1px",
              }}>{category.title}</h3>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#f5f0e8" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "2px solid #1a1a1a" }}>Блюдо</th>
                    <th style={{ padding: "12px 16px", textAlign: "center", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "2px solid #1a1a1a", whiteSpace: "nowrap" }}>Вес / объём</th>
                    <th style={{ padding: "12px 16px", textAlign: "right", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "2px solid #1a1a1a", whiteSpace: "nowrap" }}>Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, i) => (
                    <tr key={item.name} style={{ background: i % 2 === 0 ? "white" : "#fdf9f0", borderBottom: "1px solid #e8e0d0" }}>
                      <td style={{ padding: "14px 16px", fontSize: "15px", fontWeight: 500 }}>{item.name}</td>
                      <td style={{ padding: "14px 16px", fontSize: "14px", color: "#666", textAlign: "center", whiteSpace: "nowrap" }}>{item.weight}</td>
                      <td style={{ padding: "14px 16px", fontSize: "16px", fontWeight: 800, color: "var(--primary)", textAlign: "right", whiteSpace: "nowrap" }}>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <div style={{ marginTop: "48px", padding: "24px", background: "#f5f0e8", border: "3px solid #1a1a1a" }}>
            <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "18px", fontWeight: 800, marginBottom: "20px", textTransform: "uppercase" }}>КОМБО-ПРЕДЛОЖЕНИЯ</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "10px 16px", textAlign: "left", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", borderBottom: "2px solid #1a1a1a" }}>Комбо</th>
                  <th style={{ padding: "10px 16px", textAlign: "left", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", borderBottom: "2px solid #1a1a1a" }}>Состав</th>
                  <th style={{ padding: "10px 16px", textAlign: "center", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", borderBottom: "2px solid #1a1a1a", whiteSpace: "nowrap" }}>Вес / объём</th>
                  <th style={{ padding: "10px 16px", textAlign: "right", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", borderBottom: "2px solid #1a1a1a", whiteSpace: "nowrap" }}>Цена</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Бизнес-ланч", desc: "Суп + второе + салат + компот/чай", weight: "900–1100 г", price: "550–650 ₽" },
                  { name: "Обед + кофе", desc: "Бизнес-ланч + капучино/латте", weight: "1100–1350 г + 200–250 мл", price: "750–850 ₽" },
                  { name: "Кофе + десерт", desc: "Любой кофе + десерт на выбор", weight: "200–250 мл + 90–130 г", price: "350–450 ₽" },
                  { name: "Семейный завтрак", desc: "Блины + круассан + 2 кофе + морс", weight: "830–900 г + напитки", price: "890 ₽" },
                ].map((combo, i) => (
                  <tr key={combo.name} style={{ borderBottom: "1px solid #d8d0c0", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.5)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 800, fontSize: "15px" }}>{combo.name}</td>
                    <td style={{ padding: "12px 16px", fontSize: "14px", color: "#555" }}>{combo.desc}</td>
                    <td style={{ padding: "12px 16px", fontSize: "13px", color: "#666", textAlign: "center", whiteSpace: "nowrap" }}>{combo.weight}</td>
                    <td style={{ padding: "12px 16px", fontSize: "16px", fontWeight: 800, color: "var(--primary)", textAlign: "right", whiteSpace: "nowrap" }}>{combo.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

        <section className="section-padding" id="vacancies" style={{ background: "#f5f0e8", borderTop: "3px solid #1a1a1a" }}>
          <h2 className="section-title" style={{ marginBottom: "16px", textAlign: "center" }}>ВАКАНСИИ</h2>
          <p style={{ textAlign: "center", color: "#555", marginBottom: "48px", fontSize: "16px", maxWidth: "600px", margin: "0 auto 48px" }}>
            Расскажите, какие вакансии у вас есть — и я оформлю их красиво здесь.
          </p>

          <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {[
              { title: "Повар", type: "Полная занятость", desc: "Готовим домашние блюда по проверенным рецептам. Опыт от 1 года, работа в тёплом коллективе." },
              { title: "Пекарь", type: "Полная занятость", desc: "Выпечка круассанов, булочек и пирожков каждое утро. Обучим с нуля, если есть желание." },
              { title: "Бариста", type: "Гибкий график", desc: "Зерновой кофе, авторские напитки. Оплачиваем обучение, ценим ответственность и улыбку." },
              { title: "Кассир / администратор", type: "Полная занятость", desc: "Встречаем гостей, принимаем заказы, помогаем с выбором. Главное — доброжелательность." },
            ].map((v) => (
              <div key={v.title} style={{ background: "white", border: "3px solid #1a1a1a", padding: "28px", boxShadow: "6px 6px 0 #1a1a1a" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", gap: "12px", flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "18px", fontWeight: 800 }}>{v.title}</h3>
                  <span style={{ background: "#8b1a1a", color: "white", padding: "4px 12px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", whiteSpace: "nowrap" }}>{v.type}</span>
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>{v.desc}</p>
                <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "var(--dark)", width: "100%", fontSize: "13px" }}>
                  Откликнуться
                </button>
              </div>
            ))}
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