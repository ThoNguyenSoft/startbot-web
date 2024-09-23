import authConfig from '@/core/configs/auth/authConfig'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // const routesVerify = [
  //   '/',
  //   '/sign-in',
  //   '/sign-up',
  //   '/tour-guide',
  //   '/iam/watchlist',
  //   '/assistants',
  //   '/assistants/:path*',
  //   '/iam/invite'
  // ]
  try {
    const { pathname } = request.nextUrl
    const hostname = request.nextUrl.hostname
    if (!request.cookies.has('hostname')) {
      const response = NextResponse.next()
      response.cookies.set('hostname', hostname) // Replace 'some value' with the desired string value
      return response
    }

    if (request.cookies.has(authConfig.storageTokenKeyName)) {
      // if (pathname === '/sign-in') {
      // if (routesVerify.includes(pathname)) {
      if (
        pathname !== '/news' &&
        pathname !== '/topics' &&
        pathname !== '/social' &&
        pathname !== '/tour' &&
        pathname !== '/referral'
      ) {
        return NextResponse.redirect(new URL('/news', request.url))
      }
    }
    // check !cookie => redirect to sign-in
    //   if (!request.cookies.has(authConfig.storageTokenKeyName) && pathname !== '/coming-soon')
    //     return NextResponse.redirect(new URL('/coming-soon', request.url))
    // } catch (error) {
    //   return NextResponse.redirect(new URL('/coming-soon', request.url))
    // }
    if (!request.cookies.has(authConfig.storageTokenKeyName) && pathname !== '/sign-in')
      return NextResponse.redirect(new URL('/sign-in', request.url))
  } catch (error) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }
}

export const config = {
  // matcher: ['/', '/sign-in', '/iam/watchlist', '/tour-guide']
  matcher: [
    '/',
    '/news',
    '/topics',
    '/social',
    '/sign-in',
    '/coming-soon',
    // '/sign-up',
    '/iam/:path*',
    '/tour',
    '/tour-guide',
    '/referral',
    '/assistants/:path*'
  ]
}
