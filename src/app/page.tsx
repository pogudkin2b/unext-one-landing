'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  Rocket, TrendingUp, Building2, BarChart3, ShoppingCart, Cpu, GraduationCap,
  Utensils, Database, Truck, Car, Shield, Bot, Beaker, Landmark, Wheat,
  Construction, Radio, Factory, Layers, Pill, Brain, Briefcase, Music,
  Package, Stethoscope, Monitor, type LucideIcon
} from "lucide-react";

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
              <span className="text-gradient-cyan">от Term Sheet до M&A</span> — быстро, понятно и без воды
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
              { icon: Rocket, label: "Стартапам", desc: "Оформляем сделки, структуру и IP, закрываем юридические функции.", href: sections.startups, badge: "Startup" },
              { icon: TrendingUp, label: "Инвесторам", desc: "Проверяем стартапы и сопровождаем сделки.", href: sections.investors, badge: "Investor" },
              { icon: Building2, label: "Корпорациям", desc: "Строим юридическую систему под рост и M&A", href: sections.corporates, badge: "Corporate" },
              { icon: BarChart3, label: "COO и CFO", desc: "Снимаем юридическую рутину.", badge: "Executive" },
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
            subtitle="Группа компаний, новые рынки, M&A — под это нужна система, а не набор разрозненных процессов."
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

        {/* Cases Section */}
        <FadeInSection id="trust">
          <CasesSection />
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
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-[rgba(var(--color-electric-cyan),0.2)] bg-gradient-to-br from-[rgba(var(--color-deep-navy),0.6)] to-[rgba(var(--color-midnight),0.6)] p-6 backdrop-blur-sm sm:p-8">
      {/* Text */}
      <div className="text-center">
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

// Cases data and types
type CaseCategory = "all" | "corporations" | "investors" | "startups";

type CaseData = {
  id: string;
  category: CaseCategory;
  industry: string;
  industryIcon: LucideIcon;
  client: string;
  result: string;
  services: string;
  tag: string;
  tagColor: string;
  featured: boolean;
};

const casesData: CaseData[] = [
  // КОРПОРАЦИИ
  {
    id: "case_microelectronics_control",
    category: "corporations",
    industry: "Микроэлектроника",
    industryIcon: Cpu,
    client: "Крупная корпорация",
    result: "Контрольный пакет",
    services: "Структурирование сделки, ДКП акций, опционы, обеспечительные соглашения, корпоративный договор",
    tag: "Высокие технологии / M&A",
    tagColor: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    id: "case_foodtech_holding",
    category: "corporations",
    industry: "FoodTech",
    industryIcon: Utensils,
    client: "Корпорация",
    result: "Холдинговая структура",
    services: "IP-стратегия, внутригрупповые реорганизации, выделение направлений в самостоятельный бизнес",
    tag: "Долгосрочное партнёрство",
    tagColor: "from-green-500 to-emerald-500",
    featured: false,
  },
  {
    id: "case_it_bigdata_corporate",
    category: "corporations",
    industry: "IT, Big Data",
    industryIcon: Database,
    client: "Технологическая компания",
    result: "Защита ПО в суде",
    services: "Создание компании, договорные схемы, лицензионные договоры, судебная защита ПО",
    tag: "Комплексное сопровождение",
    tagColor: "from-indigo-500 to-violet-500",
    featured: false,
  },
  {
    id: "case_international_it_launch",
    category: "corporations",
    industry: "IT, перевозки",
    industryIcon: Car,
    client: "Зарубежная корпорация",
    result: "Запуск в России",
    services: "Адаптация бизнес-модели, партнёрские соглашения, политика персональных данных, GDPR",
    tag: "Международная сделка / IT",
    tagColor: "from-purple-500 to-pink-500",
    featured: true,
  },
  // ИНВЕСТОРЫ
  {
    id: "case_road_safety_50m",
    category: "investors",
    industry: "High-tech, безопасность",
    industryIcon: Shield,
    client: "Инвестиционный фонд",
    result: "₽50 млн",
    services: "Due diligence, корпоративный договор, комплект инвестиционных документов",
    tag: "Инвестиции high-tech",
    tagColor: "from-amber-500 to-orange-500",
    featured: false,
  },
  {
    id: "case_robotics_components",
    category: "investors",
    industry: "Робототехника",
    industryIcon: Bot,
    client: "Инвестиционный фонд",
    result: "Инвестиции закрыты",
    services: "Комплексный DD, транзакционная документация, сопровождение закрытия",
    tag: "Инвестиции high-tech",
    tagColor: "from-blue-500 to-cyan-500",
    featured: false,
  },
  {
    id: "case_medtech_300m",
    category: "investors",
    industry: "MedTech, импланты",
    industryIcon: Stethoscope,
    client: "Инвестиционный фонд",
    result: "₽300 млн",
    services: "IP-DD (100+ объектов), транзакционная документация, сопровождение закрытия",
    tag: "Инвестиции high-tech",
    tagColor: "from-rose-500 to-pink-500",
    featured: true,
  },
  {
    id: "case_ai_chemistry",
    category: "investors",
    industry: "AI, химия",
    industryIcon: Brain,
    client: "Инвестиционный фонд",
    result: "Полный DD",
    services: "Legal, finance, tax DD, SHA, опционы, займы, сопровождение закрытия",
    tag: "Инвестиции high-tech / AI",
    tagColor: "from-violet-500 to-purple-500",
    featured: true,
  },
  {
    id: "case_funds_3_5b",
    category: "investors",
    industry: "Мультипрофильные инвестиции",
    industryIcon: Landmark,
    client: "Оператор фонда фондов",
    result: "₽3,5 млрд",
    services: "Структурирование фондов, создание 5 ДИТ, стратегия выхода из инвестиций",
    tag: "Фондовая структура",
    tagColor: "from-amber-500 to-yellow-500",
    featured: true,
  },
  {
    id: "case_agro_and_concession",
    category: "investors",
    industry: "Агробизнес",
    industryIcon: Wheat,
    client: "Инвестиционный фонд",
    result: "Структурирование",
    services: "DD, Term Sheet, IA, SHA, устав, опционы, концессионный проект",
    tag: "Инвестиции low-tech",
    tagColor: "from-green-500 to-lime-500",
    featured: false,
  },
  {
    id: "case_tower_jv",
    category: "investors",
    industry: "Телеком-инфраструктура",
    industryIcon: Radio,
    client: "Инвестиционный фонд",
    result: "JV создано",
    services: "Структурирование JV, Term Sheet, SHA, устав, 10 опционов",
    tag: "Совместное предприятие",
    tagColor: "from-cyan-500 to-teal-500",
    featured: false,
  },
  {
    id: "case_quarry_acquisition",
    category: "investors",
    industry: "Добыча ископаемых",
    industryIcon: Construction,
    client: "Группа бизнес-ангелов",
    result: "M&A завершено",
    services: "DD, Term Sheet, ДКП долей, смена менеджмента, проектное финансирование",
    tag: "M&A / приобретение актива",
    tagColor: "from-stone-500 to-slate-500",
    featured: false,
  },
  {
    id: "case_brick_factory_acquisition",
    category: "investors",
    industry: "Стройматериалы",
    industryIcon: Factory,
    client: "Группа бизнес-ангелов",
    result: "Завод приобретён",
    services: "DD, ДКП долей, смена менеджмента, корпоративное управление",
    tag: "M&A / приобретение бизнеса",
    tagColor: "from-orange-500 to-red-500",
    featured: false,
  },
  {
    id: "case_composites_foreign_investor",
    category: "investors",
    industry: "Композитные изделия",
    industryIcon: Layers,
    client: "Инвестиционный фонд",
    result: "Иностранный инвестор",
    services: "Инвестиционное соглашение, SHA, опционы с учётом иностранного права",
    tag: "Сделка с иностранным инвестором",
    tagColor: "from-indigo-500 to-blue-500",
    featured: false,
  },
  {
    id: "case_pharma_entry_exit",
    category: "investors",
    industry: "Фармацевтика",
    industryIcon: Pill,
    client: "Инвестиционный фонд",
    result: "Успешный выход",
    services: "Сопровождение инвестирования и выхода из инвестиции",
    tag: "Инвестиции high-tech / exit",
    tagColor: "from-emerald-500 to-teal-500",
    featured: false,
  },
  // СТАРТАПЫ
  {
    id: "case_medtech_startup_fund_angel",
    category: "startups",
    industry: "MedTech",
    industryIcon: Stethoscope,
    client: "MedTech-стартап",
    result: "Инвестиции + IP",
    services: "Привлечение инвестиций, стратегия охраны IP, абонентское сопровождение",
    tag: "Привлечение инвестиций",
    tagColor: "from-rose-500 to-pink-500",
    featured: false,
  },
  {
    id: "case_saas_hybrid_30m",
    category: "startups",
    industry: "IT, SaaS",
    industryIcon: Monitor,
    client: "IT-стартап",
    result: "₽30 млн",
    services: "Структурирование сделки, транзакционная документация, закрытие раунда",
    tag: "Привлечение инвестиций",
    tagColor: "from-blue-500 to-indigo-500",
    featured: false,
  },
  {
    id: "case_marketplace_top3",
    category: "startups",
    industry: "IT, логистика",
    industryIcon: Truck,
    client: "IT-стартап",
    result: "50% топ-3 РФ",
    services: "Юрструктура сервиса, раунды инвестиций, 10 ДКП, опционы, конвертируемый заём, экзит фаундеров",
    tag: "От стартапа до сделки со стратегом",
    tagColor: "from-amber-500 to-orange-500",
    featured: true,
  },
  {
    id: "case_bigdata_two_rounds",
    category: "startups",
    industry: "IT, Big Data",
    industryIcon: Database,
    client: "IT-стартап",
    result: "2 раунда",
    services: "Оформление отношений фаундеров, создание компании, два раунда инвестиций",
    tag: "Early stage сопровождение",
    tagColor: "from-violet-500 to-purple-500",
    featured: false,
  },
  {
    id: "case_ecoproducts_trademark",
    category: "startups",
    industry: "Эко-продукты",
    industryIcon: Utensils,
    client: "Стартап",
    result: "IP защищён в суде",
    services: "Регистрация товарных знаков, судебная защита бренда",
    tag: "IP-защита",
    tagColor: "from-green-500 to-emerald-500",
    featured: false,
  },
  {
    id: "case_music_streaming",
    category: "startups",
    industry: "Музыкальный стриминг",
    industryIcon: Music,
    client: "IT-стартап",
    result: "Юридический контур",
    services: "Политика конфиденциальности, пользовательское соглашение, договоры с правообладателями",
    tag: "Регулирование / IP",
    tagColor: "from-pink-500 to-rose-500",
    featured: false,
  },
  {
    id: "case_cargo_uberization",
    category: "startups",
    industry: "IT, грузоперевозки",
    industryIcon: Package,
    client: "IT-стартап",
    result: "Структура + экзит",
    services: "Юридическая структура сервиса, документация, консультации по экзиту фаундеров",
    tag: "Юридическая архитектура сервиса",
    tagColor: "from-teal-500 to-cyan-500",
    featured: false,
  },
];

const filterCategories: { key: CaseCategory; label: string }[] = [
  { key: "all", label: "Все кейсы" },
  { key: "corporations", label: "Корпорации" },
  { key: "investors", label: "Инвесторы" },
  { key: "startups", label: "Стартапы" },
];

function CasesSection() {
  const [activeFilter, setActiveFilter] = useState<CaseCategory>("all");
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const filteredCases = casesData.filter((c) => {
    if (activeFilter === "all") return true;
    return c.category === activeFilter;
  });

  const displayedCases = showAll ? filteredCases : filteredCases.slice(0, 6);
  const hasMore = filteredCases.length > 6 && !showAll;

  const handleShowMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowAll(true);
      setIsLoading(false);
    }, 500);
  };

  const handleFilterChange = (filter: CaseCategory) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  return (
    <div className="space-y-8">
      <SectionTitle
        tag="КЕЙСЫ"
        title="Реальные результаты в цифрах"
        subtitle="Примеры того, как юридическая работа превращается в понятный результат для бизнеса."
      />

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2"
      >
        {filterCategories.map((filter) => (
          <motion.button
            key={filter.key}
            onClick={() => handleFilterChange(filter.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.key
                ? "bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))] text-[rgb(var(--color-midnight))] shadow-lg shadow-[rgba(var(--color-electric-cyan),0.3)]"
                : "border border-[rgba(var(--color-electric-cyan),0.2)] bg-[rgba(var(--color-deep-navy),0.4)] text-[rgb(var(--color-silver))] hover:border-[rgba(var(--color-electric-cyan),0.4)] hover:bg-[rgba(var(--color-deep-navy),0.6)]"
            }`}
          >
            {filter.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Cases grid */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {displayedCases.length > 0 ? (
          displayedCases.map((caseItem, i) => (
            <motion.div
              key={caseItem.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <NewCaseCard data={caseItem} />
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(var(--color-electric-cyan),0.1)]">
              <Building2 className="h-8 w-8 text-[rgb(var(--color-electric-cyan))]" />
            </div>
            <p className="text-lg font-medium text-white">Кейсы в этой категории скоро появятся</p>
            <p className="mt-2 text-sm text-[rgb(var(--color-silver))]/60">Выберите другую категорию или посмотрите все кейсы</p>
          </motion.div>
        )}
      </motion.div>

      {/* Show more button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            onClick={handleShowMore}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full border border-[rgba(var(--color-electric-cyan),0.3)] bg-[rgba(var(--color-deep-navy),0.4)] px-8 py-3 text-sm font-semibold text-[rgb(var(--color-electric-cyan))] transition-all hover:border-[rgba(var(--color-electric-cyan),0.5)] hover:bg-[rgba(var(--color-deep-navy),0.6)] disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block h-4 w-4 rounded-full border-2 border-[rgb(var(--color-electric-cyan))] border-t-transparent"
                />
                Загрузка...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Показать ещё кейсы
                <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            )}
          </motion.button>
        </motion.div>
      )}

      {/* Client testimonials */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 space-y-4 rounded-2xl border border-[rgba(var(--color-electric-cyan),0.2)] bg-gradient-to-br from-[rgba(var(--color-deep-navy),0.4)] to-[rgba(var(--color-midnight),0.4)] p-8 backdrop-blur-sm"
      >
        <p className="text-sm text-[rgb(var(--color-silver))]/80 mb-2">Часто слышим от клиентов: «Вы самые не душные юристы из тех, с кем мы работали»</p>
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
    </div>
  );
}

type NewCaseCardProps = {
  data: CaseData;
};

function NewCaseCard({ data }: NewCaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = data.industryIcon;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative h-full overflow-hidden rounded-2xl border border-[rgba(var(--color-electric-cyan),0.15)] bg-[rgba(var(--color-deep-navy),0.4)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(var(--color-electric-cyan),0.4)] hover:bg-[rgba(var(--color-deep-navy),0.6)] hover:shadow-lg hover:shadow-[rgba(var(--color-electric-cyan),0.1)]"
    >
      {/* Corner accent */}
      <div className="absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-px w-8 bg-gradient-to-r from-transparent to-[rgb(var(--color-electric-cyan))]" />
        <div className="absolute right-0 top-0 h-8 w-px bg-gradient-to-b from-[rgb(var(--color-electric-cyan))] to-transparent" />
      </div>

      {/* Tag */}
      <div className="absolute left-4 top-4 z-10">
        <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${data.tagColor} px-3 py-1 text-xs font-semibold text-white shadow-md`}>
          {data.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 pt-14">
        {/* Industry with icon */}
        <div className="mb-4 flex items-center gap-2 text-sm text-[rgb(var(--color-silver))]/70">
          <Icon className="h-4 w-4 text-[rgb(var(--color-electric-cyan))]" />
          <span>{data.industry}</span>
          <span className="ml-auto rounded-md border border-[rgba(var(--color-electric-cyan),0.2)] bg-[rgba(var(--color-electric-cyan),0.05)] px-2 py-0.5 text-xs font-medium text-[rgb(var(--color-silver))]">
            {data.client}
          </span>
        </div>

        {/* Result - highlighted */}
        <div className="mb-4">
          <p className="text-xs font-medium uppercase tracking-wide text-[rgb(var(--color-silver))]/50">Результат</p>
          <p className="mt-1 text-3xl font-bold text-gradient-cyan">
            {data.result}
          </p>
        </div>

        {/* Services description */}
        <p className="line-clamp-3 text-sm leading-relaxed text-[rgb(var(--color-silver))]/80">
          {data.services}
        </p>

        {/* Details button - appears on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className="mt-4"
        >
          <button className="flex items-center gap-2 text-sm font-semibold text-[rgb(var(--color-electric-cyan))] transition-colors hover:text-[rgb(var(--color-amber))]">
            Подробнее
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(var(--color-electric-cyan),0.3)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

function InvestorInsights() {

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
              src="/images/investor-insights-illustration.webp?v=2"
              alt="Investor Insights"
              className="w-full h-full object-contain"
            />

            {/* Animated arrow above magnifying glass */}
            <motion.div
              className="absolute top-[20%] left-[calc(60%-37px)] -translate-x-1/2 z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 4L12 20M12 4L6 10M12 4L18 10"
                  stroke="url(#arrowGradientMobile)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="arrowGradientMobile" x1="6" y1="4" x2="18" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgb(80, 209, 107)" />
                    <stop offset="100%" stopColor="rgb(231, 227, 145)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
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
        <div className="relative flex items-center justify-center gap-20">
          {/* Left items - aligned in column */}
          <div className="flex flex-col justify-center space-y-8" style={{ width: '300px' }}>
            {leftItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 text-sm text-[rgb(var(--color-silver))]"
              >
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))]" />
                <span className="leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <div className="relative flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-64 h-64"
            >
              <img
                src="/images/investor-insights-illustration.webp?v=2"
                alt="Investor Insights"
                className="w-full h-full object-contain"
              />

              {/* Animated arrow above magnifying glass */}
              <motion.div
                className="absolute top-[20%] left-[calc(60%-37px)] -translate-x-1/2 z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 4L12 20M12 4L6 10M12 4L18 10"
                    stroke="url(#arrowGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="arrowGradient" x1="6" y1="4" x2="18" y2="20" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgb(80, 209, 107)" />
                      <stop offset="100%" stopColor="rgb(231, 227, 145)" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Right items - aligned in column */}
          <div className="flex flex-col justify-center space-y-8" style={{ width: '300px' }}>
            {rightItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 text-sm text-[rgb(var(--color-silver))]"
              >
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[rgb(var(--color-electric-cyan))] to-[rgb(var(--color-amber))]" />
                <span className="leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
