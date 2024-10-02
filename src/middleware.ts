import { NextResponse,NextRequest } from 'next/server';
import { cookieGet } from './helper/appStorage';

export function middleware(request: NextRequest) {
  const token = cookieGet("accessToken");
  
  if(token) {
    return NextResponse.redirect(new URL('/', request.url))
  }else{
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/','/auth','/home'],
};  