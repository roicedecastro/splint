const APP_PREFIXES = ['/home', '/discover', '/communities', '/profile']

export function isAppPreviewRoute(pathname) {
  return APP_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  )
}
