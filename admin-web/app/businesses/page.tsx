import { supabase } from '@/lib/supabaseClient';
import type { ReactNode } from 'react';

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex">
      <aside className="w-64 border-r border-slate-800 p-4 space-y-4">
        <div className="text-lg font-bold">Platform Admin</div>
        <nav className="space-y-2 text-sm">
          <a href="/" className="block hover:text-sky-400">
            Обзор
          </a>
          <a href="/businesses" className="block hover:text-sky-400">
            Бизнесы
          </a>
          <a href="/users" className="block hover:text-sky-400">
            Пользователи
          </a>
          <a href="/settings" className="block hover:text-sky-400">
            Настройки
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

export default async function AdminBusinessesPage() {
  const { data, error } = await supabase
    .from('businesses')
    .select('id, name, city, created_at, owner_id')
    .order('created_at', { ascending: false });

  const businesses = data ?? [];

  return (
    <Shell>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Все бизнесы</h1>
        {error && (
          <p className="text-sm text-red-400">
            Ошибка загрузки данных из Supabase.
          </p>
        )}
        {businesses.length === 0 ? (
          <p className="text-sm text-slate-400">
            Пока нет ни одного бизнеса на платформе.
          </p>
        ) : (
          <div className="border border-slate-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-slate-400">
                <tr>
                  <th className="text-left p-2">Название</th>
                  <th className="text-left p-2">Город</th>
                  <th className="text-left p-2">Владелец (id)</th>
                  <th className="text-left p-2">Создан</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((b) => (
                  <tr key={b.id} className="border-t border-slate-800">
                    <td className="p-2">{b.name}</td>
                    <td className="p-2">{b.city ?? '—'}</td>
                    <td className="p-2 text-xs text-slate-500">
                      {b.owner_id}
                    </td>
                    <td className="p-2 text-xs text-slate-500">
                      {b.created_at
                        ? new Date(b.created_at as string).toLocaleString()
                        : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Shell>
  );
}


