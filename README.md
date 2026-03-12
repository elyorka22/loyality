## Loyalty SaaS Platform

Базовый каркас для SaaS‑платформы лояльности для локального бизнеса.

### Технологический стек

- Frontend: Next.js 14 (App Router), TailwindCSS, shadcn/ui
- Backend / DB / Auth: Supabase (PostgreSQL, Auth, Realtime)
- Telegram Bot: Node.js + Telegraf
- Хостинг: Vercel (frontend) + Railway/другой Node‑хостинг для бота

### Основная идея

- Один Telegram‑бот для всех бизнесов.
- Каждый бизнес имеет `business_id`, QR‑код `https://t.me/<BOT_USERNAME>?start=<business_id>` и свою страницу в dashboard.
- Клиент сканирует QR, попадает в бот, регистрируется и получает приветственные бонусы.
- Владелец бизнеса работает в dashboard: видит клиентов и статистику, настраивает бонусы и отправляет кампании.

### Структура (планируемая)

- `apps/web` — Next.js 14 админ‑панель (бизнес + platform admin).
- `apps/bot` — Telegram‑бот на Telegraf.
- `supabase/schema.sql` — схема БД для Supabase.

В дальнейшем сюда будут добавлены исходники frontend и бота.

