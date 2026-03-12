'use client';

import { useState } from 'react';
import { supabase } from '../../../../lib/supabaseClient';

export default function NewBusinessPage() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Введите название бизнеса.');
      return;
    }

    setSaving(true);
    try {
      const { error: insertError } = await supabase.from('businesses').insert({
        name: name.trim(),
        city: city.trim() || null,
        // owner_id будет проставлен позже через бекенд или edge‑функцию
      });

      if (insertError) {
        setError(insertError.message);
      } else {
        window.location.href = '/businesses';
      }
    } catch {
      setError('Не удалось создать бизнес. Попробуйте позже.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Новый бизнес</h1>
      <p className="text-sm text-slate-400">
        Заполните базовую информацию. Остальные настройки (бонусы, акции,
        интеграции) можно будет добавить позже.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-300">
            Название*
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
            placeholder="Например: Кофейня «Magnit»"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-300">
            Город
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
            placeholder="Например: Ташкент"
          />
        </div>

        {error && (
          <p className="text-xs text-red-400 whitespace-pre-line">{error}</p>
        )}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 disabled:opacity-60 disabled:hover:bg-sky-500 transition-colors"
          >
            {saving ? 'Создаём…' : 'Создать'}
          </button>
          <a
            href="/businesses"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-slate-700 text-sm text-slate-100 hover:bg-slate-900"
          >
            Отмена
          </a>
        </div>

        <p className="text-[11px] text-slate-500">
          В тестовой версии владелец бизнеса не привязан к учётной записи. В
          продакшене поле owner_id будет заполняться автоматически по
          авторизованному пользователю.
        </p>
      </form>
    </div>
  );
}

