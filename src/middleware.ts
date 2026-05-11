



import { NextResponse, type NextRequest } from 'next/server'
import { clerkMiddleware } from '@clerk/nextjs/server'

const clerkEnabled = Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
)

// Si Clerk no esta configurado en el entorno, deja pasar todas las rutas.
function passthroughMiddleware(_req: NextRequest) {
    return NextResponse.next()
}

// Mantiene disponible auth() de Clerk, pero no bloquea ni redirige rutas.
export default clerkEnabled ? clerkMiddleware(() => {}) : passthroughMiddleware

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)'],
}
