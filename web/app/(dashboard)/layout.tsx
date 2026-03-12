import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex">
      <aside className="w-64 border-r border-slate-800 p-4 space-y-4">
        <div className="text-lg font-bold">Loyalty SaaS</div>
        <nav className="space-y-2 text-sm">
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
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

