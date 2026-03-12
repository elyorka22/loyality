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

export default function AdminSettingsPage() {
  return (
    <Shell>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Глобальные настройки</h1>
        <p className="text-sm text-slate-400">
          Здесь можно будет управлять тарифами, лимитами и другими настройками платформы.
        </p>
      </div>
    </Shell>
  );
}

