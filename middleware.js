import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Public routes that don't need protection
  const publicPaths = ['/', '/signin', '/signup'];
  const isPublic = publicPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  // Retrieve JWT token from cookies
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const userRole = token?.role || token?.user?.role;

  // If authenticated and trying to access /signin, redirect to their dashboard
  if (token && pathname.startsWith('/signin')) {
    let redirectPath = '/';
    if (userRole === 'admin') redirectPath = '/admin_dashboard';
    else if (userRole === 'student') redirectPath = '/student_dashboard';
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = redirectPath;
    return NextResponse.redirect(dashboardUrl);
  }

  // Allow access to public paths
  if (isPublic) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to signin
  if (!token) {
    console.log(`[MIDDLEWARE] No token found. Redirecting to /signin from ${pathname}`);
    const signinUrl = req.nextUrl.clone();
    signinUrl.pathname = '/signin';
    signinUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(signinUrl);
  }

  // Block admin-only routes from students
  if (pathname.startsWith('/admin_dashboard') && userRole !== 'admin') {
    console.log(`[MIDDLEWARE] User with role ${userRole} tried to access admin dashboard. Redirecting.`);
    let redirectPath = '/';
    if (userRole === 'student') redirectPath = '/student_dashboard';
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = redirectPath;
    return NextResponse.redirect(dashboardUrl);
  }

  // Block student-only routes from admins
  if (pathname.startsWith('/student_dashboard') && userRole !== 'student') {
    console.log(`[MIDDLEWARE] User with role ${userRole} tried to access student dashboard. Redirecting.`);
    let redirectPath = '/';
    if (userRole === 'admin') redirectPath = '/admin_dashboard';
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = redirectPath;
    return NextResponse.redirect(dashboardUrl);
  }

  // Allow access to valid users
  return NextResponse.next();
}

// Apply to specific routes
export const config = {
  matcher: ['/admin_dashboard/:path*', '/student_dashboard/:path*'],
};