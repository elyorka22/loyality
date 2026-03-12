import { Telegraf } from 'telegraf';

const token = process.env.BOT_TOKEN;

if (!token) {
  // В реальном запуске нужно передать BOT_TOKEN через переменные окружения
  throw new Error('BOT_TOKEN is not set');
}

const bot = new Telegraf(token);

// /start
bot.start(async (ctx) => {
  const businessHint = ctx.message && 'text' in ctx.message
    ? ctx.message.text.split(' ')[1]
    : undefined;

  await ctx.reply(
    businessHint
      ? `Добро пожаловать! Вы зашли по ссылке бизнеса: ${businessHint}.`
      : 'Добро пожаловать в программу лояльности!'
  );
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

