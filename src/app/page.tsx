'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Rocket, TrendingUp, Building2, BarChart3, type LucideIcon } from "lucide-react";

const sections = {
  audience: "#audience",
  startups: "#startups",
  investors: "#investors",
  corporates: "#corporates",
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
    <main className="relative min-h-screen bg-[rgb(var(--color-midnight))] text-[rgb(var(--color-silver))]">
      {/* Background effects */}
      <div className="fixed inset-0 mesh-gradient" />
      <div className="legal-pattern fixed inset-0" />
      <FloatingParticles />

      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(var(--color-electric-cyan),0.15)] bg-[rgb(var(--color-midnight))]/95 backdrop-blur-xl shadow-lg shadow-[rgba(var(--color-electric-cyan),0.1)]"
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
              ["Корпорации", sections.corporates],
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
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-32 space-y-32">
        {/* Hero */}
        <FadeInSection id="hero">
          {/* Badge - centered */}
          <div className="flex justify-center">
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-deep-navy),0.6)] px-4 py-1.5 text-xs text-[rgb(var(--color-silver))] backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(var(--color-amber))] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgb(var(--color-amber))]" />
              </span>
              Юридический партнёр для роста бизнеса — от стартапа до сделки, от фаундера до инвестора.
            </motion.div>
          </div>

          {/* Main content - centered */}
          <motion.div variants={fadeInUp} className="mt-12 space-y-8 text-center">
            {/* Unicorn illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <Image
                  src="/images/unicorn.svg"
                  alt="Unicorn"
                  width={160}
                  height={160}
                  className="w-full h-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Heading - optimized for 2 lines */}
            <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Юридическая поддержка роста:{" "}
              <span className="text-gradient-cyan">от SAFE до M&A</span> — быстро, понятно и без воды
            </h1>

            {/* Subheading - optimized for 2 lines */}
            <p className="mx-auto max-w-4xl text-base leading-relaxed text-[rgb(var(--color-silver))] sm:text-lg">
              Помогаем стартапам, инвесторам и корпорациям закрывать юридические задачи на любой{" "}
              стадии: от первых договорённостей до крупных сделок.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
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

            {/* Trust badge */}
            <p className="flex items-center justify-center gap-2 text-sm text-[rgb(var(--color-silver))]/60">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Понимаем задачи бизнеса. Делаем быстро. Работаем без лишней бюрократии.
            </p>
          </motion.div>

          {/* Contact Form - Wide and Compact, Centered Below */}
          <motion.div
            variants={scaleIn}
            className="relative mx-auto mt-16 max-w-4xl rounded-2xl border border-[rgba(var(--color-electric-cyan),0.2)] bg-gradient-to-br from-[rgba(var(--color-deep-navy),0.8)] to-[rgba(var(--color-midnight),0.8)] p-6 shadow-2xl backdrop-blur-xl border-glow sm:p-8"
          >
            {/* Decorative blurs */}
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[rgb(var(--color-electric-cyan))] opacity-10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[rgb(var(--color-amber))] opacity-10 blur-3xl" />

            <div className="relative">
              {/* Form heading */}
              <h2 className="mb-6 text-center text-lg font-semibold text-white">
                Коротко о вас — и мы вернёмся с планом действий
              </h2>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const contact = formData.get('contact');
                  const task = formData.get('task');

                  const subject = `Новая заявка от ${name}`;
                  const body = `Имя: ${name}\nКонтакт: ${contact}\nЗадача: ${task || 'Не указана'}`;

                  window.location.href = `mailto:info@unext.one?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                {/* Two-column layout for name and contact on desktop */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField name="name" label="Имя*" required placeholder="Как к вам обращаться?" />
                  <FormField name="contact" label="Email или Telegram*" required placeholder="@username или email" />
                </div>

                {/* Task field - full width, reduced rows for compactness */}
                <FormField
                  name="task"
                  label="Кратко: задача (опционально)"
                  as="textarea"
                  rows={2}
                  placeholder="Сделка, инвестиции, структура, DAO..."
                />

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))] px-6 py-3 text-sm font-bold text-[rgb(var(--color-midnight))] shadow-lg transition-all hover:shadow-xl"
                >
                  Получить план действий
                </motion.button>

                {/* Privacy notice */}
                <p className="text-center text-[10px] leading-relaxed text-[rgb(var(--color-silver))]/50">
                  Отправляя форму, вы соглашаетесь на обработку данных. Никакого спама — только ответ по вашему запросу.
                </p>
              </form>
            </div>
          </motion.div>
        </FadeInSection>

        {/* Audience */}
        <FadeInSection id="audience">
          {/* Grid background for tech feel */}
          <div className="relative -mx-6 rounded-2xl bg-gradient-to-b from-[rgba(var(--color-electric-cyan),0.02)] to-transparent p-6 sm:-mx-8 sm:p-8">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                linear-gradient(rgba(var(--color-electric-cyan), 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(var(--color-electric-cyan), 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px'
            }} />

            <div className="relative space-y-3 text-center">
              <div className="flex justify-center">
                <motion.div
                  variants={fadeInUp}
                  className="inline-block rounded-full border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-electric-cyan),0.1)] px-4 py-1 text-xs font-semibold tracking-wide text-[rgb(var(--color-electric-cyan))] backdrop-blur-sm"
                >
                  НАШИ КЛИЕНТЫ
                </motion.div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Работаем там, где бизнес двигается{" "}
                <span className="text-gradient-cyan">быстрее юристов</span>
              </h2>
              <p className="mx-auto max-w-3xl text-base text-[rgb(var(--color-silver))]">
                Мы встраиваемся в реальный темп роста: стартапы, фонды и корпорации,
                которым нужны решения, а не лекции по теории права.
              </p>
            </div>

            <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {[
              { icon: Rocket, label: "Стартапам", desc: "Оформляем сделки, структуру и IP", href: sections.startups, badge: "Startup" },
              { icon: TrendingUp, label: "Инвесторам", desc: "Проверяем стартапы и защищаем сделки", href: sections.investors, badge: "Investor" },
              { icon: Building2, label: "Корпорациям", desc: "Строим юридическую систему под рост и M&A", href: sections.corporates, badge: "Corporate" },
              { icon: BarChart3, label: "COO и CFO", desc: "Снимаем рутину с юр-документов", badge: "Executive" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ClientCard {...item} />
              </motion.div>
            ))}
            </div>
          </div>
        </FadeInSection>

        {/* Startups */}
        <FadeInSection id="startups">
          <SectionTitle
            tag="ДЛЯ СТАРТАПОВ"
            title="Сделка с инвестором — мы закроем юридическую часть за вас"
            subtitle="Когда инвестор уже ждёт, а документы ещё нет — мы приводим структуру, договорённости и IP в порядок."
          />

          {/* Services Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Оформляем отношения между фаундерами",
              "Строим юридическую обвязку бизнес-модели",
              "Разрабатываем корпоративный договор",
              "Защищаем интеллектуальную собственность",
              "Консультируем по привлечению инвестиций",
              "Сопровождаем текущие операции",
              "Разрабатываем опционные программы",
              "Готовим к предпродажной проверке (due diligence)",
              "Разрешаем корпоративные споры",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <ServiceCard text={service} />
              </motion.div>
            ))}
          </div>

          {/* CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <CTABlock
              text='Получить чек-лист "Готов ли ваш стартап к инвестициям"'
              buttonText="Скачать чек-лист"
            />
          </motion.div>
        </FadeInSection>

        {/* Investors */}
        <FadeInSection id="investors">
          <SectionTitle
            tag="ДЛЯ ИНВЕСТОРОВ"
            title="Мы покажем, где спрятаны риски стартапа до сделки"
            subtitle="Юридическая прозрачность объекта инвестиций — до того, как деньги ушли со счёта."
          />
          <InvestorInsights />
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
                title: "Оптимизация корпоративной структуры группы компаний",
                text: "Выстроена прозрачная структура под международную экспансию с учётом налоговых и регуляторных требований.",
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
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const contact = formData.get('contact');
                    const task = formData.get('task');

                    const subject = `Новая заявка от ${name}`;
                    const body = `Имя: ${name}\nКонтакт: ${contact}\nЗадача: ${task || 'Не указана'}`;

                    window.location.href = `mailto:info@unext.one?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                >
                  <FormField name="name" label="Имя*" required placeholder="Как к вам обращаться?" />
                  <FormField
                    name="contact"
                    label="Email или Telegram*"
                    required
                    placeholder="email@company.com или @username"
                  />
                  <FormField
                    name="task"
                    label="Кратко опишите задачу (опционально)"
                    as="textarea"
                    rows={4}
                    placeholder="Раунд, сделка, структура..."
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
                    Мы работаем с фаундерами, инвесторами и корпорациями,
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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p>© {new Date().getFullYear()} UNEXT.ONE — юридический партнёр для роста бизнеса.</p>
              <p>От стартапа до сделки, от фаундера до инвестора.</p>
            </div>
            <div className="space-y-1 text-right">
              <p className="font-medium text-[rgb(var(--color-silver))]">Контакты:</p>
              <a
                href="mailto:info@unext.one"
                className="block transition-colors hover:text-[rgb(var(--color-electric-cyan))]"
              >
                info@unext.one
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}

// Component definitions

type ClientCardProps = {
  icon: LucideIcon;
  label: string;
  desc: string;
  badge: string;
  href?: string;
};

function ClientCard({ icon: Icon, label, desc, badge, href }: ClientCardProps) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="group relative block h-full cursor-pointer overflow-hidden rounded-xl border border-[rgba(var(--color-electric-cyan),0.15)] bg-[rgba(var(--color-deep-navy),0.4)] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(var(--color-electric-cyan),0.4)] hover:bg-[rgba(var(--color-deep-navy),0.6)] hover:shadow-lg hover:shadow-[rgba(var(--color-electric-cyan),0.1)]"
    >
      {/* Corner accent */}
      <div className="absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-px w-8 bg-gradient-to-r from-transparent to-[rgb(var(--color-electric-cyan))]" />
        <div className="absolute right-0 top-0 h-8 w-px bg-gradient-to-b from-[rgb(var(--color-electric-cyan))] to-transparent" />
      </div>

      {/* Status indicator */}
      <div className="absolute right-4 top-4">
        <div className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--color-electric-cyan))] opacity-60" />
      </div>

      <div className="relative space-y-4">
        {/* Icon and badge */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Decorative line */}
            <div className="h-10 w-px bg-gradient-to-b from-[rgb(var(--color-electric-cyan))] to-transparent opacity-50" />

            {/* Icon container */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(var(--color-electric-cyan),0.2)] bg-[rgba(var(--color-electric-cyan),0.05)] transition-colors duration-300 group-hover:border-[rgba(var(--color-electric-cyan),0.4)] group-hover:bg-[rgba(var(--color-electric-cyan),0.1)]">
              <Icon className="h-5 w-5 text-[rgb(var(--color-electric-cyan))]" strokeWidth={2} />
            </div>
          </div>

          {/* Badge */}
          <span className="rounded-md border border-[rgba(var(--color-electric-cyan),0.2)] bg-[rgba(var(--color-electric-cyan),0.05)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[rgb(var(--color-electric-cyan))]">
            {badge}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-2 pl-[52px]">
          <h3 className="text-base font-semibold text-white transition-colors group-hover:text-[rgb(var(--color-electric-cyan))]">
            {label}
          </h3>
          <p className="text-sm leading-relaxed text-[rgb(var(--color-silver))]/80">
            {desc}
          </p>
        </div>

        {/* Bottom decorative line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(var(--color-electric-cyan),0.2)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
    <div className="space-y-3 text-center">
      {tag && (
        <div className="flex justify-center">
          <motion.div
            variants={fadeInUp}
            className="inline-block rounded-full border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-electric-cyan),0.1)] px-4 py-1 text-xs font-semibold tracking-wide text-[rgb(var(--color-electric-cyan))] backdrop-blur-sm"
          >
            {tag}
          </motion.div>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-3xl text-base text-[rgb(var(--color-silver))]">
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
  const getEmailContent = () => {
    if (text.includes('"Готов ли ваш стартап к инвестициям"')) {
      return {
        subject: 'Запрос чек-листа «Готов ли ваш стартап к инвестициям»',
        body: `Здравствуйте!
Прошу отправить чек-лист «Готов ли ваш стартап к инвестициям».
Хочу оценить текущую готовность проекта к привлечению инвестиций и понять, какие юридические вопросы стоит закрыть в первую очередь.

Спасибо!`
      };
    } else if (text.includes('PDF "ТОП-7 юридических ошибок')) {
      return {
        subject: 'Запрос PDF «ТОП-7 юридических ошибок стартапов глазами инвестора»',
        body: `Добрый день!
Хочу получить PDF «ТОП-7 юридических ошибок стартапов глазами инвестора».
Документ нужен, чтобы разобраться, какие юридические риски чаще всего становятся препятствием для сделки и как избежать подобных ошибок.

Спасибо!`
      };
    } else if (text.includes('Гайд "Юридическая карта роста')) {
      return {
        subject: 'Запрос гайда «Юридическая карта роста компании»',
        body: `Здравствуйте!
Прошу выслать гайд «Юридическая карта роста компании».
Интересует структура юридических этапов, которые важно проходить по мере роста бизнеса — от первых договорённостей до корпоративного оформления и привлечения инвестиций.

Благодарю!`
      };
    }
    return { subject: 'Запрос материала', body: 'Здравствуйте!\nПрошу выслать запрошенный материал.\n\nСпасибо!' };
  };

  const { subject, body } = getEmailContent();
  const mailtoLink = `mailto:info@unext.one?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <motion.div variants={fadeInUp}>
      <a
        href={mailtoLink}
        className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-electric-cyan),0.05)] px-4 py-2.5 text-sm font-medium text-[rgb(var(--color-electric-cyan))] transition-all hover:border-[rgba(var(--color-electric-cyan),0.5)] hover:bg-[rgba(var(--color-electric-cyan),0.1)]"
      >
        <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        {text}
      </a>
    </motion.div>
  );
}

type FormFieldProps =
  | {
      as?: "input";
      name?: string;
      label: string;
      required?: boolean;
      placeholder?: string;
    }
  | {
      as: "textarea";
      name?: string;
      label: string;
      required?: boolean;
      placeholder?: string;
      rows?: number;
    };

function FormField(props: FormFieldProps) {
  const common =
    "w-full rounded-lg border border-[rgba(var(--color-electric-cyan),0.2)] bg-[rgba(var(--color-deep-navy),0.5)] px-4 py-3 text-sm text-white placeholder:text-[rgb(var(--color-silver))]/40 outline-none transition-all focus:border-[rgba(var(--color-electric-cyan),0.5)] focus:ring-2 focus:ring-[rgba(var(--color-electric-cyan),0.1)]";

  if (props.as === "textarea") {
    const { name, label, required, placeholder, rows = 3 } = props;
    return (
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-[rgb(var(--color-silver))]">
          {label}
        </label>
        <textarea
          name={name}
          rows={rows}
          className={common}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  }

  const { name, label, required, placeholder } = props;
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-[rgb(var(--color-silver))]">
        {label}
      </label>
      <input
        name={name}
        className={common}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

type ServiceCardProps = {
  text: string;
};

function ServiceCard({ text }: ServiceCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl border border-[rgba(var(--color-electric-cyan),0.15)] bg-[rgba(var(--color-deep-navy),0.4)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(var(--color-electric-cyan),0.4)] hover:bg-[rgba(var(--color-deep-navy),0.6)] hover:shadow-lg hover:shadow-[rgba(var(--color-electric-cyan),0.1)]">
      {/* Decorative corner */}
      <div className="absolute right-0 top-0 h-12 w-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-px w-6 bg-gradient-to-r from-transparent to-[rgb(var(--color-electric-cyan))]" />
        <div className="absolute right-0 top-0 h-6 w-px bg-gradient-to-b from-[rgb(var(--color-electric-cyan))] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex items-start gap-3">
        {/* Check icon */}
        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(var(--color-electric-cyan),0.1)] transition-colors duration-300 group-hover:bg-[rgba(var(--color-electric-cyan),0.2)]">
          <svg className="h-3 w-3 text-[rgb(var(--color-electric-cyan))]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Text */}
        <p className="text-sm leading-relaxed text-[rgb(var(--color-silver))] transition-colors group-hover:text-white">
          {text}
        </p>
      </div>
    </div>
  );
}

type CTABlockProps = {
  text: string;
  buttonText: string;
};

function CTABlock({ text, buttonText }: CTABlockProps) {
  const getEmailContent = () => {
    if (text.includes('"Готов ли ваш стартап к инвестициям"')) {
      return {
        subject: 'Запрос чек-листа «Готов ли ваш стартап к инвестициям»',
        body: `Здравствуйте!
Прошу отправить чек-лист «Готов ли ваш стартап к инвестициям».
Хочу оценить текущую готовность проекта к привлечению инвестиций и понять, какие юридические вопросы стоит закрыть в первую очередь.

Спасибо!`
      };
    }
    return { subject: 'Запрос материала', body: 'Здравствуйте!\nПрошу выслать запрошенный материал.\n\nСпасибо!' };
  };

  const { subject, body } = getEmailContent();
  const mailtoLink = `mailto:info@unext.one?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-[rgba(var(--color-electric-cyan),0.2)] bg-gradient-to-br from-[rgba(var(--color-deep-navy),0.6)] to-[rgba(var(--color-midnight),0.6)] p-6 backdrop-blur-sm sm:flex-row sm:justify-between sm:p-8">
      {/* Text */}
      <div className="text-center sm:text-left">
        <p className="text-base font-medium text-white sm:text-lg">{text}</p>
      </div>

      {/* Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={mailtoLink}
        className="group relative flex-shrink-0 overflow-hidden rounded-lg border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-electric-cyan),0.1)] px-6 py-3 text-sm font-semibold text-[rgb(var(--color-electric-cyan))] transition-all hover:border-[rgba(var(--color-electric-cyan),0.5)] hover:bg-[rgba(var(--color-electric-cyan),0.15)] hover:shadow-lg hover:shadow-[rgba(var(--color-electric-cyan),0.2)]"
      >
        <span className="relative z-10 flex items-center gap-2">
          <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          {buttonText}
        </span>
      </motion.a>
    </div>
  );
}

function InvestorInsights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const leftItems = [
    "Анализируем юридические и корпоративные риски",
    "Проводим полное Due Diligence объекта инвестирования",
    "Готовим и проверяем инвестиционную документацию",
  ];

  const rightItems = [
    "Сопровождаем инвестиционные сделки",
    "Помогаем структурировать портфель",
    "Разрешаем споры с основателями и соинвесторами",
  ];

  return (
    <div className="mt-10">
      {/* Mobile layout */}
      <div className="lg:hidden">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-64 h-64">
            <img
              src="/images/investor-insights-illustration.webp"
              alt="Investor Insights"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* All items in one column */}
        <div className="space-y-3">
          {[...leftItems, ...rightItems].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 text-sm text-[rgb(var(--color-silver))]"
            >
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))]" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <div className="relative flex items-center justify-center gap-16">
          {/* Left items - aligned in column */}
          <div className="flex flex-col justify-center space-y-12" style={{ width: '280px' }}>
            {leftItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex items-center gap-3 text-sm text-[rgb(var(--color-silver))] transition-colors hover:text-white"
              >
                <span className="flex-1 text-right leading-relaxed">{item}</span>
                <div className="relative h-2 w-2 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[rgb(var(--color-electric-cyan))] opacity-20" />
                  <div className="absolute inset-0.5 rounded-full bg-[rgb(var(--color-electric-cyan))]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center image with connecting lines */}
          <div className="relative flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-72 h-72"
            >
              <img
                src="/images/investor-insights-illustration.webp"
                alt="Investor Insights"
                className="w-full h-full object-contain"
              />

              {/* Connecting lines SVG overlay */}
              <svg
                className="absolute pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '800px',
                  height: '500px',
                  overflow: 'visible'
                }}
              >
                {/* Left lines */}
                {leftItems.map((_, i) => {
                  const isHovered = hoveredIndex === i;
                  // Calculate Y position for each item (evenly spaced vertically)
                  const itemY = 250 + (i - 1) * 120; // Center item at 250, space 120px apart
                  const centerY = 250; // Center of image
                  const midX = 200; // Elbow point X

                  return (
                    <g key={`left-${i}`}>
                      {/* Line path with elbow */}
                      <motion.path
                        d={`M 100 ${itemY} L ${midX} ${itemY} L ${midX + 20} ${centerY} L 360 ${centerY}`}
                        stroke="rgba(80, 209, 107, 0.3)"
                        strokeWidth={isHovered ? "1.5" : "1"}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                      />
                      {/* Circle at the end (near text) */}
                      <motion.circle
                        cx="100"
                        cy={itemY}
                        r={isHovered ? "4" : "3"}
                        fill="rgba(80, 209, 107, 0.4)"
                        stroke="rgb(80, 209, 107)"
                        strokeWidth="1"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      />
                    </g>
                  );
                })}

                {/* Right lines */}
                {rightItems.map((_, i) => {
                  const isHovered = hoveredIndex === (i + 3);
                  const itemY = 250 + (i - 1) * 120;
                  const centerY = 250;
                  const midX = 600;

                  return (
                    <g key={`right-${i}`}>
                      {/* Line path with elbow */}
                      <motion.path
                        d={`M 440 ${centerY} L ${midX - 20} ${centerY} L ${midX} ${itemY} L 700 ${itemY}`}
                        stroke="rgba(80, 209, 107, 0.3)"
                        strokeWidth={isHovered ? "1.5" : "1"}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                      />
                      {/* Circle at the end (near text) */}
                      <motion.circle
                        cx="700"
                        cy={itemY}
                        r={isHovered ? "4" : "3"}
                        fill="rgba(80, 209, 107, 0.4)"
                        stroke="rgb(80, 209, 107)"
                        strokeWidth="1"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      />
                    </g>
                  );
                })}
              </svg>
            </motion.div>
          </div>

          {/* Right items - aligned in column */}
          <div className="flex flex-col justify-center space-y-12" style={{ width: '280px' }}>
            {rightItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i + 3)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex items-center gap-3 text-sm text-[rgb(var(--color-silver))] transition-colors hover:text-white"
              >
                <div className="relative h-2 w-2 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[rgb(var(--color-electric-cyan))] opacity-20" />
                  <div className="absolute inset-0.5 rounded-full bg-[rgb(var(--color-electric-cyan))]" />
                </div>
                <span className="flex-1 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
