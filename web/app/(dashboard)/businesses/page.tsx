import { supabase } from '../../../lib/supabaseClient';

export default async function BusinessesPage() {
  const { data, error } = await supabase
    .from('businesses')
    .select('id, name, city, created_at')
    .order('created_at', { ascending: false });

  const businesses = data ?? [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold">Мои бизнесы</h1>
          <p className="text-sm text-slate-400">
            Управляйте своими точками, генерируйте QR‑коды и смотрите аналитику.
          </p>
        </div>
        <a
          href="/businesses/new"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 transition-colors"
        >
          + Добавить бизнес
        </a>
      </div>

      {error && (
        <p className="text-sm text-red-400">
          Ошибка загрузки данных из Supabase.
        </p>
      )}

      {businesses.length === 0 ? (
        <div className="border border-dashed border-slate-700 rounded-xl bg-slate-900/40 p-6 space-y-4">
          <h2 className="text-lg font-medium">Начните с первого бизнеса</h2>
          <p className="text-sm text-slate-400">
            1. Создайте карточку бизнеса. {'\n'}
            2. Получите ссылку для QR‑кода (её можно напечатать или отправить
            дизайнеру). {'\n'}
            3. Подключите кассу или начните вручную начислять баллы через
            Telegram‑бота.
          </p>
          <a
            href="/businesses/new"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 transition-colors"
          >
            Создать первый бизнес
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {businesses.map((b) => (
            <div
              key={b.id}
              className="border border-slate-800 rounded-lg p-4 bg-slate-900 space-y-3"
            >
              <div>
                <div className="font-medium">{b.name}</div>
                <div className="text-sm text-slate-400">
                  {b.city ?? 'Город не указан'}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  В программе с{' '}
                  {b.created_at
                    ? new Date(b.created_at as string).toLocaleDateString()
                    : ''}
                </div>
              </div>
              <div className="h-px bg-slate-800" />
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href={`/businesses/${b.id}/qr`}
                  className="px-3 py-1 rounded-md border border-slate-700 hover:bg-slate-800"
                >
                  QR‑ссылки для клиентов
                </a>
                <a
                  href="/clients"
                  className="px-3 py-1 rounded-md border border-slate-700 hover:bg-slate-800"
                >
                  Клиенты и баллы
                </a>
                <a
                  href="/campaigns"
                  className="px-3 py-1 rounded-md border border-slate-700 hover:bg-slate-800"
                >
                  Акции и рассылки
                </a>
                <a
                  href="/analytics"
                  className="px-3 py-1 rounded-md border border-slate-700 hover:bg-slate-800"
                >
                  Аналитика
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



