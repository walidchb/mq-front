import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ar', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'ar'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|ar)/:path*']
};