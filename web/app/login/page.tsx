'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

type Mode = 'login' | 'signup';

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!email || !password) {
      setError('Введите e‑mail и пароль.');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'login') {
        const { error: authError } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (authError) {
          setError(authError.message);
        } else {
          setMessage('Вход выполнен. Сейчас мы перенаправим вас в кабинет.');
          window.location.href = '/businesses';
        }
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password
        });

        if (signUpError) {
          setError(signUpError.message);
        } else {
          setMessage(
            'Аккаунт создан. Теперь вы можете войти, используя указанные e‑mail и пароль.'
          );
          setMode('login');
        }
      }
    } catch {
      setError('Не удалось выполнить операцию. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h1 className="text-xl font-semibold">
          {mode === 'login' ? 'Вход в кабинет' : 'Регистрация бизнеса'}
        </h1>
        <p className="text-sm text-slate-400">
          {mode === 'login'
            ? 'Введите e‑mail и пароль, чтобы войти в кабинет.'
            : 'Создайте учётную запись владельца бизнеса по e‑mail и паролю.'}
        </p>

        <div className="inline-flex rounded-full border border-slate-700 bg-slate-950 text-xs">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={
              'px-3 py-1 rounded-full ' +
              (mode === 'login'
                ? 'bg-sky-500 text-slate-950'
                : 'text-slate-300 hover:text-sky-300')
            }
          >
            Вход
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={
              'px-3 py-1 rounded-full ' +
              (mode === 'signup'
                ? 'bg-sky-500 text-slate-950'
                : 'text-slate-300 hover:text-sky-300')
            }
          >
            Регистрация
          </button>
        </div>

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

          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-300">
              Пароль
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
              placeholder="Минимум 6 символов"
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
            {loading
              ? mode === 'login'
                ? 'Входим…'
                : 'Регистрируем…'
              : mode === 'login'
              ? 'Войти'
              : 'Зарегистрироваться'}
          </button>
        </form>

        <p className="text-[11px] text-slate-500">
          Для тестирования используется вход по e‑mail и паролю через Supabase
          Auth. Позже можно вернуть magic‑link и подтверждение e‑mail.
        </p>
      </div>
    </main>
  );
}

