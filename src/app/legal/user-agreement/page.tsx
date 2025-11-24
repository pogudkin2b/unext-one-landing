import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Пользовательское соглашение | UNEXT.ONE",
  robots: "noindex, nofollow",
};

export default function UserAgreementPage() {
  return (
    <main className="min-h-screen bg-[rgb(var(--color-midnight))] pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[rgb(var(--color-silver))]/70 transition-colors hover:text-[rgb(var(--color-electric-cyan))]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Вернуться на главную
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-white sm:text-4xl mb-8">
            ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
          </h1>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            Настоящее Пользовательское соглашение (далее — «Соглашение») регламентирует отношения между компанией UNEXT.one (далее — «Компания»), и любым лицом (далее — «Пользователь»), посещающим (использующим) сайт в сети Интернет по адресу: www.unext.one (далее — «Сайт»). Используя Сайт любым способом, Пользователь тем самым принимает условия настоящего Соглашения в полном объеме, присоединяется к настоящему Соглашению и принимает на себя все описанные ниже обязанности и риски.
          </p>

          <p className="text-[rgb(var(--color-amber))] font-semibold my-6">
            ВЫ ЯВЛЯЕТЕСЬ ПОЛЬЗОВАТЕЛЕМ И ОБЯЗАНЫ ОЗНАКОМИТЬСЯ С НАСТОЯЩИМ СОГЛАШЕНИЕМ ДО НАЧАЛА РАБОТЫ С САЙТОМ. ЕСЛИ ВЫ НЕ СОГЛАСНЫ С ЭТИМ СОГЛАШЕНИЕМ, ПОЖАЛУЙСТА, НЕ ИСПОЛЬЗУЙТЕ САЙТ.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>1.1.</strong> Компания является владельцем Сайта и администратором доменного имени unext.one. По настоящему Соглашению Компания предоставляет доступ к Сайту, а Пользователь обязуется использовать Сайт надлежащим образом в пределах, установленных настоящим Соглашением.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>1.2.</strong> Основное назначение Сайта состоит в информировании широкого круга Пользователей о деятельности Компании, а также обеспечении коммуникации между Пользователями и Компанией посредством веб-форм («Формы обратной связи») и почтовых рассылок.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>1.3.</strong> Сайт не содержит публичных оферт на оказание Компанией юридических, патентных или иных услуг.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>1.4.</strong> Информация, размещенная на Сайте, не является юридической, финансовой, налоговой, аудиторской или иной консультацией и носит исключительно справочный характер. Компания не несет ответственности за использование данной информации Пользователем.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>1.5.</strong> Сайт содержит (может содержать) сведения об офисах (включая филиалы и обособленные подразделения), аффилированных лицах и деловых партнерах Компании.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>1.6.</strong> Изменение условий настоящего Соглашения Компанией допускается в одностороннем порядке без отдельного уведомления Пользователя.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>1.7.</strong> Сайт предназначен для использования на территории Российской Федерации.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>1.8.</strong> Настоящее Соглашение составлено на русском языке.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">2. ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>2.1.</strong> Компания является обладателем надлежащим образом оформленных исключительных прав или прав использования в отношении Сайта в целом, а также всех размещенных на них результатов интеллектуальной деятельности, среди прочего, текстов, фотографий, схем, графических рисунков, прочих изображений, программ для ЭВМ, видео-, аудиозаписей, иных объектов авторского права, баз данных, товарных знаков и знаков обслуживания (далее — «Контент»).
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>2.2.</strong> Пользователь обязан соблюдать права Компании на Контент и воздержаться от любых действий, которые прямо или косвенно могут привести к нарушению прав Компании на Контент.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">3. ПОРЯДОК И УСЛОВИЯ ИСПОЛЬЗОВАНИЯ САЙТА</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>3.1.</strong> Компания предоставляет Пользователю неисключительное безвозмездное право на использование Контента на территории всего мира следующими способами:
          </p>

          <ul className="list-disc pl-6 text-[rgb(var(--color-silver))] space-y-2">
            <li>осуществлять доступ к Контенту и знакомиться с ним путем запуска Сайта в окне браузера;</li>
            <li>записывать страницы Сайта или их фрагменты на машинный носитель информации или распечатывать их на бумажном носителе в целях использования по основному назначению Сайта;</li>
            <li>цитировать Контент в объеме, оправданном правомерной целью цитирования, при условии, что Сайт будет указан как источник цитаты.</li>
          </ul>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>3.2.</strong> Пользователь не уполномочен предоставлять сублицензии на права, указанные в п. 3.1 Соглашения.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>3.3.</strong> Права, предусмотренные в п. 3.1 Соглашения, предоставляются Пользователю при условии, что он соблюдает все положения настоящего Соглашения.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>3.4.</strong> Компания вправе по своему усмотрению прекращать или ограничивать доступ к Сайту отдельных Пользователей или групп Пользователей без указания причин.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>3.5.</strong> Пользователю запрещается:
          </p>

          <ul className="list-disc pl-6 text-[rgb(var(--color-silver))] space-y-2">
            <li>воспроизведение Контента в периодическом печатном издании без предварительного согласия Компании;</li>
            <li>доступ к настройкам Сайта, которые не предназначены для всех Пользователей;</li>
            <li>использование логинов и паролей других Пользователей;</li>
            <li>создание фишинговых веб-ресурсов, сходных до степени смешения с Сайтом;</li>
            <li>любые действия с исходным кодом Сайта;</li>
            <li>обход навигационной системы Сайта;</li>
            <li>поиск и использование уязвимостей Сайта;</li>
            <li>направление через Формы обратной связи вредоносных программ, рекламы, спама;</li>
            <li>совершение любых действий, которые противоречат законодательству Российской Федерации.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">4. ФОРМЫ ОБРАТНОЙ СВЯЗИ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>4.1.</strong> Компания размещает на Сайте Формы обратной связи для подачи заявок на вакантные должности, оформления подписки на информационные и маркетинговые рассылки, связи с сотрудниками Компании и направления иных сообщений.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>4.2.</strong> Сообщения, не соответствующие назначению Формы обратной связи, могут быть удалены без рассмотрения.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>4.3.</strong> Формы обратной связи не предназначены для направления любых материалов, содержащих охраняемую законом тайну (адвокатскую тайну, тайну следствия, банковскую тайну и т.д.).
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">5. РАССЫЛКИ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>5.1.</strong> На Сайте может быть реализована функция информационных и маркетинговых рассылок.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>5.2.</strong> Пользователи имеют возможность в любое время изменить условия подписки и отписаться в соответствующих разделах Сайтов.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>5.3.</strong> При оформлении подписки запрещается использовать адрес электронной почты, который не принадлежит Пользователю.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">6. ЛИЧНЫЙ КАБИНЕТ ПОЛЬЗОВАТЕЛЯ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>6.1.</strong> На Сайте может быть сформирован раздел с ограниченным доступом, предназначенный для Пользователей — клиентов Компании (далее — «Личный кабинет»).
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>6.2.</strong> Процедура регистрации выполняется один раз и состоит в создании уникальных логина и пароля для Пользователя.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>6.3.</strong> Пользователь не вправе делать снимки экрана, а также сохранять или распечатывать страницы Личного кабинета, если только подобные функции не предусмотрены на соответствующих страницах.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">7. ВНЕШНИЕ РЕСУРСЫ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            Сайт может содержать ссылки на веб-ресурсы третьих лиц. Компания не несет ответственности за содержание веб-ресурсов третьих лиц и особенности их функционирования, в том числе за возможный вред, причиненный Пользователям на указанных веб-ресурсах.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">8. ОТСУТСТВИЕ ГАРАНТИЙ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed font-semibold">
            ДОСТУП К САЙТУ ПРЕДОСТАВЛЯЕТСЯ ПОЛЬЗОВАТЕЛЮ НА УСЛОВИЯХ «КАК ЕСТЬ». КОМПАНИЯ НАСТОЯЩИМ ОТКАЗЫВАЕТСЯ ОТ ЛЮБЫХ ГАРАНТИЙ В ОТНОШЕНИИ КОНТЕНТА И САЙТОВ.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">9. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>9.1.</strong> Компания не несет ответственности за любое нарушение обязательств по Соглашению и за возникновение у Пользователя убытков в результате использования Сайта, кроме случаев наличия умысла у Компании.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>9.2.</strong> Пользователь несет ответственность за нарушение настоящего Соглашения в полном объеме согласно нормам применимого законодательства.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">10. КОНФИДЕНЦИАЛЬНОСТЬ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>10.1.</strong> Логин и пароль Пользователя являются конфиденциальной информацией.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>10.2.</strong> Персональные данные Пользователя обрабатываются в соответствии с Политикой конфиденциальности Компании.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>10.3.</strong> Сообщения, отправленные через Форму обратной связи, являются конфиденциальной информацией и не подлежат разглашению Компанией, за исключением случаев, предусмотренных законодательством.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">11. ПРИМЕНИМОЕ ПРАВО И РАЗРЕШЕНИЕ СПОРОВ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>11.1.</strong> Настоящее Соглашение и все отношения Сторон в связи с использованием Сайта регламентируются законодательством Российской Федерации.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>11.2.</strong> Все споры, разногласия и претензии стороны будут стремиться решить путем переговоров.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>11.3.</strong> Соблюдение претензионного порядка урегулирования споров является для Сторон обязательным.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>11.4.</strong> Все споры, которые Стороны не смогли разрешить путем переговоров, подлежат разрешению в судебном порядке по месту нахождения Компании.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">12. ОБРАТНАЯ СВЯЗЬ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            Обращения по вопросам, связанным с работой Сайта, и/или заявления о нарушении авторских и (или) смежных прав необходимо направлять по электронной почте: <a href="mailto:info@unext.one" className="text-[rgb(var(--color-electric-cyan))] hover:underline">info@unext.one</a>.
          </p>
        </article>
      </div>
    </main>
  );
}
