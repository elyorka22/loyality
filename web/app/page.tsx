export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Платформа лояльности для локального бизнеса
        </h1>
        <p className="text-slate-300">
          Один Telegram‑бот и удобный веб‑кабинет для магазинов и ресторанов.
          Удерживайте клиентов с помощью бонусов, баллов и рассылок.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/login"
            className="px-4 py-2 rounded-md bg-sky-500 text-slate-950 font-medium hover:bg-sky-400"
          >
            Войти в кабинет бизнеса
          </a>
        </div>
      </div>
    </main>
  );
}

