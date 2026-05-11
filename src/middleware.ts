



// frontend/src/middleware.ts
import { NextResponse, type NextRequest } from 'next/server'

// Middleware liberado: no aplica autenticación ni redirecciones.
export default function middleware(_req: NextRequest) {
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)'],
}
