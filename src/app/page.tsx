'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode, ElementType } from "react";

const sections = {
  audience: "#audience",
  startups: "#startups",
  investors: "#investors",
  corporates: "#corporates",
  web3: "#web3",
  trust: "#trust",
  contact: "#contact",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type FadeInSectionProps = {
  id?: string;
  children: ReactNode;
  delay?: number;
};

function FadeInSection({ id, children, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.section
      id={id}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="space-y-5"
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Шапка */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">
              UNEXT.ONE
            </span>
            <span className="hidden text-xs text-slate-400 sm:inline">
              Legal Partner For Growth
            </span>
          </div>
          <nav className="hidden gap-4 text-sm text-slate-300 sm:flex">
            <a href={sections.audience} className="hover:text-slate-50">
              Кому помогаем
            </a>
            <a href={sections.startups} className="hover:text-slate-50">
              Стартапы
            </a>
            <a href={sections.investors} className="hover:text-slate-50">
              Инвесторы
            </a>
            <a href={sections.corporates} className="hover:text-slate-50">
              Корпорации &amp; Web3
            </a>
            <a href={sections.contact} className="hover:text-slate-50">
              Контакты
            </a>
          </nav>
          <a
            href={sections.contact}
            className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
          >
            Получить консультацию
          </a>
        </div>
      </motion.header>

      {/* Контент */}
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 space-y-24">
        {/* Hero */}
        <section id="hero" className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Юридический партнёр для роста бизнеса — от стартапа до сделки, от фаундера до инвестора, от корпоративной структуры до DAO.
          </div>

          <div className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Юридическая поддержка роста: от SAFE до M&amp;A — быстро, понятно и без воды
              </h1>
              <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                Помогаем стартапам, инвесторам, корпорациям и Web3-командам закрывать
                юридические задачи на любой стадии: от первых договорённостей до крупных сделок.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={sections.contact}
                  className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-600"
                >
                  Получить бесплатную консультацию
                </a>
                <a
                  href={sections.trust}
                  className="text-sm text-slate-300 hover:text-slate-100"
                >
                  Смотреть кейсы ↓
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Понимаем задачи бизнеса. Делаем быстро. Работаем без лишней бюрократии.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
              <h2 className="mb-3 text-sm font-medium text-slate-100">
                Коротко о вас — и мы вернёмся с планом действий
              </h2>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Форма пока работает как демо. Подключите отправку позже.");
                }}
              >
                <div className="space-y-1">
                  <label className="text-xs text-slate-300">Имя*</label>
                  <input
                    required
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-500"
                    placeholder="Как к вам обращаться?"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-300">
                    Email или Telegram*
                  </label>
                  <input
                    required
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-500"
                    placeholder="@username или email"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-300">
                    Кратко: задача (опционально)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-500"
                    placeholder="Сделка, инвестиции, структура, DAO..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-600"
                >
                  Получить план действий
                </button>
                <p className="text-[10px] leading-snug text-slate-500">
                  Отправляя форму, вы соглашаетесь на обработку данных. Никакого спама — только ответ по вашему запросу.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Кому мы помогаем */}
        <section id="audience" className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Работаем там, где бизнес двигается быстрее юристов
          </h2>
          <p className="max-w-2xl text-sm text-slate-300">
            Мы встраиваемся в реальный темп роста: стартапы, фонды, корпорации и Web3-команды,
            которым нужны решения, а не лекции по теории права.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AudienceCard
              label="🚀 Стартапам"
              description="Оформляем сделки, структуру и IP"
              href={sections.startups}
            />
            <AudienceCard
              label="💰 Инвесторам"
              description="Проверяем стартапы и защищаем сделки"
              href={sections.investors}
            />
            <AudienceCard
              label="🏢 Корпорациям"
              description="Строим юридическую систему под рост и M&A"
              href={sections.corporates}
            />
            <AudienceCard
              label="📊 COO и CFO"
              description="Снимаем рутину с юр-документов"
            />
            <AudienceCard
              label="🌐 Web3-командам"
              description="DAO, токены, AML — безопасно и понятно"
              href={sections.web3}
            />
          </div>
        </section>

        {/* Стартапы */}
        <section id="startups" className="space-y-5">
          <SectionTitle
            title="Сделка с инвестором — мы закроем юридическую часть за вас"
            subtitle="Когда инвестор уже ждёт, а документы ещё нет — мы приводим структуру, договорённости и IP в порядок."
          />
          <ul className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            <li>• Оформляем отношения между фаундерами</li>
            <li>• Строим юридическую обвязку бизнес-модели</li>
            <li>• Разрабатываем корпоративный договор</li>
            <li>• Защищаем интеллектуальную собственность</li>
            <li>• Консультируем по привлечению инвестиций</li>
            <li>• Сопровождаем текущие операции</li>
            <li>• Разрабатываем опционные программы</li>
            <li>• Готовим к предпродажной проверке (due diligence)</li>
            <li>• Разрешаем корпоративные споры</li>
          </ul>
          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            📥 Скачать чек-лист "Готов ли ваш стартап к инвестициям"
          </Link>
        </section>

        {/* Инвесторы */}
        <section id="investors" className="space-y-5">
          <SectionTitle
            title="Мы покажем, где спрятаны риски стартапа до сделки"
            subtitle="Юридическая прозрачность объекта инвестиций — до того, как деньги ушли со счёта."
          />
          <ul className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            <li>• Анализируем юридические и корпоративные риски</li>
            <li>• Проводим полное Due Diligence объекта инвестирования</li>
            <li>• Готовим и проверяем инвестиционную документацию</li>
            <li>• Сопровождаем инвестиционные сделки</li>
            <li>• Помогаем структурировать портфель</li>
            <li>• Разрешаем споры с основателями и соинвесторами</li>
          </ul>
          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            📥 PDF "ТОП-7 юридических ошибок стартапов глазами инвестора"
          </Link>
        </section>

        {/* Корпорации */}
        <section id="corporates" className="space-y-5">
          <SectionTitle
            title="Юридическая инфраструктура для роста и сделок"
            subtitle="Группа компаний, новые рынки, M&A — под это нужна система, а не набор разрозненных договоров."
          />
          <ul className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            <li>• Делаем Legal "check-up" компании</li>
            <li>• Оптимизируем корпоративную структуру под рост и инвестиции</li>
            <li>• Разрабатываем корпоративные договоры</li>
            <li>• Защищаем интеллектуальную собственность</li>
            <li>• Сопровождаем сделки M&amp;A</li>
            <li>• Строим опционные программы</li>
            <li>• Подготавливаем типовые договоры и регламенты</li>
            <li>• Готовим к продаже бизнеса или привлечению капитала</li>
            <li>• Разрешаем корпоративные споры</li>
          </ul>
          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            📥 Гайд "Юридическая карта роста компании"
          </Link>
        </section>

        {/* Web3 */}
        <section id="web3" className="space-y-5">
          <SectionTitle
            title="Легализация DAO и токенов — без серых зон"
            subtitle="Web3-проекты живут в другой логике. Мы соединяем её с требованиями регуляторов и юрисдикций."
          />
          <ul className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            <li>• Проектируем легальную структуру DAO</li>
            <li>• Консультируем по токеномике: utility / security</li>
            <li>• Настраиваем AML/KYC-комплаенс</li>
            <li>• Готовим соглашения валидаторов и стейкхолдеров</li>
            <li>• Адаптируем проекты под выбранные юрисдикции</li>
          </ul>
          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            📥 Получить "Legal Survival Kit для Web3-проекта"
          </Link>
        </section>

        {/* Почему доверяют */}
        <section id="trust" className="space-y-5">
          <SectionTitle
            title="Кейсы, за которыми — сделки, инвестиции и рост"
            subtitle="Несколько примеров того, как юридическая работа превращается в понятный результат."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <CaseCard
              title="Подготовка стартапа к раунду $1,5M"
              text="Наведён порядок в структуре, IP и документах. Все материалы для инвестора — за 5 дней."
            />
            <CaseCard
              title="Экспресс Due Diligence для бизнес-ангела"
              text="Выявили неочевидные риски по IP и структуре, которые могли обнулить доходность сделки."
            />
            <CaseCard
              title="Слияние двух SaaS-компаний в Европе"
              text="Сделка M&A с безопасной передачей клиентов, кода и команды. Учтены регуляторные требования."
            />
            <CaseCard
              title="Структурирование DAO под выход в ЕС"
              text="Построена модель с учётом AML, налогов и требований к токенам. Проект не завис в «серой зоне»."
            />
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <p>«Быстро, по делу и без бюрократии. Редкий случай, когда юристы говорят на языке бизнеса.»</p>
            <p>«Помогли закрыть сделку, которую мы тянули месяцами. После их ревью стало понятно, что делать.»</p>
            <p>«Наконец-то юристы, которые понимают, как думают фаундеры и инвесторы, а не только регуляторы.»</p>
          </div>
        </section>

        {/* Финальный CTA */}
        <section id="contact" className="space-y-6">
          <SectionTitle
            title="Разберем вашу ситуацию — бесплатно и по существу"
            subtitle="Оставьте заявку — проведём экспресс-анализ и предложим конкретные шаги, без общих фраз и юридических мантр."
          />
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-start">
            <form
              className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("В продакшене подключите отправку формы (почта, Telegram, CRM).");
              }}
            >
              <div className="space-y-1">
                <label className="text-xs text-slate-300">Имя*</label>
                <input
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-500"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300">Email или Telegram*</label>
                <input
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-500"
                  placeholder="email@company.com или @username"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300">
                  Кратко опишите задачу (опционально)
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-500"
                  placeholder="Раунд, сделка, структура, Web3-проект..."
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300">
                  Pitch deck или документ (опционально)
                </label>
                <input
                  type="file"
                  className="w-full text-xs text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-slate-800 file:px-3 file:py-1.5 file:text-xs file:text-slate-50 hover:file:bg-slate-700"
                />
                <p className="text-[10px] text-slate-500">
                  Загрузка файла сейчас демонстрационная. В боевой версии подключите хранение/отправку.
                </p>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-600"
              >
                Получить план действий
              </button>
            </form>

            <div className="space-y-3 text-sm text-slate-300">
              <p>
                Мы работаем с фаундерами, инвесторами, корпорациями и Web3-командами,
                которым важно не просто «быть в порядке по документам», а двигаться дальше:
                к сделке, раунду, рынку.
              </p>
              <p>
                В первом созвоне разберём вашу ситуацию, покажем критические точки и предложим
                понятный план действий. Если не подойдём друг другу — вы хотя бы увидите картину
                целиком и сможете двигаться дальше.
              </p>
            </div>
          </div>
        </section>

        {/* Футер */}
        <footer className="border-t border-slate-800 pt-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} UNEXT.ONE — юридический партнёр для роста бизнеса.</p>
            <p>От стартапа до сделки, от фаундера до инвестора, от корпструктуры до DAO.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

type AudienceCardProps = {
  label: string;
  description: string;
  href?: string;
};

function AudienceCard({ label, description, href }: AudienceCardProps) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="block rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-200 transition hover:border-indigo-500 hover:bg-slate-900/80"
    >
      <div className="font-medium text-slate-50">{label}</div>
      <div className="mt-1 text-slate-300">{description}</div>
    </Wrapper>
  );
}

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-sm text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}

type CaseCardProps = {
  title: string;
  text: string;
};

function CaseCard({ title, text }: CaseCardProps) {
  return (
    <div className="h-full rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-200">
      <h3 className="mb-2 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}

type AnimatedCardProps = {
  children: ReactNode;
};

function AnimatedCard({ children }: AnimatedCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.15 } }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

type BulletGridProps = {
  items: string[];
};

function BulletGrid({ items }: BulletGridProps) {
  return (
    <motion.ul
      variants={fadeInUp}
      className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2"
    >
      {items.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </motion.ul>
  );
}

type FieldProps =
  | {
      as?: "input";
      label: string;
      required?: boolean;
      placeholder?: string;
    }
  | {
      as: "textarea";
      label: string;
      required?: boolean;
      placeholder?: string;
      rows?: number;
    };

function Field(props: FieldProps) {
  const common =
    "w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-500";

  if (props.as === "textarea") {
    const { label, required, placeholder, rows = 3 } = props;
    return (
      <div className="space-y-1">
        <label className="text-xs text-slate-300">
          {label}
          {required && "*"}
        </label>
        <textarea
          rows={rows}
          className={common}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  }

  const { label, required, placeholder } = props;
  return (
    <div className="space-y-1">
      <label className="text-xs text-slate-300">
        {label}
        {required && "*"}
      </label>
      <input
        className={common}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
