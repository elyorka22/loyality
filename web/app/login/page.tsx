'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!email) {
      setError('Введите e‑mail.');
      return;
    }

    setLoading(true);

    try {
      const redirectTo = `${window.location.origin}/auth/callback`;

      const { error: authError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectTo
        }
      });

      if (authError) {
        setError(authError.message);
      } else {
        setMessage(
          'Мы отправили ссылку для входа на ваш e‑mail. Проверьте почту и перейдите по ссылке.'
        );
      }
    } catch (e) {
      setError('Не удалось выполнить вход. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h1 className="text-xl font-semibold">Вход в кабинет</h1>
        <p className="text-sm text-slate-400">
          Введите e‑mail, мы пришлём безопасную ссылку для входа.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-300">
              E‑mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
              placeholder="you@example.com"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 whitespace-pre-line">{error}</p>
          )}
          {message && (
            <p className="text-xs text-emerald-400 whitespace-pre-line">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 disabled:opacity-60 disabled:hover:bg-sky-500 transition-colors"
          >
            {loading ? 'Отправляем ссылку…' : 'Войти по e‑mail'}
          </button>
        </form>

        <p className="text-[11px] text-slate-500">
          Авторизация работает через Supabase Auth. Убедитесь, что в настройках
          Supabase включён вход по e‑mail (magic link) и настроен redirect URL.
        </p>
      </div>
    </main>
  );
}


