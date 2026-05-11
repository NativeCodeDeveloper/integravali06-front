



import { clerkMiddleware } from '@clerk/nextjs/server'

// Mantiene disponible auth() de Clerk, pero no bloquea ni redirige rutas.
export default clerkMiddleware(() => {})

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)'],
}
