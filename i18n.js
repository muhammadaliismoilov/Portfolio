/* Portfolio i18n — manba til: EN (data.json), qo'llab-quvvatlanadi: UZ (default), EN, RU.
   Kalit = DOM'dagi asl inglizcha matn (trim qilingan). Texnik atamalar tarjima qilinmaydi. */
window.AIV_I18N = {
  defaultLang: 'uz',
  storageKey: 'aiv-lang',
  langs: [
    { code: 'uz', label: 'UZ', htmlLang: 'uz', title: 'Oʻzbekcha' },
    { code: 'en', label: 'EN', htmlLang: 'en', title: 'English' },
    { code: 'ru', label: 'RU', htmlLang: 'ru', title: 'Русский' }
  ],

  months: {
    en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    uz: ['yanvar','fevral','mart','aprel','may','iyun','iyul','avgust','sentabr','oktabr','noyabr','dekabr'],
    ru: ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
  },
  dateAt: { en: ' at ', uz: ', ', ru: ' в ' },

  typeWords: {
    en: ['Backend Developer', 'API Architect', 'Node.js Engineer'],
    uz: ['Backend dasturchi', 'API arxitektori', 'Node.js muhandisi'],
    ru: ['Backend-разработчик', 'API-архитектор', 'Node.js-инженер']
  },

  dict: {
    /* ---- Navigatsiya ---- */
    "Home":   { uz: "Bosh sahifa", ru: "Главная" },
    "About":  { uz: "Men haqimda", ru: "Обо мне" },
    "Projects": { uz: "Loyihalar", ru: "Проекты" },
    "Experience": { uz: "Tajriba", ru: "Опыт" },
    "Education":  { uz: "Taʼlim", ru: "Образование" },
    "Contact":    { uz: "Aloqa", ru: "Контакты" },
    "Download CV": { uz: "CV yuklab olish", ru: "Скачать резюме" },
    "Open menu":   { uz: "Menyuni ochish", ru: "Открыть меню" },

    /* ---- Bo'lim sarlavhalari ---- */
    "About Me":  { uz: "Men haqimda", ru: "Обо мне" },
    "My Skills": { uz: "Koʻnikmalarim", ru: "Мои навыки" },
    "My Projects": { uz: "Loyihalarim", ru: "Мои проекты" },
    "Professional Experience": { uz: "Professional tajriba", ru: "Профессиональный опыт" },
    "Education & Certifications": { uz: "Taʼlim va sertifikatlar", ru: "Образование и сертификаты" },
    "Certifications": { uz: "Sertifikatlar", ru: "Сертификаты" },

    /* ---- Hero ---- */
    "Backend Developer (Node.js)": { uz: "Backend dasturchi (Node.js)", ru: "Backend-разработчик (Node.js)" },
    "Backend Developer specializing in scalable RESTful APIs with Node.js and TypeScript — clean architecture, JWT auth & RBAC, SQL/NoSQL schema design, and real-world integrations like Telegram bots.": {
      uz: "Backend dasturchi — Node.js va TypeScript yordamida kengaytiriladigan RESTful API'lar quraman. Toza arxitektura, JWT autentifikatsiya va RBAC, SQL/NoSQL sxema dizayni hamda Telegram botlar kabi real integratsiyalar.",
      ru: "Backend-разработчик — масштабируемые RESTful API на Node.js и TypeScript. Чистая архитектура, JWT-аутентификация и RBAC, проектирование схем SQL/NoSQL и реальные интеграции вроде Telegram-ботов."
    },
    "View Projects": { uz: "Loyihalarni koʻrish", ru: "Смотреть проекты" },
    "Get in Touch": { uz: "Bogʻlanish", ru: "Связаться" },
    "Roles Held":   { uz: "Ish oʻrinlari", ru: "Должности" },
    "Technologies": { uz: "Texnologiyalar", ru: "Технологии" },

    /* ---- Ko'nikmalar guruhlari ---- */
    "Languages": { uz: "Dasturlash tillari", ru: "Языки программирования" },
    "Backend & Frameworks": { uz: "Backend va freymvorklar", ru: "Backend и фреймворки" },
    "Databases": { uz: "Maʼlumotlar bazalari", ru: "Базы данных" },
    "ORMs & Data Access": { uz: "ORM va maʼlumotlarga kirish", ru: "ORM и доступ к данным" },
    "API & Auth": { uz: "API va autentifikatsiya", ru: "API и аутентификация" },
    "DevOps & Tools": { uz: "DevOps va vositalar", ru: "DevOps и инструменты" },
    "Integrations": { uz: "Integratsiyalar", ru: "Интеграции" },
    "Other": { uz: "Boshqa", ru: "Другое" },

    /* ---- GitHub faollik kartochkasi ---- */
    "Last active on GitHub": { uz: "GitHub'dagi soʻnggi faollik", ru: "Последняя активность на GitHub" },
    "DAYS": { uz: "KUN", ru: "ДНИ" },
    "HRS":  { uz: "SOAT", ru: "ЧАС" },
    "MIN":  { uz: "DAQ", ru: "МИН" },
    "SEC":  { uz: "SEK", ru: "СЕК" },

    /* ---- Bio (data.json) ---- */
    "I am a Backend Developer specializing in building robust and scalable RESTful APIs using Node.js and TypeScript, with hands-on experience in SQL (PostgreSQL) and NoSQL (MongoDB) databases, efficient database schema design, clean and maintainable architecture, JWT-based authentication and Role-Based Access Control (RBAC), as well as integrating Telegram Bots and real-world backend systems; I have successfully delivered multiple backend projects, collaborated in team-based environments, mentored junior students, and continuously focus on clean code, efficient architecture, and learning to solve complex backend challenges.": {
      uz: "Men Backend dasturchiman — Node.js va TypeScript yordamida ishonchli hamda kengaytiriladigan RESTful API'lar quraman. SQL (PostgreSQL) va NoSQL (MongoDB) maʼlumotlar bazalari bilan amaliy tajribam, samarali baza sxemasini loyihalash, toza va qoʻllab-quvvatlash oson arxitektura, JWT asosidagi autentifikatsiya va rollarga asoslangan kirish nazorati (RBAC), shuningdek Telegram botlar va real backend tizimlarni integratsiya qilish koʻnikmalarim bor. Bir nechta backend loyihani muvaffaqiyatli yakunlaganman, jamoada ishlaganman, boshlangʻich oʻquvchilarga mentorlik qilganman va doimiy ravishda toza kod, samarali arxitektura hamda murakkab backend masalalarini yechishni oʻrganishga eʼtibor qarataman.",
      ru: "Я Backend-разработчик, специализируюсь на создании надёжных и масштабируемых RESTful API на Node.js и TypeScript. Имею практический опыт работы с SQL (PostgreSQL) и NoSQL (MongoDB) базами данных, проектирования эффективных схем БД, чистой и поддерживаемой архитектуры, аутентификации на основе JWT и ролевой модели доступа (RBAC), а также интеграции Telegram-ботов и реальных backend-систем. Успешно завершил несколько backend-проектов, работал в команде, был наставником для начинающих студентов и постоянно уделяю внимание чистому коду, эффективной архитектуре и обучению решению сложных backend-задач."
    },

    /* ---- Aloqa ---- */
    "If you'd like to collaborate or have any questions, feel free to reach out through the following contact information.": {
      uz: "Hamkorlik qilmoqchi boʻlsangiz yoki savollaringiz boʻlsa, quyidagi aloqa maʼlumotlari orqali bemalol bogʻlaning.",
      ru: "Если вы хотите сотрудничать или у вас есть вопросы, свяжитесь со мной по указанным ниже контактам."
    },
    "Khorezm, Uzbekistan": { uz: "Xorazm, Oʻzbekiston", ru: "Хорезм, Узбекистан" },

    /* ---- Tajriba: lavozim / tashkilot / joy / davr ---- */
    "Mentor": { uz: "Mentor", ru: "Ментор" },
    "Backend Developer Intern": { uz: "Backend dasturchi (intern)", ru: "Backend-разработчик (стажёр)" },
    "Teacher Assistant": { uz: "Oʻqituvchi yordamchisi", ru: "Ассистент преподавателя" },

    "Digital Education Development Center (IT PARK)": {
      uz: "Raqamli taʼlimni rivojlantirish markazi (IT PARK)",
      ru: "Центр развития цифрового образования (IT PARK)"
    },
    "Najot Ta'lim (Khorezm branch)": { uz: "Najot Taʼlim (Xorazm filiali)", ru: "Najot Ta'lim (Хорезмский филиал)" },
    "Shovot, Khorezm Region, Uzbekistan": { uz: "Shovot, Xorazm viloyati, Oʻzbekiston", ru: "Шават, Хорезмская область, Узбекистан" },

    "October 2025 – May 2026":    { uz: "2025-yil oktabr – 2026-yil may", ru: "Октябрь 2025 – Май 2026" },
    "August 2025 – November 2025": { uz: "2025-yil avgust – 2025-yil noyabr", ru: "Август 2025 – Ноябрь 2025" },
    "June 2025 – August 2025":     { uz: "2025-yil iyun – 2025-yil avgust", ru: "Июнь 2025 – Август 2025" },
    "September 2020 – June 2025":  { uz: "2020-yil sentabr – 2025-yil iyun", ru: "Сентябрь 2020 – Июнь 2025" },
    "November 2024 – June 2025":   { uz: "2024-yil noyabr – 2025-yil iyun", ru: "Ноябрь 2024 – Июнь 2025" },

    /* ---- Tajriba: tafsilotlar ---- */
    "Mentored school students in Backend development using Node.js": {
      uz: "Maktab oʻquvchilariga Node.js yordamida Backend dasturlashdan mentorlik qildim",
      ru: "Наставлял школьников по backend-разработке на Node.js"
    },
    "Taught core backend technologies: JavaScript, TypeScript, Node.js, Express.js, NestJS": {
      uz: "Asosiy backend texnologiyalarini oʻrgatdim: JavaScript, TypeScript, Node.js, Express.js, NestJS",
      ru: "Преподавал основные backend-технологии: JavaScript, TypeScript, Node.js, Express.js, NestJS"
    },
    "Introduced students to REST API development and database fundamentals (MongoDB, PostgreSQL)": {
      uz: "Oʻquvchilarni REST API ishlab chiqish va maʼlumotlar bazasi asoslari (MongoDB, PostgreSQL) bilan tanishtirdim",
      ru: "Познакомил учеников с разработкой REST API и основами баз данных (MongoDB, PostgreSQL)"
    },
    "Helped students understand complex backend concepts through practical examples": {
      uz: "Amaliy misollar orqali oʻquvchilarga murakkab backend tushunchalarini tushunishda yordam berdim",
      ru: "Помогал ученикам разобраться в сложных backend-концепциях на практических примерах"
    },
    "Reviewed homework assignments and provided constructive code feedback": {
      uz: "Uy vazifalarini tekshirdim va kod boʻyicha konstruktiv fikr-mulohaza berdim",
      ru: "Проверял домашние задания и давал конструктивную обратную связь по коду"
    },

    "Developed efficient and scalable RESTful APIs using Drizzle ORM and PostgreSQL": {
      uz: "Drizzle ORM va PostgreSQL yordamida samarali hamda kengaytiriladigan RESTful API'lar ishlab chiqdim",
      ru: "Разрабатывал эффективные и масштабируемые RESTful API с использованием Drizzle ORM и PostgreSQL"
    },
    "Optimized SQL queries, improving database performance and request speed": {
      uz: "SQL soʻrovlarini optimallashtirib, maʼlumotlar bazasi unumdorligi va soʻrov tezligini oshirdim",
      ru: "Оптимизировал SQL-запросы, повысив производительность базы данных и скорость обработки запросов"
    },
    "Designed and implemented CRUD operations": {
      uz: "CRUD amallarini loyihalashtirdim va amalga oshirdim",
      ru: "Проектировал и реализовывал CRUD-операции"
    },
    "Prepared API documentation using Swagger, improving collaboration between frontend and backend teams": {
      uz: "Swagger yordamida API hujjatlarini tayyorlab, frontend va backend jamoalari oʻrtasidagi hamkorlikni yaxshiladim",
      ru: "Готовил документацию API в Swagger, улучшив взаимодействие между frontend- и backend-командами"
    },

    "Assisted instructors during backend development classes": {
      uz: "Backend dasturlash darslarida oʻqituvchilarga yordam berdim",
      ru: "Помогал преподавателям на занятиях по backend-разработке"
    },
    "Supported students with Node.js, JavaScript, Express.js, and database basics": {
      uz: "Oʻquvchilarga Node.js, JavaScript, Express.js va maʼlumotlar bazasi asoslari boʻyicha koʻmak berdim",
      ru: "Поддерживал студентов по Node.js, JavaScript, Express.js и основам баз данных"
    },
    "Helped students debug code and understand backend logic": {
      uz: "Oʻquvchilarga kodni debug qilish va backend mantiqini tushunishda yordam berdim",
      ru: "Помогал студентам отлаживать код и понимать backend-логику"
    },
    "Checked assignments and tracked students' learning progress": {
      uz: "Topshiriqlarni tekshirdim va oʻquvchilarning oʻzlashtirish jarayonini kuzatib bordim",
      ru: "Проверял задания и отслеживал прогресс обучения студентов"
    },

    /* ---- Ta'lim va sertifikatlar ---- */
    "Bachelor's Degree in Agricultural Mechanization": {
      uz: "Bakalavr — Qishloq xoʻjaligini mexanizatsiyalashtirish",
      ru: "Бакалавр — Механизация сельского хозяйства"
    },
    "Tashkent Institute of Irrigation and Agricultural Mechanization Engineers National Research University": {
      uz: "Toshkent irrigatsiya va qishloq xoʻjaligini mexanizatsiyalash muhandislari instituti Milliy tadqiqot universiteti",
      ru: "Ташкентский институт инженеров ирригации и механизации сельского хозяйства — Национальный исследовательский университет"
    },
    "Backend Development (Node.js)": { uz: "Backend dasturlash (Node.js)", ru: "Backend-разработка (Node.js)" },
    "JavaScript Algorithms and Data Structures": {
      uz: "JavaScript algoritmlari va maʼlumotlar tuzilmalari",
      ru: "Алгоритмы и структуры данных на JavaScript"
    },

    /* ---- Loyihalar ---- */
    "Education Center CRM System": { uz: "Oʻquv markazi CRM tizimi", ru: "CRM-система учебного центра" },
    "An education center management backend — live, fully functional, and deployed in production, with subdomain-based multi-branch routing. Automates monthly student billing via a distributed-lock, chunked cron job that prevents duplicate invoices across instances, and manages the full contract lifecycle — generation, approval, e-signing, and PDF export via Puppeteer. Features 4-tier RBAC (Superadmin, Admin, Manager, Teacher), Face-ID attendance tracking, financial reporting with Excel export, and an IP-whitelisted admin panel. Explore the live demo — Login: alishadmin, Password: alishadmin.": {
      uz: "Oʻquv markazini boshqarish uchun backend — ishlab turgan, toʻliq funksional va production'ga joylashtirilgan, subdomen asosidagi koʻp filialli marshrutlash bilan. Oylik toʻlovlarni taqsimlangan qulf (distributed lock) va boʻlaklab ishlovchi cron job orqali avtomatlashtiradi — bu bir nechta instansiyada takroriy hisob-fakturalar yaratilishining oldini oladi. Shartnomaning toʻliq hayotiy siklini boshqaradi: yaratish, tasdiqlash, elektron imzolash va Puppeteer orqali PDF eksporti. 4 bosqichli RBAC (Superadmin, Admin, Manager, Teacher), Face-ID orqali davomat nazorati, Excel eksporti bilan moliyaviy hisobotlar hamda IP boʻyicha cheklangan admin panel mavjud. Jonli demoni sinab koʻring — Login: alishadmin, Parol: alishadmin.",
      ru: "Backend для управления учебным центром — работает в продакшене, полностью функционален, с маршрутизацией по поддоменам для нескольких филиалов. Автоматизирует ежемесячные начисления студентам через cron-задачу с распределённой блокировкой и обработкой по частям, что исключает дублирование счетов между инстансами. Управляет полным жизненным циклом договора: создание, согласование, электронная подпись и экспорт в PDF через Puppeteer. Есть 4-уровневый RBAC (Superadmin, Admin, Manager, Teacher), учёт посещаемости по Face-ID, финансовая отчётность с экспортом в Excel и админ-панель с ограничением по IP. Попробуйте живое демо — Логин: alishadmin, Пароль: alishadmin."
    },

    "Market Automation System": { uz: "Doʻkonni avtomatlashtirish tizimi", ru: "Система автоматизации магазина" },
    "A high-performance backend system designed for grocery store automation, focusing on inventory management and transaction integrity. The engine handles complex stock tracking, automated sales reporting, and profit-loss analysis. It utilizes Redis caching to optimize data retrieval speeds and is fully Dockerized for seamless deployment on VPS, ensuring consistent environment reliability across production.": {
      uz: "Oziq-ovqat doʻkonini avtomatlashtirish uchun moʻljallangan yuqori unumdorlikdagi backend tizimi — asosiy eʼtibor ombor boshqaruvi va tranzaksiyalar yaxlitligiga qaratilgan. Tizim murakkab qoldiq hisobini yuritadi, savdo hisobotlarini avtomatik shakllantiradi va foyda-zarar tahlilini bajaradi. Maʼlumotlarni olish tezligini oshirish uchun Redis keshlashdan foydalanadi hamda VPS'ga muammosiz joylashtirish uchun toʻliq Docker'lashtirilgan — bu production muhitining barqarorligini taʼminlaydi.",
      ru: "Высокопроизводительный backend для автоматизации продуктового магазина с упором на управление складом и целостность транзакций. Система ведёт сложный учёт остатков, автоматически формирует отчёты о продажах и анализирует прибыль и убытки. Для ускорения выборки данных используется кеширование в Redis; проект полностью контейнеризован в Docker для беспроблемного развёртывания на VPS и стабильной работы в продакшене."
    },

    "School Management Platform": { uz: "Maktab boshqaruv platformasi", ru: "Платформа управления школой" },
    "A full-scale ERP + CRM + LMS + BI platform built for private schools, currently in active development across two repositories. Multi-tenant by design — a superadmin layer manages unlimited schools and branches with strict data isolation enforced via AsyncLocalStorage-based tenant scoping. Spans 50+ backend modules: turnstile-integrated attendance with Telegram/push alerts, HR and payroll, finance, admissions, LMS, library, transport, and analytics. Hardened with JWT refresh-token rotation, Argon2id hashing, wildcard RBAC permissions, and 2FA, with Sentry and Prometheus/Grafana observability built in. Architected to scale past 1000 users per school deployment.": {
      uz: "Xususiy maktablar uchun toʻliq koʻlamli ERP + CRM + LMS + BI platformasi — hozirda ikkita repozitoriyda faol ishlab chiqilmoqda. Dizayni boʻyicha multi-tenant: superadmin qatlami cheksiz sonli maktab va filiallarni boshqaradi, maʼlumotlar izolyatsiyasi esa AsyncLocalStorage asosidagi tenant scoping orqali qatʼiy taʼminlanadi. 50+ backend modulni qamrab oladi: turniketga ulangan davomat va Telegram/push xabarnomalar, HR va ish haqi, moliya, qabul, LMS, kutubxona, transport hamda analitika. Xavfsizlik JWT refresh-token rotatsiyasi, Argon2id heshlash, wildcard RBAC ruxsatlari va 2FA bilan mustahkamlangan; Sentry va Prometheus/Grafana monitoringi oʻrnatilgan. Har bir maktab uchun 1000 dan ortiq foydalanuvchiga kengayadigan qilib loyihalangan.",
      ru: "Полномасштабная платформа ERP + CRM + LMS + BI для частных школ, сейчас в активной разработке в двух репозиториях. Мультитенантная по архитектуре: слой суперадмина управляет неограниченным числом школ и филиалов, а строгая изоляция данных обеспечивается через tenant scoping на базе AsyncLocalStorage. Охватывает более 50 backend-модулей: посещаемость с интеграцией турникетов и уведомлениями в Telegram/push, HR и расчёт зарплат, финансы, приём учеников, LMS, библиотека, транспорт и аналитика. Безопасность усилена ротацией refresh-токенов JWT, хешированием Argon2id, wildcard-правами RBAC и 2FA; встроен мониторинг через Sentry и Prometheus/Grafana. Спроектирована с расчётом на масштабирование свыше 1000 пользователей на школу."
    },

    /* ---- Loyiha havolasi ---- */
    "Link": { uz: "Havola", ru: "Ссылка" },

    /* ---- Footer ---- */
    ". All rights reserved.": { uz: ". Barcha huquqlar himoyalangan.", ru: ". Все права защищены." },
    "All rights reserved.":   { uz: "Barcha huquqlar himoyalangan.", ru: "Все права защищены." }
  }
};
