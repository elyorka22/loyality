/* Главная страница: по умолчанию узбекский, кнопка переключает на русский */
'use client';

import { useState } from 'react';

type Lang = 'uz' | 'ru';

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>('uz');

  const isUz = lang === 'uz';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Переключатель языка */}
      <div className="flex justify-end px-4 pt-4">
        <div className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-xs">
          <button
            type="button"
            onClick={() => setLang('uz')}
            className={
              'px-2 py-0.5 rounded-full transition-colors ' +
              (isUz
                ? 'bg-sky-500 text-slate-950 font-semibold'
                : 'text-slate-300 hover:text-sky-300')
            }
          >
            O‘zbekcha
          </button>
          <button
            type="button"
            onClick={() => setLang('ru')}
            className={
              'px-2 py-0.5 rounded-full transition-colors ' +
              (!isUz
                ? 'bg-sky-500 text-slate-950 font-semibold'
                : 'text-slate-300 hover:text-sky-300')
            }
          >
            Русский
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
              {isUz ? 'SaaS sodiqlik platformasi' : 'SaaS‑платформа лояльности'}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {isUz
                ? "Qog'oz kartalarsiz va murakkab ilovalarsiz mijozlarni qaytaring"
                : 'Удерживайте гостей без бумажных карт и сложных приложений'}
            </h1>
            <p className="text-slate-300 text-sm md:text-base">
              {isUz
                ? "Barcha filiallaringiz uchun bitta Telegram‑bot va sodda veb‑kabinеt. Ball to‘plang, aksiyalar yarating va mijozlarni bir necha bosqichda qaytaring."
                : 'Один Telegram‑бот для всех ваших точек + простой веб‑кабинет. Начисляйте баллы, запускайте акции и возвращайте гостей за пару кликов.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/login"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 transition-colors"
              >
                {isUz ? 'Biznes sifatida boshlash' : 'Начать как бизнес'}
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-slate-700 text-sm font-medium text-slate-100 hover:bg-slate-900 transition-colors"
              >
                {isUz ? 'Demo so‘rash' : 'Запросить демо'}
              </button>
            </div>
            <p className="text-xs text-slate-500">
              {isUz
                ? "Kofexonalar, restoranlar, barbeshoplar, salonlar va mahalliy do‘konlar uchun mos."
                : 'Подходит для кофеен, ресторанов, барбершопов, салонов, локальных магазинов.'}
            </p>
          </div>

          <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 md:p-6">
            <div className="text-xs font-medium text-sky-300 mb-3">
              Как это выглядит для клиента
            </div>
            <div className="space-y-3 text-sm bg-slate-950/60 rounded-xl p-4 border border-slate-800">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-sky-500/20 flex items-center justify-center text-xs text-sky-300">
                  B
                </div>
                <div>
                  <p className="font-medium text-slate-100">Bot Loyalty</p>
                  <p className="text-slate-400 text-xs">
                    Добро пожаловать в программу лояльности «Кофе рядом»!
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-slate-900/80 border border-slate-800 p-3 space-y-1">
                <p className="text-xs text-slate-400">Ваш баланс</p>
                <p className="text-2xl font-semibold text-sky-300">120 баллов</p>
                <p className="text-xs text-slate-500">
                  {isUz
                    ? "Yana 2 ta tashrif — va kofe bepul."
                    : 'Ещё 2 визита — и кофе в подарок.'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button className="rounded-lg border border-slate-800 bg-slate-900/80 py-2 hover:bg-slate-900">
                  {isUz ? 'Xaridlar tarixi' : 'История покупок'}
                </button>
                <button className="rounded-lg border border-slate-800 bg-slate-900/80 py-2 hover:bg-slate-900">
                  {isUz ? 'Yaqin aksiyalar' : 'Акции рядом'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества для бизнеса */}
      <section className="px-4 py-12 border-t border-slate-900">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              {isUz ? 'Nega bu servis kerak' : 'Зачем вам этот сервис'}
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              {isUz
                ? "Mijozlarni ro‘yxatdan o‘tkazishdan tortib xabarnomalargacha — hammasini biz boshqaramiz. Siz esa mehmonlar bazasini, tashriflarini va qaytib kelishga undaydigan aksiyalarni ko‘rasiz."
                : 'Мы забираем на себя всю сложность: от регистрации клиентов до рассылок. Вы просто видите базу гостей, их визиты и запускаете акции, которые реально возвращают людей.'}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
              <p className="text-xs font-semibold text-sky-300">
                01 • {isUz ? 'Oddiy ro‘yxatdan o‘tish' : 'Простая регистрация'}
              </p>
              <p className="font-medium">
                {isUz
                  ? 'QR + Telegram, atigi 10 soniya'
                  : 'QR + Telegram, максимум 10 секунд'}
              </p>
              <p className="text-slate-400">
                {isUz
                  ? "Mijoz QR‑kodni skanerlaydi, botni ochadi va allaqachon sodiqlik dasturida. Ortiqcha ilovalar va uzun formalarsiz."
                  : 'Гость сканирует QR, открывает бота и уже в программе лояльности. Никаких приложений и форм на пол‑экрана.'}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
              <p className="text-xs font-semibold text-sky-300">
                02 • {isUz ? 'Moslashuvchan bonus tizimi' : 'Настраиваемые бонусы'}
              </p>
              <p className="font-medium">
                {isUz
                  ? 'Chekdan foiz yoki doimiy ball'
                  : 'Процент с чека или фикс баллами'}
              </p>
              <p className="text-slate-400">
                {isUz
                  ? "O‘zingiz tanlaysiz: har bir chekdan 1% ball yoki har tashrif uchun doimiy ball. Hisoblash va yozib borishni tizim bajaradi."
                  : 'Вы решаете: копить 1% от чека или давать фикс за визит. Система сама посчитает и начислит.'}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
              <p className="text-xs font-semibold text-sky-300">
                03 •{' '}
                {isUz ? 'Uzoq kelmagan mijozlarni qaytarish' : 'Возврат спящих гостей'}
              </p>
              <p className="font-medium">
                {isUz
                  ? '14 kundan keyin avtomatik xabarlar'
                  : 'Авто‑сообщения, если 14 дней тишины'}
              </p>
              <p className="text-slate-400">
                {isUz
                  ? "Uzoq vaqt kelmagan mijozlarga eslatma va maxsus taklif yuboramiz — ular yumshoq va tabiiy tarzda qaytadi."
                  : 'Мы напомним тем, кто давно не заходил, и аккуратно вернём их спец‑предложением.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="px-4 py-12 border-t border-slate-900">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">
            {isUz ? 'Platforma qanday ishlaydi' : 'Как работает платформа'}
          </h2>
          <ol className="grid gap-4 md:grid-cols-4 text-sm">
            <li className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold text-sky-300">Шаг 1</p>
              <p className="font-medium">
                {isUz ? 'Biznesingizni ro‘yxatdan o‘tkazasiz' : 'Вы регистрируете бизнес'}
              </p>
              <p className="text-slate-400">
                {isUz
                  ? "Kabinetga kirasiz, filiallarni qo‘shasiz va bonus qoidalarini sozlaysiz."
                  : 'Заходите в кабинет, добавляете заведение и настраиваете бонусы.'}
              </p>
            </li>
            <li className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold text-sky-300">Шаг 2</p>
              <p className="font-medium">
                {isUz ? 'QR‑kodlarni olasiz' : 'Получаете QR‑коды'}
              </p>
              <p className="text-slate-400">
                {isUz
                  ? "QR‑kodlarni chop etib kassaga, menyuga yoki stol ustiga qo‘yasiz."
                  : 'Распечатываете QR и ставите у кассы, на меню или на столики.'}
              </p>
            </li>
            <li className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold text-sky-300">Шаг 3</p>
              <p className="font-medium">
                {isUz ? 'Mijozlar ball to‘plashadi' : 'Гости копят баллы'}
              </p>
              <p className="text-slate-400">
                {isUz
                  ? "Kassir xaridlarni belgilaydi, bot esa ball va tashrif tarixini ko‘rsatadi."
                  : 'Кассир отмечает покупки, а бот показывает баллы и историю визитов.'}
              </p>
            </li>
            <li className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold text-sky-300">Шаг 4</p>
              <p className="font-medium">
                {isUz ? 'Aksiyalarni ishga tushirasiz' : 'Вы запускаете акции'}
              </p>
              <p className="text-slate-400">
                {isUz
                  ? "Uzoqdan beri kelmagan yoki tez‑tez keladigan mijozlarga promo‑xabarnomalar yuborasiz."
                  : 'Отправляете промо‑сообщения тем, кто давно не был или часто приходит.'}
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 border-t border-slate-900">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-semibold">
            {isUz
              ? "Servisni o‘z joyingizda sinab ko‘rmoqchimisiz?"
              : 'Хотите проверить на своём заведении?'}
          </h2>
          <p className="text-sm text-slate-400">
            {isUz
              ? "Ro‘yxatdan o‘ting, Telegram‑botni ulang va birinchi aksiyalarni ishga tushiring. Avval bitta filialdan boshlang, keyin esa ehtiyoj bo‘yicha kengaytiring."
              : 'Зарегистрируйтесь, подключите Telegram‑бота и запустите первые акции. Базовый тариф можно начать с одной точки и расширять по мере роста.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/login"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 transition-colors"
            >
              {isUz
                ? 'Kirish va biznesni sozlash'
                : 'Войти и настроить бизнес'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

