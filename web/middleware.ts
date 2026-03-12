import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return res;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return req.cookies.get(name)?.value;
      },
      set(_name: string, _value: string, _options: CookieOptions) {
        // Для простоты в этом прототипе не записываем cookie из middleware.
      },
      remove(_name: string, _options: CookieOptions) {
        // Для простоты в этом прототипе не удаляем cookie из middleware.
      }
    }
  });

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const pathname = req.nextUrl.pathname;
  const isProtected =
    pathname.startsWith('/businesses') ||
    pathname.startsWith('/clients') ||
    pathname.startsWith('/campaigns') ||
    pathname.startsWith('/analytics');

  if (isProtected && !user) {
    const redirectUrl = new URL('/login', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ['/businesses/:path*', '/clients/:path*', '/campaigns/:path*', '/analytics/:path*']
};

