import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | UNEXT.ONE",
  robots: "noindex, nofollow",
};

export default function PrivacyPolicyPage() {
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
            ПОЛИТИКА В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
          </h1>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            Настоящая Политика в отношении обработки персональных данных (далее – «Политика конфиденциальности») действует в отношении всей информации, содержащей персональные данные Пользователей, которые могут быть получены Оператором в процессе использования Пользователями сайта, на котором размещен текст настоящей Политики конфиденциальности.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>«Администрация сайта»</strong> – уполномоченные сотрудники Оператора, действующие от его имени, которые организуют и (или) осуществляют обработку персональных данных.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>«Обработка персональных данных»</strong> – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу, обезличивание, блокирование, удаление, уничтожение персональных данных.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>«Оператор»</strong> – компания UNEXT.one.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>«Конфиденциальность персональных данных»</strong> – обязательное для соблюдения Администрацией сайта требование не допускать их умышленного распространения без согласия субъекта персональных данных.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>«Персональные данные»</strong> – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>«Пользователь сайта»</strong> – лицо, имеющее доступ к сайту посредством сети Интернет и использующее данный сайт для своих целей.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>«Сайт»</strong> – совокупность интегрированных программно-аппаратных средств и информации, предназначенной для публикации в сети Интернет. Сайт Исполнителя – сайт с доменным именем unext.one.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>«Cookie (Cookies)»</strong> – небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере Пользователя.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>«IP-адрес»</strong> – уникальный сетевой адрес узла в компьютерной сети.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">2. ОБЩИЕ ПОЛОЖЕНИЯ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>2.1.</strong> Персональные данные Пользователя обрабатываются только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на Сайте.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>2.2.</strong> Функционал Сайта может предусматривать использование файлов Cookies. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>2.3.</strong> В случае несогласия с условиями настоящей Политики конфиденциальности Пользователь должен прекратить использование Сайта.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>2.4.</strong> Настоящая Политика конфиденциальности применяется только к Сайту, а также к взаимосвязанным сервисам третьих лиц, находящимся под администрированием Оператора.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>2.5.</strong> Пользователь гарантирует правомерность, корректность и достоверность предоставляемых Персональных данных.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>3.1.</strong> Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта (Оператора) по умышленному неразглашению Персональных данных, которые Пользователь предоставляет в ходе использования Сайта.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>3.2.</strong> Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, обычно включают в себя следующую информацию:
          </p>

          <ul className="list-disc pl-6 text-[rgb(var(--color-silver))] space-y-2">
            <li>адрес электронной почты (e-mail);</li>
            <li>фамилия, имя отчество;</li>
            <li>дата рождения;</li>
            <li>номер мобильного телефона.</li>
          </ul>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>3.3.</strong> Администрация сайта (Оператор) также принимает усилия по защите Персональных данных, которые автоматически передаются в процессе посещения страниц Сайта:
          </p>

          <ul className="list-disc pl-6 text-[rgb(var(--color-silver))] space-y-2">
            <li>IP адрес;</li>
            <li>сведения о стране, городе, области проживания;</li>
            <li>информация из Cookies;</li>
            <li>информация о браузере;</li>
            <li>время доступа;</li>
            <li>посещенные адреса страниц;</li>
            <li>реферер (адрес предыдущей страницы).</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>4.1.</strong> Персональные данные Пользователя Администрация сайта (Оператор) может использовать в целях:
          </p>

          <ul className="list-disc pl-6 text-[rgb(var(--color-silver))] space-y-2">
            <li>идентификации (верификации) Пользователя;</li>
            <li>предоставления Пользователю доступа к ресурсам Сайта;</li>
            <li>установления с Пользователем обратной связи;</li>
            <li>внесения данных о Пользователе в систему управления взаимоотношениями с клиентами (CRM-система);</li>
            <li>определения места нахождения Пользователя для обеспечения безопасности;</li>
            <li>обработки и получения платежей от Пользователя;</li>
            <li>предоставления Пользователю эффективной клиентской и технической поддержки;</li>
            <li>предоставления Пользователю обновлений, специальных предложений, информации о ценах, новостной рассылки;</li>
            <li>осуществления рекламной деятельности с согласия Пользователя.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>5.1.</strong> Обработка персональных данных Пользователя осуществляется любым законным способом до достижения целей обработки либо до момента отзыва согласия Пользователем.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>5.2.</strong> Пользователь соглашается с тем, что Администрация сайта (Оператор) вправе передавать персональные данные третьим лицам, в частности, партнерам по бизнесу, провайдерам хостинга, правообладателям CRM-систем.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>5.3.</strong> Персональные данные могут быть также раскрыты правоохранительным органам, контролирующим или другим государственным органам в соответствии с законодательством Российской Федерации.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">6. ОБЯЗАТЕЛЬСТВА СТОРОН</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>6.1.</strong> Пользователь обязуется:
          </p>

          <ul className="list-disc pl-6 text-[rgb(var(--color-silver))] space-y-2">
            <li>предоставить корректную и правдивую информацию о Персональных данных;</li>
            <li>своевременно обновлять или дополнять предоставленную информацию;</li>
            <li>принимать меры для защиты доступа к своим Персональным данным.</li>
          </ul>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>6.2.</strong> Оператор (Администрация сайта) обязуется:
          </p>

          <ul className="list-disc pl-6 text-[rgb(var(--color-silver))] space-y-2">
            <li>использовать полученную информацию исключительно для целей, указанных в Политике конфиденциальности;</li>
            <li>не разглашать Персональные данные Пользователя, за исключением случаев, предусмотренных Политикой;</li>
            <li>осуществлять блокирование персональных данных в случае выявления недостоверных данных или неправомерных действий.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">7. ОТВЕТСТВЕННОСТЬ СТОРОН</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>7.1.</strong> Администрация сайта (Оператор) несёт ответственность за умышленное разглашение Персональных данных Пользователя в соответствии с законодательством Российской Федерации.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>7.2.</strong> Администрация сайта (Оператор) не несёт ответственность, если информация о Персональных данных:
          </p>

          <ul className="list-disc pl-6 text-[rgb(var(--color-silver))] space-y-2">
            <li>стала публичным достоянием до её утраты или разглашения;</li>
            <li>была получена от третьей стороны до момента её получения Оператором;</li>
            <li>была получена третьими лицами путем несанкционированного доступа;</li>
            <li>была разглашена третьим лицам с согласия Пользователя.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">8. РАЗРЕШЕНИЕ СПОРОВ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>8.1.</strong> До обращения в суд с иском по спорам обязательным является предъявление претензии.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>8.2.</strong> Получатель претензии в течение 30 (тридцати) календарных дней со дня получения претензии письменно уведомляет заявителя о результатах рассмотрения претензии.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>8.3.</strong> При недостижении соглашения спор передается на рассмотрение в суд в соответствии с законодательством Российской Федерации.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>8.4.</strong> К Политике конфиденциальности и отношениям между Пользователем и Оператором применяется законодательство Российской Федерации.
          </p>

          <h2 className="text-xl font-bold text-white mt-10 mb-4">9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</h2>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>9.1.</strong> Администрация сайта (Оператор) вправе вносить изменения в Политику конфиденциальности без согласия Пользователя.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>9.2.</strong> Новая редакция Политики конфиденциальности вступает в силу с даты ее размещения на Сайте.
          </p>

          <p className="text-[rgb(var(--color-silver))] leading-relaxed">
            <strong>9.3.</strong> Все предложения или вопросы по настоящей Политике конфиденциальности следует направлять Администрации сайта (Оператору) через форму обратной связи, размещенную на Сайте, или по электронной почте: <a href="mailto:info@unext.one" className="text-[rgb(var(--color-electric-cyan))] hover:underline">info@unext.one</a>.
          </p>
        </article>
      </div>
    </main>
  );
}
