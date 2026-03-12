import { Telegraf } from 'telegraf';
import { supabase } from './services/supabaseClient';

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error('BOT_TOKEN is not set');
}

const bot = new Telegraf(token);

// /start
bot.start(async (ctx) => {
  const businessHint =
    ctx.message && 'text' in ctx.message
      ? ctx.message.text.split(' ')[1]
      : undefined;

  await ctx.reply(
    businessHint
      ? `Добро пожаловать! Вы зашли по ссылке бизнеса: ${businessHint}.`
      : 'Добро пожаловать в программу лояльности!'
  );

  // Простой тест Supabase: считаем количество бизнесов
  const { count } = await supabase
    .from('businesses')
    .select('*', { head: true, count: 'exact' });

  if (typeof count === 'number') {
    await ctx.reply(`Сейчас на платформе подключено бизнесов: ${count}.`);
  }
});

// /points
bot.command('points', async (ctx) => {
  await ctx.reply('Здесь будет отображаться ваш баланс баллов.');
});

// /shops
bot.command('shops', async (ctx) => {
  await ctx.reply('Здесь будет список ближайших магазинов.');
});

// /profile
bot.command('profile', async (ctx) => {
  await ctx.reply('Здесь будет информация о вашем профиле.');
});

// Запуск в режиме polling для разработки
bot.launch().then(() => {
  console.log('Bot started');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

