import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800 p-4 flex items-center justify-between md:block md:space-y-4">
        <div className="text-lg font-bold">Loyalty SaaS</div>
        <nav className="hidden md:block space-y-2 text-sm">
          <a href="/businesses" className="block hover:text-sky-400">
            Бизнесы
          </a>
          <a href="/clients" className="block hover:text-sky-400">
            Клиенты
          </a>
          <a href="/campaigns" className="block hover:text-sky-400">
            Кампании
          </a>
          <a href="/analytics" className="block hover:text-sky-400">
            Аналитика
          </a>
        </nav>
        {/* Мобильное меню: простая горизонтальная навигация */}
        <nav className="flex md:hidden gap-3 text-xs text-slate-300">
          <a href="/businesses" className="hover:text-sky-400">
            Бизнесы
          </a>
          <a href="/clients" className="hover:text-sky-400">
            Клиенты
          </a>
          <a href="/campaigns" className="hover:text-sky-400">
            Кампании
          </a>
          <a href="/analytics" className="hover:text-sky-400">
            Аналитика
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  );
}


