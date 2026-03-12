import { supabase } from '@/lib/supabaseClient';

export default async function BusinessesPage() {
  const { data, error } = await supabase
    .from('businesses')
    .select('id, name, city, created_at')
    .order('created_at', { ascending: false });

  const businesses = data ?? [];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Мои бизнесы</h1>
      {error && (
        <p className="text-sm text-red-400">
          Ошибка загрузки данных из Supabase.
        </p>
      )}
      {businesses.length === 0 ? (
        <p className="text-sm text-slate-400">
          Пока нет ни одного бизнеса. Создайте первый в админ‑панели.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {businesses.map((b) => (
            <div
              key={b.id}
              className="border border-slate-800 rounded-lg p-4 bg-slate-900"
            >
              <div className="font-medium">{b.name}</div>
              <div className="text-sm text-slate-400">
                {b.city ?? 'Город не указан'}
              </div>
              <div className="text-xs text-slate-500 mt-2">
                С{' '}
                {b.created_at
                  ? new Date(b.created_at as string).toLocaleDateString()
                  : ''}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


