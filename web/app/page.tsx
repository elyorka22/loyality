export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
              SaaS‑платформа лояльности
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Удерживайте гостей без&nbsp;бумажных карт и сложных приложений
            </h1>
            <p className="text-slate-300 text-sm md:text-base">
              Один Telegram‑бот для всех ваших точек + простой веб‑кабинет.
              Начисляйте баллы, запускайте акции и возвращайте гостей за пару кликов.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/login"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 transition-colors"
              >
                Начать как бизнес
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-slate-700 text-sm font-medium text-slate-100 hover:bg-slate-900 transition-colors"
              >
                Запросить демо
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Подходит для кофеен, ресторанов, барбершопов, салонов, локальных магазинов.
            </p>
          </div>

          <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 md:p-6">
            <div className="text-xs font-medium text-sky-300 mb-3">
              Как это выглядит для клиента
            </div>
            <div className="space-y-3 text-sm bg-slate-950/60 rounded-xl p-4 border border-slate-800">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-sky-500/20 flex items-center justify-center text-xs text-sky-300">
                  B
                </div>
                <div>
                  <p className="font-medium text-slate-100">Bot Loyalty</p>
                  <p className="text-slate-400 text-xs">
                    Добро пожаловать в программу лояльности «Кофе рядом»!
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-slate-900/80 border border-slate-800 p-3 space-y-1">
                <p className="text-xs text-slate-400">Ваш баланс</p>
                <p className="text-2xl font-semibold text-sky-300">120 баллов</p>
                <p className="text-xs text-slate-500">
                  Ещё 2 визита — и кофе в подарок.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button className="rounded-lg border border-slate-800 bg-slate-900/80 py-2 hover:bg-slate-900">
                  История покупок
                </button>
                <button className="rounded-lg border border-slate-800 bg-slate-900/80 py-2 hover:bg-slate-900">
                  Акции рядом
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества для бизнеса */}
      <section className="px-4 py-12 border-t border-slate-900">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Зачем вам этот сервис</h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Мы забираем на себя всю сложность: от регистрации клиентов до рассылок.
              Вы просто видите базу гостей, их визиты и запускаете акции, которые
              реально возвращают людей.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
              <p className="text-xs font-semibold text-sky-300">
                01 • Простая регистрация
              </p>
              <p className="font-medium">QR + Telegram, максимум 10 секунд</p>
              <p className="text-slate-400">
                Гость сканирует QR, открывает бота и уже в программе лояльности.
                Никаких приложений и форм на пол‑экрана.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
              <p className="text-xs font-semibold text-sky-300">
                02 • Настраиваемые бонусы
              </p>
              <p className="font-medium">Процент с чека или фикс баллами</p>
              <p className="text-slate-400">
                Вы решаете: копить 1% от чека или давать фикс за визит.
                Система сама посчитает и начислит.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
              <p className="text-xs font-semibold text-sky-300">
                03 • Возврат спящих гостей
              </p>
              <p className="font-medium">Авто‑сообщения, если 14 дней тишины</p>
              <p className="text-slate-400">
                Мы напомним тем, кто давно не заходил, и аккуратно вернём их
                спец‑предложением.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="px-4 py-12 border-t border-slate-900">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Как работает платформа</h2>
          <ol className="grid gap-4 md:grid-cols-4 text-sm">
            <li className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold text-sky-300">Шаг 1</p>
              <p className="font-medium">Вы регистрируете бизнес</p>
              <p className="text-slate-400">
                Заходите в кабинет, добавляете заведение и настраиваете бонусы.
              </p>
            </li>
            <li className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold text-sky-300">Шаг 2</p>
              <p className="font-medium">Получаете QR‑коды</p>
              <p className="text-slate-400">
                Распечатываете QR и ставите у кассы, на меню или на столики.
              </p>
            </li>
            <li className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold text-sky-300">Шаг 3</p>
              <p className="font-medium">Гости копят баллы</p>
              <p className="text-slate-400">
                Кассир отмечает покупки, а бот показывает баллы и историю визитов.
              </p>
            </li>
            <li className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold text-sky-300">Шаг 4</p>
              <p className="font-medium">Вы запускаете акции</p>
              <p className="text-slate-400">
                Отправляете промо‑сообщения тем, кто давно не был или часто приходит.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 border-t border-slate-900">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-semibold">
            Хотите проверить на своём заведении?
          </h2>
          <p className="text-sm text-slate-400">
            Зарегистрируйтесь, подключите Telegram‑бота и запустите первые акции.
            Базовый тариф можно начать с одной точки и расширять по мере роста.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/login"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 transition-colors"
            >
              Войти и настроить бизнес
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

