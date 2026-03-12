// временно отключаем защиту роутов на время отладки авторизации
export function middleware() {
  return;
}

export const config = {
  matcher: ['/businesses/:path*', '/clients/:path*', '/campaigns/:path*', '/analytics/:path*']
};

