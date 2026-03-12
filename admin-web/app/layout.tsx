import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Loyalty SaaS Admin',
  description: 'Админ‑панель платформы лояльности'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}

