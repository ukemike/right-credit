import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authPath = [
  '/auth/forgot-password',
  '/auth/login',
  '/auth/reset-password',
  '/auth/signup',
  '/auth/verify',
  '/auth/verify-reset',
  '/'
]; // paths that don't require authentication

export default function middleware(request: NextRequest) {
  const hasToken = request.cookies.get('token');
  const isAuthPath = authPath.includes(request.nextUrl.pathname);
  if (hasToken && isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  let redirectUrl = `/auth/login`;
  if (request.nextUrl.searchParams) {
    redirectUrl += `?${request.nextUrl.searchParams}`;
  }

  if (hasToken) {
    return NextResponse.next();
  }

  if (isAuthPath) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(redirectUrl, request.url));
}
export const config = {
  matcher: [
    '/',
    '/auth/forgot-password',
    '/auth/login',
    '/auth/reset-password',
    '/auth/signup',
    '/auth/verify',
    '/auth/verify-reset',
    '/forgot-password',
    '/dashboard',
    '/dashboard/customers',
    '/dashboard/get-started',
    '/dashboard/loans',
    '/dashboard/products',
    '/dashboard/profile',
    '/dashboard/risk',
    '/dashboard/risk-report',
    '/dashboard/settings',
    '/dashboard/wallet',
  ],
};
