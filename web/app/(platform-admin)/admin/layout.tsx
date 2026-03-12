import type { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex">
      <aside className="w-64 border-r border-slate-800 p-4 space-y-4">
        <div className="text-lg font-bold">Platform Admin</div>
        <nav className="space-y-2 text-sm">
          <a href="/admin" className="block hover:text-sky-400">
            Обзор
          </a>
          <a href="/admin/businesses" className="block hover:text-sky-400">
            Бизнесы
          </a>
          <a href="/admin/users" className="block hover:text-sky-400">
            Пользователи
          </a>
          <a href="/admin/settings" className="block hover:text-sky-400">
            Настройки
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

