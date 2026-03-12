import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Loyalty SaaS',
  description: 'Платформа лояльности для локального бизнеса'
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

