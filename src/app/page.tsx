'use client';

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
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
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      {children}
    </motion.section>
  );
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[rgb(var(--color-electric-cyan))]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[rgb(var(--color-midnight))] text-[rgb(var(--color-silver))]">
      {/* Background effects */}
      <div className="fixed inset-0 mesh-gradient" />
      <div className="legal-pattern fixed inset-0" />
      <FloatingParticles />

      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="sticky top-0 z-50 border-b border-[rgba(var(--color-electric-cyan),0.15)] bg-[rgb(var(--color-midnight))]/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-slow rounded-lg bg-[rgb(var(--color-electric-cyan))] opacity-20 blur-md" />
              <span className="relative text-xl font-bold tracking-tight text-white">
                UNEXT<span className="text-gradient-cyan">.ONE</span>
              </span>
            </div>
            <span className="hidden border-l border-[rgba(var(--color-electric-cyan),0.2)] pl-3 text-xs text-[rgb(var(--color-silver))] sm:inline">
              Legal Partner For Growth
            </span>
          </motion.div>

          <nav className="hidden gap-6 text-sm lg:flex">
            {[
              ["Кому помогаем", sections.audience],
              ["Стартапы", sections.startups],
              ["Инвесторы", sections.investors],
              ["Корпорации & Web3", sections.corporates],
              ["Контакты", sections.contact],
            ].map(([label, href], i) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative text-[rgb(var(--color-silver))] transition-colors hover:text-[rgb(var(--color-electric-cyan))]"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={sections.contact}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))] px-6 py-2.5 text-sm font-semibold text-[rgb(var(--color-midnight))] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[rgba(var(--color-electric-cyan),0.3)]"
          >
            <span className="relative z-10">Получить консультацию</span>
            <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
          </motion.a>
        </div>
      </motion.header>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-16 space-y-32">
        {/* Hero */}
        <FadeInSection id="hero">
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-deep-navy),0.6)] px-4 py-1.5 text-xs text-[rgb(var(--color-silver))] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(var(--color-amber))] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgb(var(--color-amber))]" />
            </span>
            Юридический партнёр для роста бизнеса — от стартапа до сделки, от фаундера до инвестора, от корпоративной структуры до DAO.
          </motion.div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr,1fr] lg:items-start">
            <motion.div variants={fadeInUp} className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Юридическая поддержка роста:{" "}
                <span className="text-gradient-cyan">от SAFE до M&A</span> —
                быстро, понятно и без воды
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[rgb(var(--color-silver))]">
                Помогаем стартапам, инвесторам, корпорациям и Web3-командам закрывать
                юридические задачи на любой стадии: от первых договорённостей до крупных сделок.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={sections.contact}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))] px-8 py-4 text-base font-bold text-[rgb(var(--color-midnight))] shadow-lg shadow-[rgba(var(--color-electric-cyan),0.3)] transition-all hover:shadow-xl hover:shadow-[rgba(var(--color-electric-cyan),0.5)]"
                >
                  Получить бесплатную консультацию
                </motion.a>
                <a
                  href={sections.trust}
                  className="group flex items-center gap-2 text-base text-[rgb(var(--color-silver))] transition-colors hover:text-[rgb(var(--color-electric-cyan))]"
                >
                  <span>Смотреть кейсы</span>
                  <motion.span
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </a>
              </div>
              <p className="flex items-center gap-2 text-sm text-[rgb(var(--color-silver))]/60">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Понимаем задачи бизнеса. Делаем быстро. Работаем без лишней бюрократии.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="relative rounded-3xl border border-[rgba(var(--color-electric-cyan),0.2)] bg-gradient-to-br from-[rgba(var(--color-deep-navy),0.8)] to-[rgba(var(--color-midnight),0.8)] p-8 shadow-2xl backdrop-blur-xl border-glow"
            >
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[rgb(var(--color-electric-cyan))] opacity-10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[rgb(var(--color-amber))] opacity-10 blur-3xl" />

              <div className="relative">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  Коротко о вас — и мы вернёмся с планом действий
                </h2>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Форма пока работает как демо. Подключите отправку позже.");
                  }}
                >
                  <FormField label="Имя*" required placeholder="Как к вам обращаться?" />
                  <FormField label="Email или Telegram*" required placeholder="@username или email" />
                  <FormField
                    label="Кратко: задача (опционально)"
                    as="textarea"
                    rows={3}
                    placeholder="Сделка, инвестиции, структура, DAO..."
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))] px-6 py-3 text-sm font-bold text-[rgb(var(--color-midnight))] shadow-lg transition-all hover:shadow-xl"
                  >
                    Получить план действий
                  </motion.button>
                  <p className="text-[10px] leading-relaxed text-[rgb(var(--color-silver))]/50">
                    Отправляя форму, вы соглашаетесь на обработку данных. Никакого спама — только ответ по вашему запросу.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </FadeInSection>

        {/* Audience */}
        <FadeInSection id="audience">
          <div className="space-y-3">
            <motion.div
              variants={fadeInUp}
              className="inline-block rounded-full border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-electric-cyan),0.1)] px-4 py-1 text-xs font-semibold tracking-wide text-[rgb(var(--color-electric-cyan))] backdrop-blur-sm"
            >
              НАШИ КЛИЕНТЫ
            </motion.div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Работаем там, где бизнес двигается{" "}
              <span className="text-gradient-cyan">быстрее юристов</span>
            </h2>
            <p className="max-w-3xl text-base text-[rgb(var(--color-silver))]">
              Мы встраиваемся в реальный темп роста: стартапы, фонды, корпорации и Web3-команды,
              которым нужны решения, а не лекции по теории права.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🚀", label: "Стартапам", desc: "Оформляем сделки, структуру и IP", href: sections.startups },
              { icon: "💰", label: "Инвесторам", desc: "Проверяем стартапы и защищаем сделки", href: sections.investors },
              { icon: "🏢", label: "Корпорациям", desc: "Строим юридическую систему под рост и M&A", href: sections.corporates },
              { icon: "📊", label: "COO и CFO", desc: "Снимаем рутину с юр-документов" },
              { icon: "🌐", label: "Web3-командам", desc: "DAO, токены, AML — безопасно и понятно", href: sections.web3 },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <AudienceCard {...item} />
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        {/* Startups */}
        <FadeInSection id="startups">
          <SectionTitle
            tag="ДЛЯ СТАРТАПОВ"
            title="Сделка с инвестором — мы закроем юридическую часть за вас"
            subtitle="Когда инвестор уже ждёт, а документы ещё нет — мы приводим структуру, договорённости и IP в порядок."
          />
          <BulletGrid
            items={[
              "Оформляем отношения между фаундерами",
              "Строим юридическую обвязку бизнес-модели",
              "Разрабатываем корпоративный договор",
              "Защищаем интеллектуальную собственность",
              "Консультируем по привлечению инвестиций",
              "Сопровождаем текущие операции",
              "Разрабатываем опционные программы",
              "Готовим к предпродажной проверке (due diligence)",
              "Разрешаем корпоративные споры",
            ]}
          />
          <DownloadLink text='Скачать чек-лист "Готов ли ваш стартап к инвестициям"' />
        </FadeInSection>

        {/* Investors */}
        <FadeInSection id="investors">
          <SectionTitle
            tag="ДЛЯ ИНВЕСТОРОВ"
            title="Мы покажем, где спрятаны риски стартапа до сделки"
            subtitle="Юридическая прозрачность объекта инвестиций — до того, как деньги ушли со счёта."
          />
          <BulletGrid
            items={[
              "Анализируем юридические и корпоративные риски",
              "Проводим полное Due Diligence объекта инвестирования",
              "Готовим и проверяем инвестиционную документацию",
              "Сопровождаем инвестиционные сделки",
              "Помогаем структурировать портфель",
              "Разрешаем споры с основателями и соинвесторами",
            ]}
          />
          <DownloadLink text='PDF "ТОП-7 юридических ошибок стартапов глазами инвестора"' />
        </FadeInSection>

        {/* Corporates */}
        <FadeInSection id="corporates">
          <SectionTitle
            tag="ДЛЯ КОРПОРАЦИЙ"
            title="Юридическая инфраструктура для роста и сделок"
            subtitle="Группа компаний, новые рынки, M&A — под это нужна система, а не набор разрозненных договоров."
          />
          <BulletGrid
            items={[
              'Делаем Legal "check-up" компании',
              "Оптимизируем корпоративную структуру под рост и инвестиции",
              "Разрабатываем корпоративные договоры",
              "Защищаем интеллектуальную собственность",
              "Сопровождаем сделки M&A",
              "Строим опционные программы",
              "Подготавливаем типовые договоры и регламенты",
              "Готовим к продаже бизнеса или привлечению капитала",
              "Разрешаем корпоративные споры",
            ]}
          />
          <DownloadLink text='Гайд "Юридическая карта роста компании"' />
        </FadeInSection>

        {/* Web3 */}
        <FadeInSection id="web3">
          <SectionTitle
            tag="ДЛЯ WEB3"
            title="Легализация DAO и токенов — без серых зон"
            subtitle="Web3-проекты живут в другой логике. Мы соединяем её с требованиями регуляторов и юрисдикций."
          />
          <BulletGrid
            items={[
              "Проектируем легальную структуру DAO",
              "Консультируем по токеномике: utility / security",
              "Настраиваем AML/KYC-комплаенс",
              "Готовим соглашения валидаторов и стейкхолдеров",
              "Адаптируем проекты под выбранные юрисдикции",
            ]}
          />
          <DownloadLink text='Получить "Legal Survival Kit для Web3-проекта"' />
        </FadeInSection>

        {/* Trust / Cases */}
        <FadeInSection id="trust">
          <SectionTitle
            tag="ДОКАЗАТЕЛЬСТВА"
            title="Кейсы, за которыми — сделки, инвестиции и рост"
            subtitle="Несколько примеров того, как юридическая работа превращается в понятный результат."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Подготовка стартапа к раунду $1,5M",
                text: "Наведён порядок в структуре, IP и документах. Все материалы для инвестора — за 5 дней.",
              },
              {
                title: "Экспресс Due Diligence для бизнес-ангела",
                text: "Выявили неочевидные риски по IP и структуре, которые могли обнулить доходность сделки.",
              },
              {
                title: "Слияние двух SaaS-компаний в Европе",
                text: "Сделка M&A с безопасной передачей клиентов, кода и команды. Учтены регуляторные требования.",
              },
              {
                title: "Структурирование DAO под выход в ЕС",
                text: "Построена модель с учётом AML, налогов и требований к токенам. Проект не завис в «серой зоне».",
              },
            ].map((caseItem, i) => (
              <motion.div
                key={caseItem.title}
                variants={scaleIn}
                custom={i}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <CaseCard {...caseItem} />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 space-y-4 rounded-2xl border border-[rgba(var(--color-electric-cyan),0.2)] bg-gradient-to-br from-[rgba(var(--color-deep-navy),0.4)] to-[rgba(var(--color-midnight),0.4)] p-8 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white">Что говорят клиенты:</h3>
            {[
              "«Быстро, по делу и без бюрократии. Редкий случай, когда юристы говорят на языке бизнеса.»",
              "«Помогли закрыть сделку, которую мы тянули месяцами. После их ревью стало понятно, что делать.»",
              "«Наконец-то юристы, которые понимают, как думают фаундеры и инвесторы, а не только регуляторы.»",
            ].map((quote, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-[rgb(var(--color-electric-cyan))] pl-4 text-base italic text-[rgb(var(--color-silver))]"
              >
                {quote}
              </motion.p>
            ))}
          </motion.div>
        </FadeInSection>

        {/* Final CTA */}
        <FadeInSection id="contact">
          <div className="relative overflow-hidden rounded-3xl border border-[rgba(var(--color-electric-cyan),0.3)] bg-gradient-to-br from-[rgba(var(--color-deep-navy),0.8)] to-[rgba(var(--color-midnight),0.8)] p-12 backdrop-blur-xl border-glow">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[rgb(var(--color-electric-cyan))] opacity-10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[rgb(var(--color-amber))] opacity-10 blur-3xl" />

            <div className="relative">
              <SectionTitle
                tag="НАЧНЁМ?"
                title="Разберем вашу ситуацию — бесплатно и по существу"
                subtitle="Оставьте заявку — проведём экспресс-анализ и предложим конкретные шаги, без общих фраз и юридических мантр."
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr,1fr] lg:items-start">
                <motion.form
                  variants={fadeInUp}
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("В продакшене подключите отправку формы (почта, Telegram, CRM).");
                  }}
                >
                  <FormField label="Имя*" required placeholder="Как к вам обращаться?" />
                  <FormField
                    label="Email или Telegram*"
                    required
                    placeholder="email@company.com или @username"
                  />
                  <FormField
                    label="Кратко опишите задачу (опционально)"
                    as="textarea"
                    rows={4}
                    placeholder="Раунд, сделка, структура, Web3-проект..."
                  />
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[rgb(var(--color-silver))]">
                      Pitch deck или документ (опционально)
                    </label>
                    <input
                      type="file"
                      className="w-full text-sm text-[rgb(var(--color-silver))] file:mr-4 file:rounded-lg file:border-0 file:bg-[rgba(var(--color-electric-cyan),0.1)] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[rgb(var(--color-electric-cyan))] file:transition-all hover:file:bg-[rgba(var(--color-electric-cyan),0.2)]"
                    />
                    <p className="text-[10px] text-[rgb(var(--color-silver))]/50">
                      Загрузка файла сейчас демонстрационная. В боевой версии подключите хранение/отправку.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))] px-8 py-4 text-base font-bold text-[rgb(var(--color-midnight))] shadow-lg shadow-[rgba(var(--color-electric-cyan),0.3)] transition-all hover:shadow-xl hover:shadow-[rgba(var(--color-electric-cyan),0.5)]"
                  >
                    Получить план действий
                  </motion.button>
                </motion.form>

                <motion.div variants={fadeInUp} className="space-y-4 text-base text-[rgb(var(--color-silver))]">
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
                </motion.div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="border-t border-[rgba(var(--color-electric-cyan),0.15)] pt-8 text-xs text-[rgb(var(--color-silver))]/60"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} UNEXT.ONE — юридический партнёр для роста бизнеса.</p>
            <p>От стартапа до сделки, от фаундера до инвестора, от корпструктуры до DAO.</p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}

// Component definitions

type AudienceCardProps = {
  icon: string;
  label: string;
  desc: string;
  href?: string;
};

function AudienceCard({ icon, label, desc, href }: AudienceCardProps) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="group relative block h-full overflow-hidden rounded-2xl border border-[rgba(var(--color-electric-cyan),0.2)] bg-gradient-to-br from-[rgba(var(--color-deep-navy),0.6)] to-[rgba(var(--color-midnight),0.6)] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(var(--color-electric-cyan),0.5)] hover:shadow-lg hover:shadow-[rgba(var(--color-electric-cyan),0.2)]"
    >
      <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-[rgba(var(--color-electric-cyan),0.05)] to-[rgba(var(--color-amber),0.05)] transition-transform duration-300 group-hover:translate-y-0" />
      <div className="relative space-y-2">
        <div className="text-3xl">{icon}</div>
        <div className="text-lg font-semibold text-white">{label}</div>
        <div className="text-sm text-[rgb(var(--color-silver))]">{desc}</div>
      </div>
    </Wrapper>
  );
}

type SectionTitleProps = {
  tag?: string;
  title: string;
  subtitle?: string;
};

function SectionTitle({ tag, title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-3">
      {tag && (
        <motion.div
          variants={fadeInUp}
          className="inline-block rounded-full border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-electric-cyan),0.1)] px-4 py-1 text-xs font-semibold tracking-wide text-[rgb(var(--color-electric-cyan))] backdrop-blur-sm"
        >
          {tag}
        </motion.div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-3xl text-base text-[rgb(var(--color-silver))]">
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
    <div className="group relative h-full overflow-hidden rounded-2xl border border-[rgba(var(--color-electric-cyan),0.2)] bg-gradient-to-br from-[rgba(var(--color-deep-navy),0.6)] to-[rgba(var(--color-midnight),0.6)] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(var(--color-electric-cyan),0.4)]">
      <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-[rgba(var(--color-electric-cyan),0.05)] to-transparent transition-transform duration-300 group-hover:translate-y-0" />
      <div className="relative space-y-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-[rgb(var(--color-silver))]">{text}</p>
      </div>
    </div>
  );
}

type BulletGridProps = {
  items: string[];
};

function BulletGrid({ items }: BulletGridProps) {
  return (
    <motion.ul
      variants={fadeInUp}
      className="mt-8 grid gap-3 text-sm text-[rgb(var(--color-silver))] sm:grid-cols-2"
    >
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="flex items-start gap-3"
        >
          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))]" />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function DownloadLink({ text }: { text: string }) {
  return (
    <motion.div variants={fadeInUp}>
      <Link
        href="#"
        className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-electric-cyan),0.05)] px-4 py-2.5 text-sm font-medium text-[rgb(var(--color-electric-cyan))] transition-all hover:border-[rgba(var(--color-electric-cyan),0.5)] hover:bg-[rgba(var(--color-electric-cyan),0.1)]"
      >
        <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        {text}
      </Link>
    </motion.div>
  );
}

type FormFieldProps =
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

function FormField(props: FormFieldProps) {
  const common =
    "w-full rounded-lg border border-[rgba(var(--color-electric-cyan),0.2)] bg-[rgba(var(--color-deep-navy),0.5)] px-4 py-3 text-sm text-white placeholder:text-[rgb(var(--color-silver))]/40 outline-none transition-all focus:border-[rgba(var(--color-electric-cyan),0.5)] focus:ring-2 focus:ring-[rgba(var(--color-electric-cyan),0.1)]";

  if (props.as === "textarea") {
    const { label, required, placeholder, rows = 3 } = props;
    return (
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-[rgb(var(--color-silver))]">
          {label}
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
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-[rgb(var(--color-silver))]">
        {label}
      </label>
      <input
        className={common}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
