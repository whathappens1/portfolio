import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Create middleware for internationalization
const intlMiddleware = createMiddleware(routing);

// Export a custom middleware function
export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // If the pathname starts with a locale, use intl middleware
  if (pathname.match(/^\/(?:ar|en)(?:\/.*)?$/)) {
    return intlMiddleware(request);
  }

  // For paths without locale, redirect to default locale
  const defaultLocale = routing.defaultLocale;
  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  
  // Preserve query parameters if any
  newUrl.search = request.nextUrl.search;
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  // Match all pathnames except those starting with:
  // - api (API routes)
  // - _next (Next.js internals)
  // - static files (favicon.ico, robots.txt, ...)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};